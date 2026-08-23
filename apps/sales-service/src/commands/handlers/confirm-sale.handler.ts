import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ConfirmSaleCommand } from '../impl/confirm-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';
import { firstValueFrom, timeout } from 'rxjs';
import { francsToMinor, isoDay, sendFinanceCommand } from '../../common/commercial-finance.js';
import { loadInventoryBookCosts, unitCostWithExtras } from '../../common/sale-line-cost.js';

@CommandHandler(ConfirmSaleCommand)
export class ConfirmSaleHandler extends BaseCommandHandler<ConfirmSaleCommand> {
  constructor(
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
    @Inject('ACCOUNTING_SERVICE') private readonly accountingClient: ClientProxy,
  ) {
    super();
  }

  async execute(command: ConfirmSaleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, userId, userName, traceId } = actorOf(context);
    const createdById = userId || 'system';

    try {
      if (!payload?.saleId) {
        return {
          status: 'error',
          traceId,
          message: 'saleId is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const sale = await prisma.sale.findUnique({
        where: { id: payload.saleId },
        include: { items: true },
      });
      if (!sale || sale.tenantId !== tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Sale not found for this tenant',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }
      if (sale.commercialStatus === 'CANCELLED') {
        return {
          status: 'error',
          traceId,
          message: 'Cancelled sales cannot be confirmed',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }
      if (sale.commercialStatus !== 'DRAFT' && sale.commercialStatus !== 'CONFIRMED') {
        return {
          status: 'error',
          traceId,
          message: 'Only DRAFT sales can be confirmed',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }
      if (!sale.items || sale.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Cannot confirm a sale without items',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const financeContext = {
        tenantId,
        shopId: sale.shopId,
        userId: createdById,
        traceId,
      };

      if (sale.commercialStatus === 'CONFIRMED') {
        const replay = await this.postSaleBooks(sale, financeContext, traceId);
        if (replay.status === 'error') return replay;
        // On replay (retry same ConfirmSale), we still want the sale to reflect that
        // engine books exist. This must be idempotent: setting POSTED again is safe.
        const updatedOnReplay = await prisma.sale.update({
          where: { id: sale.id },
          data: {
            accountingStatus: 'POSTED',
            ...this.profitCacheFromBooks(replay),
          },
        });
        return { status: 'success', traceId, data: updatedOnReplay };
      }

      const stockResult = await firstValueFrom(
        this.inventoryClient
          .send(
            { cmd: 'ApplySaleFulfillment' },
            {
              payload: {
                saleId: sale.id,
                shopId: sale.shopId,
                customerId: sale.customerId || null,
                counterpartyName: sale.customerName || 'Walk-in',
                fulfilledBy: createdById,
                items: (sale.items ?? []).map((i: any) => ({
                  saleItemId: i.id,
                  productId: i.productId,
                  inventoryItemId: i.inventoryItemId,
                  serialNumber: i.serialNumber,
                  quantity: i.quantity,
                })),
              },
              context: financeContext,
            },
          )
          .pipe(timeout(15000)),
      );

      if (!stockResult || stockResult.status === 'error') {
        return {
          status: 'error',
          traceId,
          message: stockResult?.message || 'Inventory could not fulfill this sale',
          errorCode: stockResult?.errorCode || ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      await this.applyInventoryBookCosts(sale, financeContext);

      const books = await this.postSaleBooks(sale, financeContext, traceId);
      if (books.status === 'error') return books;

      const updated = await prisma.sale.update({
        where: { id: sale.id },
        data: {
          commercialStatus: 'CONFIRMED',
          status: 'COMPLETED',
          fulfillmentStatus: 'FULFILLED',
          accountingStatus: 'POSTED',
          confirmedById: createdById,
          confirmedAt: new Date(),
          fulfilledById: createdById,
          fulfilledAt: new Date(),
          ...this.profitCacheFromBooks(books),
        },
      });

      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'CONFIRMED',
          eventData: JSON.stringify({
            orderNumber: sale.orderNumber,
            confirmedBy: userName,
            financialTransactionId: books.data?.financialTransaction?.id || null,
            cogsFinancialTransactionId: books.data?.cogsFinancialTransaction?.id || null,
            profitEarnedMinor: books.data?.profitEarnedMinor || null,
          }),
          userId: createdById,
          userName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId: sale.shopId,
          userId: createdById,
          action: 'ConfirmSale',
          resource: 'Sale',
          resourceId: sale.id,
          traceId,
          details: JSON.stringify({ orderNumber: sale.orderNumber }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'SaleConfirmed',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId: sale.shopId,
          payload: {
            saleId: sale.id,
            orderNumber: sale.orderNumber,
            commercialStatus: 'CONFIRMED',
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.confirmed',
      );

      await this.eventBus.publish(
        {
          eventType: 'SaleFulfilled',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId: sale.shopId,
          payload: {
            tenantId,
            shopId: sale.shopId,
            saleId: sale.id,
            orderNumber: sale.orderNumber,
            customerId: sale.customerId || null,
            fulfillmentStatus: 'FULFILLED',
            fulfilledBy: createdById,
            items: (sale.items ?? []).map((i: any) => ({
              saleItemId: i.id,
              productId: i.productId,
              inventoryItemId: i.inventoryItemId,
              serialNumber: i.serialNumber,
              quantity: i.quantity,
              unitCost: i.unitCost,
              unitPrice: i.unitPrice,
            })),
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.fulfilled',
      );

      return { status: 'success', traceId, data: updated };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to confirm sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private async postSaleBooks(
    sale: any,
    financeContext: Record<string, unknown>,
    traceId: string,
  ): Promise<ICommandResponse<any>> {
    const revenueMinor = francsToMinor(sale.grandTotal);
    if (!revenueMinor) {
      return {
        status: 'error',
        traceId,
        message: 'Sale total must be a positive amount to post books',
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    }
    const costFrancs = (sale.items ?? []).reduce(
      (sum: number, item: any) => sum + (Number(item.unitCost) || 0) * (Number(item.quantity) || 0),
      0,
    );
    const cogsMinor = costFrancs > 0 ? francsToMinor(costFrancs) : undefined;
    return sendFinanceCommand(
      this.accountingClient,
      'PostSaleConfirmation',
      {
        saleId: sale.id,
        customerName: sale.customerName || 'Walk-in Customer',
        revenueMinor,
        cogsMinor,
        occurredOn: isoDay(sale.saleDate),
        description: `Sale ${sale.orderNumber}`,
      },
      financeContext,
    );
  }

  private async applyInventoryBookCosts(sale: any, financeContext: Record<string, unknown>) {
    const bookById = await loadInventoryBookCosts(
      this.inventoryClient,
      (sale.items ?? []).map((item: any) => item.inventoryItemId),
      financeContext,
    );
    if (bookById.size === 0) return;
    let totalCost = 0;
    for (const item of sale.items ?? []) {
      const book = item.inventoryItemId ? bookById.get(item.inventoryItemId) : undefined;
      if (book != null) {
        item.unitCost = unitCostWithExtras(book, item.additionalCost, item.quantity);
      }
      totalCost += (Number(item.unitCost) || 0) * (Number(item.quantity) || 0);
    }
    await prisma.$transaction([
      ...(sale.items ?? []).map((item: any) =>
        prisma.saleItem.update({ where: { id: item.id }, data: { unitCost: item.unitCost } }),
      ),
      prisma.sale.update({ where: { id: sale.id }, data: { totalCost } }),
    ]);
  }

  /** Sale.profit is a display cache of engine profit earned; never a second SoT. */
  private profitCacheFromBooks(books: ICommandResponse<any>): { profit?: number } {
    const minor = Number(books?.data?.profitEarnedMinor);
    if (!Number.isFinite(minor) || minor < 0) return {};
    return { profit: minor / 100 };
  }
}
