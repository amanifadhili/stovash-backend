import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { IssueRefundCommand } from '../impl/issue-refund.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';
import { createHash } from 'node:crypto';
import { firstValueFrom, timeout } from 'rxjs';
import {
  francsToMinor,
  isoDay,
  operationalKindForMethod,
  sendFinanceCommand,
} from '../../common/commercial-finance.js';

function minorToFrancs(minor: string | number): number {
  return Number(minor) / 100;
}

@CommandHandler(IssueRefundCommand)
export class IssueRefundHandler extends BaseCommandHandler<IssueRefundCommand> {
  constructor(
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
    @Inject('ACCOUNTING_SERVICE') private readonly accountingClient: ClientProxy,
    @Inject('TREASURY_SERVICE') private readonly treasuryClient: ClientProxy,
  ) {
    super();
  }

  async execute(command: IssueRefundCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, userId, userName, traceId } = actorOf(context);
    const createdById = userId || 'system';

    try {
      const saleId = payload?.saleId;
      const kind = payload?.kind;
      const reason = typeof payload?.reason === 'string' ? payload.reason.trim() : '';
      const idempotencyKey = typeof payload?.idempotencyKey === 'string' ? payload.idempotencyKey.trim() : '';

      if (!saleId || !idempotencyKey) {
        return {
          status: 'error',
          traceId,
          message: 'saleId and idempotencyKey are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (kind !== 'PHYSICAL' && kind !== 'GOODWILL') {
        return {
          status: 'error',
          traceId,
          message: 'kind must be PHYSICAL or GOODWILL',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!reason) {
        return {
          status: 'error',
          traceId,
          message: 'A reason is required to issue a refund',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const refundMinorStr = String(payload.amountMinor).trim();
      const refundMinorOk = /^[1-9]\d*$/.test(refundMinorStr);
      if (!refundMinorOk) {
        return {
          status: 'error',
          traceId,
          message: 'amountMinor must be a positive integer (RWF cents)',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      const refundFrancs = minorToFrancs(refundMinorStr);

      const sale = await prisma.sale.findUnique({
        where: { id: saleId },
        include: { items: true, payments: true, returns: true },
      });
      if (!sale || sale.tenantId !== tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Sale not found for this tenant',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }
      if (sale.commercialStatus !== 'CONFIRMED' || sale.accountingStatus !== 'POSTED') {
        return {
          status: 'error',
          traceId,
          message: 'Refunds can only be issued against a confirmed posted sale',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const year = new Date().getFullYear();
      const prefix = `SR-${year}-`;
      const hex = createHash('sha256').update(`${sale.id}:${idempotencyKey}`).digest('hex');
      const seq = parseInt(hex.slice(-6), 16) % 1_000_000;
      const returnNumber = `${prefix}${String(seq).padStart(6, '0')}`;

      const existing = await prisma.saleReturn.findFirst({
        where: { saleId: sale.id, returnNumber },
        include: { items: true },
      });
      if (existing?.status === 'COMPLETED') {
        return { status: 'success', traceId, data: { ...existing, existingIfReplay: true } };
      }

      const physicalItems = kind === 'PHYSICAL' ? this.resolvePhysicalItems(sale, payload.items || []) : [];
      if (kind === 'PHYSICAL' && physicalItems.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Physical refunds require at least one original sale item',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const completedReturns = (sale.returns || []).filter((r) => r.status === 'COMPLETED' && r.returnNumber !== returnNumber);
      const priorRefundFrancs = completedReturns.reduce((s, r) => s + Number(r.approvedRefund || 0), 0);
      if (priorRefundFrancs + refundFrancs > sale.grandTotal + 0.0001) {
        return {
          status: 'error',
          traceId,
          message: 'Refund exceeds remaining sale total',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const paidFrancs = (sale.payments || []).reduce((s, p) => s + Number(p.amount || 0), 0);
      const priorCashFrancs = completedReturns.reduce((s, r) => s + Number(r.refundedAmount || 0), 0);
      const cashOutFrancs = Math.min(refundFrancs, Math.max(0, paidFrancs - priorCashFrancs));
      const cashOutMinor = cashOutFrancs > 0 ? francsToMinor(cashOutFrancs) : null;

      if (cashOutFrancs > 0 && !payload.fromPhysicalId && !operationalKindForMethod(payload.fromKind || '')) {
        return {
          status: 'error',
          traceId,
          message: 'Cash refund requires an Operational source account (fromKind or fromPhysicalId)',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      let saleReturn = existing;
      if (!saleReturn) {
        saleReturn = await prisma.saleReturn.create({
          data: {
            tenantId,
            shopId: sale.shopId,
            saleId: sale.id,
            customerId: sale.customerId || null,
            returnNumber,
            currency: sale.currency || 'RWF',
            exchangeRate: sale.exchangeRate || 1,
            totalAmount: refundFrancs,
            originalAmount: refundFrancs,
            approvedRefund: refundFrancs,
            refundedAmount: cashOutFrancs,
            retainedAmount: Math.max(0, refundFrancs - cashOutFrancs),
            refundAmount: refundFrancs,
            refundMethod: kind,
            reason,
            status: 'PENDING',
            createdById,
            items: {
              create: physicalItems.map((it) => ({
                saleItemId: it.saleItemId,
                inventoryItemId: it.inventoryItemId,
                productId: it.productId,
                serialNumber: it.serialNumber || '',
                quantity: it.quantity,
                unitCost: it.unitCost,
                originalAmount: it.originalAmount,
                approvedRefund: it.approvedRefund,
                refundedAmount: 0,
                retainedAmount: 0,
                refundAmount: it.approvedRefund,
              })),
            },
          },
          include: { items: true },
        });
      }

      const financeContext = {
        tenantId,
        shopId: sale.shopId,
        userId: createdById,
        traceId,
      };
      const occurredOn = payload.occurredOn || isoDay();

      if (kind === 'PHYSICAL') {
        const stock = await firstValueFrom(
          this.inventoryClient
            .send(
              { cmd: 'ApplySaleReturn' },
              {
                payload: {
                  saleId: sale.id,
                  refundId: saleReturn.id,
                  shopId: sale.shopId,
                  customerId: sale.customerId || null,
                  counterpartyName: sale.customerName || 'Walk-in',
                  returnedBy: createdById,
                  items: physicalItems.map((it) => ({
                    inventoryItemId: it.inventoryItemId,
                    productId: it.productId,
                    serialNumber: it.serialNumber,
                    quantity: it.quantity,
                  })),
                },
                context: financeContext,
              },
            )
            .pipe(timeout(15000)),
        );
        if (!stock || stock.status === 'error') {
          return {
            status: 'error',
            traceId,
            message: stock?.message || 'Inventory could not apply this return',
            errorCode: stock?.errorCode || ErrorCode.BUSINESS_RULE_VIOLATION,
          };
        }
      }

      const cogsFrancs = physicalItems.reduce((s, it) => s + it.unitCost * it.quantity, 0);
      const cogsMinor = kind === 'PHYSICAL' && cogsFrancs > 0 ? francsToMinor(cogsFrancs) : undefined;

      const books = await sendFinanceCommand(
        this.accountingClient,
        'PostSaleRefund',
        {
          saleId: sale.id,
          kind,
          refundMinor: refundMinorStr,
          cogsMinor,
          reason,
          occurredOn,
          idempotencyKey,
          description: `Refund ${sale.orderNumber}`,
        },
        financeContext,
      );
      if (books.status === 'error') return books;

      let treasuryMovement: any = null;
      if (cashOutMinor) {
        const movement = await sendFinanceCommand(
          this.treasuryClient,
          'CreateTreasuryMovement',
          {
            movementType: 'SALE_REFUND',
            amountMinor: cashOutMinor,
            occurredOn,
            fromPhysicalId: payload.fromPhysicalId || undefined,
            fromKind: operationalKindForMethod(payload.fromKind || '') || payload.fromKind || undefined,
            obligationSourceId: sale.id,
            reason,
            idempotencyKey: `IssueRefund:CASH:${sale.id}:${idempotencyKey}`,
          },
          financeContext,
        );
        if (movement.status === 'error') return movement;
        treasuryMovement = movement.data;
      }

      const outstandingMinor = Number(books.data?.receivable?.outstandingMinor || '0');
      const remainingRevenueMinor = Number(books.data?.remainingRevenueMinor || '0');
      const amountDue = Math.max(0, outstandingMinor / 100);
      const remaining = Math.max(0, remainingRevenueMinor / 100);
      const amountPaid = Math.max(0, remaining - amountDue);
      const paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' =
        amountPaid <= 0 ? 'UNPAID' : amountDue <= 0 ? 'PAID' : 'PARTIALLY_PAID';

      const profitReversed = Number(books.data?.profitReversedMinor || '0') / 100;
      const nextProfit = Number.isFinite(sale.profit) ? sale.profit - profitReversed : sale.profit;

      const updatedSale = await prisma.sale.update({
        where: { id: sale.id },
        data: {
          amountDue,
          amountPaid,
          paymentStatus,
          profit: nextProfit,
          status: remaining <= 0 ? 'REFUNDED' : sale.status,
        },
      });

      const completed = await prisma.saleReturn.update({
        where: { id: saleReturn.id },
        data: { status: 'COMPLETED', refundedAmount: cashOutFrancs },
        include: { items: true },
      });

      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'REFUND_ISSUED',
          eventData: JSON.stringify({
            returnNumber,
            kind,
            refundFrancs,
            cashOutFrancs,
            reason,
            financialTransactionId: books.data?.financialTransaction?.id || null,
            treasuryMovementId: treasuryMovement?.id || null,
            issuedBy: userName,
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
          action: 'IssueRefund',
          resource: 'Sale',
          resourceId: sale.id,
          traceId,
          details: JSON.stringify({
            returnNumber,
            kind,
            refundMinor: refundMinorStr,
            cashOutMinor: cashOutMinor || '0',
            reason,
          }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'SaleRefundIssued',
          aggregateId: completed.id,
          aggregateType: 'SaleReturn',
          tenantId,
          shopId: sale.shopId,
          payload: {
            tenantId,
            shopId: sale.shopId,
            returnId: completed.id,
            returnNumber,
            saleId: sale.id,
            kind,
            refundMinor: refundMinorStr,
            cashOutMinor: cashOutMinor || '0',
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.refund-issued',
      );

      return {
        status: 'success',
        traceId,
        data: {
          saleReturn: completed,
          sale: updatedSale,
          books: books.data,
          treasuryMovement,
          cashOutMinor: cashOutMinor || '0',
          existingIfReplay: false,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to issue refund',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private resolvePhysicalItems(
    sale: { items: any[] },
    requested: Array<{
      saleItemId?: string;
      inventoryItemId?: string | null;
      productId?: string;
      serialNumber?: string;
      quantity?: number;
      unitCost?: number;
    }>,
  ) {
    const lines: Array<{
      saleItemId: string;
      inventoryItemId: string | null;
      productId: string;
      serialNumber: string;
      quantity: number;
      unitCost: number;
      originalAmount: number;
      approvedRefund: number;
    }> = [];

    for (const req of requested) {
      const qty = Number(req.quantity) || 0;
      if (qty <= 0) continue;
      const match = sale.items.find(
        (it) =>
          (req.saleItemId && it.id === req.saleItemId) ||
          (req.inventoryItemId && it.inventoryItemId === req.inventoryItemId) ||
          (req.productId && it.productId === req.productId && !req.saleItemId),
      );
      if (!match) {
        throw Object.assign(new Error('Refund item does not belong to this sale'), {
          code: ErrorCode.BUSINESS_RULE_VIOLATION,
        });
      }
      if (qty > Number(match.quantity)) {
        throw Object.assign(new Error('Return quantity exceeds sold quantity'), {
          code: ErrorCode.BUSINESS_RULE_VIOLATION,
        });
      }
      const unitCost = Number(req.unitCost) || Number(match.unitCost) || 0;
      const linePrice = Number(match.unitPrice) || 0;
      lines.push({
        saleItemId: match.id,
        inventoryItemId: match.inventoryItemId || req.inventoryItemId || null,
        productId: match.productId,
        serialNumber: match.serialNumber || req.serialNumber || '',
        quantity: qty,
        unitCost,
        originalAmount: linePrice * qty,
        approvedRefund: linePrice * qty,
      });
    }
    return lines;
  }
}
