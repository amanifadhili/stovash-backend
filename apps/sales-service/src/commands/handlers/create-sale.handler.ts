import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateSaleCommand } from '../impl/create-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';

@CommandHandler(CreateSaleCommand)
export class CreateSaleHandler extends BaseCommandHandler<CreateSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateSaleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context for sale creation',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'At least one item is required to create a sale',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const saleDate = payload.saleDate ? new Date(payload.saleDate) : new Date();
      const year = saleDate.getFullYear();
      const prefix = `SAL-${year}-`;
      const currency = payload.currency || 'RWF';
      const exchangeRate = payload.exchangeRate || 1.0;
      const createdById = userId || 'system';
      const createdByName = userName;
      const sellerId = payload.sellerId || userId || null;
      const sellerName = payload.sellerName || createdByName;

      // Normalize lines and compute totals from the underlying lines.
      let subtotal = 0;
      let discountTotal = 0;
      let taxTotal = 0;
      let otherChargesTotal = 0;
      let additionalCostTotal = 0;
      let grandTotal = 0;
      const lines = payload.items.map((it) => {
        const qty = Number(it.quantity) || 1;
        const unitPrice = Number(it.unitPrice) || 0;
        const gross = qty * unitPrice;
        const discount = it.discountType === 'PERCENTAGE'
          ? (gross * (Number(it.discountAmount) || 0)) / 100
          : (Number(it.discountAmount) || 0);
        const net = gross - discount;
        const tax = it.taxRate != null && Number(it.taxRate) > 0
          ? (net * Number(it.taxRate)) / 100
          : 0;
        const otherCharges = Number(it.otherCharges) || 0;
        const additionalCost = Number(it.additionalCost) || 0;
        const baseCost = Number(it.unitCost) || 0;
        const unitCost = baseCost + additionalCost / qty;
        const lineTotal = net + tax + otherCharges;
        subtotal += gross;
        discountTotal += discount;
        taxTotal += tax;
        otherChargesTotal += otherCharges;
        additionalCostTotal += additionalCost;
        grandTotal += lineTotal;
        return {
          productId: it.productId,
          productName: it.productName || null,
          productSku: it.productSku || null,
          inventoryItemId: it.inventoryItemId || null,
          serialNumber: it.serialNumber || '',
          imei1: it.imei1 || null,
          imei2: it.imei2 || null,
          quantity: qty,
          unitPrice,
          discountType: it.discountType || 'FIXED',
          discountAmount: discount,
          taxRate: Number(it.taxRate) || 0,
          taxAmount: tax,
          otherCharges,
          additionalCost,
          additionalCostPaymentMethod: it.additionalCostPaymentMethod || null,
          netTotal: net,
          lineTotal,
          total: lineTotal,
          unitCost,
        };
      });
      const totalCost = lines.reduce((s, l) => s + l.unitCost * l.quantity, 0);

      // Generate a unique, gap-safe sale number for the year. Each attempt is its
      // own transaction; on a (rare) unique-constraint clash we re-read and retry.
      let sale: any = null;
      for (let attempt = 0; attempt < 10 && !sale; attempt++) {
        const last = await prisma.sale.findFirst({
          where: { orderNumber: { startsWith: prefix } },
          orderBy: { orderNumber: 'desc' },
          select: { orderNumber: true },
        });
        let nextNumber = 1;
        if (last) {
          const parsed = parseInt(String(last.orderNumber).split('-')[2] || '0', 10);
          if (!Number.isNaN(parsed)) nextNumber = parsed + 1;
        }
        const orderNumber = `${prefix}${String(nextNumber).padStart(6, '0')}`;
        try {
          sale = await prisma.sale.create({
            data: {
              tenantId,
              shopId,
              orderNumber,
              customerId: payload.customerId || null,
              customerName: payload.customerName || null,
              sellerId,
              sellerName,
              saleDate,
              currency,
              exchangeRate,
              status: 'COMPLETED',
              commercialStatus: 'DRAFT',
              fulfillmentStatus: 'NOT_FULFILLED',
              paymentStatus: 'UNPAID',
              accountingStatus: 'UNPOSTED',
              subtotal,
              discountTotal,
              taxTotal,
              otherChargesTotal,
              additionalCostTotal,
              grandTotal,
              amountPaid: 0,
              amountDue: grandTotal,
              totalAmount: grandTotal,
              totalCost,
              profit: grandTotal - totalCost,
              paymentMethod: 'CASH',
              notes: payload.notes || null,
              createdById,
            },
          });
        } catch (createErr: any) {
          if (createErr?.code === 'P2002') continue;
          throw createErr;
        }
      }

      if (!sale) {
        return {
          status: 'error',
          traceId,
          message: 'Unable to generate a unique sale number',
          errorCode: ErrorCode.INTERNAL_ERROR,
        };
      }

      // Create the line items.
      const createdItems = [];
      for (const line of lines) {
        const item = await prisma.saleItem.create({
          data: { saleId: sale.id, ...line },
        });
        createdItems.push(item);
      }

      // History entries
      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'CREATED',
          eventData: JSON.stringify({ orderNumber: sale.orderNumber, customerName: payload.customerName || null, sellerName, createdBy: createdByName }),
          userId: createdById,
          userName: createdByName,
          traceId,
        },
      });
      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'ITEM_ADDED',
          eventData: JSON.stringify({ itemsCount: createdItems.length, createdBy: createdByName }),
          userId: createdById,
          userName: createdByName,
          traceId,
        },
      });

      // Audit log
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId: createdById,
          action: 'CreateSale',
          resource: 'Sale',
          resourceId: sale.id,
          traceId,
          details: JSON.stringify({ orderNumber: sale.orderNumber, grandTotal }),
        },
      });

      // Publish SaleCreated event with the exact inventory item ids.
      await this.eventBus.publish(
        {
          eventType: 'SaleCreated',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId,
          payload: {
            saleId: sale.id,
            tenantId,
            shopId,
            orderNumber: sale.orderNumber,
            saleDate: saleDate.toISOString(),
            customerId: payload.customerId || null,
            customerName: payload.customerName || null,
            sellerId,
            sellerName,
            currency,
            exchangeRate,
            subtotal,
            discountTotal,
            taxTotal,
            otherChargesTotal,
            additionalCostTotal,
            grandTotal,
            totalAmount: grandTotal,
            commercialStatus: 'DRAFT',
            fulfillmentStatus: 'NOT_FULFILLED',
            paymentStatus: 'UNPAID',
            accountingStatus: 'UNPOSTED',
            items: createdItems.map((i: any) => ({
              saleItemId: i.id,
              productId: i.productId,
              inventoryItemId: i.inventoryItemId,
              serialNumber: i.serialNumber,
              quantity: i.quantity,
              unitPrice: i.unitPrice,
              unitCost: i.unitCost,
              discountAmount: i.discountAmount,
              taxAmount: i.taxAmount,
              otherCharges: i.otherCharges,
              additionalCost: i.additionalCost,
              additionalCostPaymentMethod: i.additionalCostPaymentMethod,
              lineTotal: i.lineTotal,
            })),
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.created',
      );

      return {
        status: 'success',
        traceId,
        data: { ...sale, items: createdItems },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}