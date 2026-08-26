import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ProcessSaleReplacementCommand } from '../impl/process-sale-replacement.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';
import { createHash } from 'node:crypto';
import { firstValueFrom, timeout } from 'rxjs';

/**
 * Even-swap replacement: take original back (RETURNED) without cash/books refund,
 * fulfill a similar AVAILABLE unit as SOLD, rewrite SaleItem identity, preserve amountDue.
 */
@CommandHandler(ProcessSaleReplacementCommand)
export class ProcessSaleReplacementHandler extends BaseCommandHandler<ProcessSaleReplacementCommand> {
  constructor(
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
  ) {
    super();
  }

  async execute(command: ProcessSaleReplacementCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, userId, userName, traceId } = actorOf(context);
    const createdById = userId || 'system';

    try {
      const saleId = typeof payload?.saleId === 'string' ? payload.saleId.trim() : '';
      const saleItemId = typeof payload?.saleItemId === 'string' ? payload.saleItemId.trim() : '';
      const replacementInventoryItemId =
        typeof payload?.replacementInventoryItemId === 'string'
          ? payload.replacementInventoryItemId.trim()
          : '';
      const reason = typeof payload?.reason === 'string' ? payload.reason.trim() : '';
      const idempotencyKey =
        typeof payload?.idempotencyKey === 'string' ? payload.idempotencyKey.trim() : '';
      const assertOriginalId =
        typeof payload?.originalInventoryItemId === 'string'
          ? payload.originalInventoryItemId.trim()
          : '';

      if (!saleId || !saleItemId || !replacementInventoryItemId || !idempotencyKey) {
        return {
          status: 'error',
          traceId,
          message:
            'saleId, saleItemId, replacementInventoryItemId, and idempotencyKey are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!reason) {
        return {
          status: 'error',
          traceId,
          message: 'A reason is required for replacement',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const sale = await prisma.sale.findUnique({
        where: { id: saleId },
        include: { items: true, returns: true },
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
          message: 'Replacement requires a confirmed posted sale',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const saleItem = sale.items.find((i) => i.id === saleItemId);
      if (!saleItem) {
        return {
          status: 'error',
          traceId,
          message: 'Sale line not found on this sale',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }
      if (!saleItem.inventoryItemId) {
        return {
          status: 'error',
          traceId,
          message: 'Only serialized sale lines can be replaced',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }
      if (assertOriginalId && assertOriginalId !== saleItem.inventoryItemId) {
        return {
          status: 'error',
          traceId,
          message: 'Sale line no longer matches the original device',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }
      if (saleItem.inventoryItemId === replacementInventoryItemId) {
        return {
          status: 'error',
          traceId,
          message: 'Replacement unit must be different from the original',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const year = new Date().getFullYear();
      const prefix = `SX-${year}-`;
      const hex = createHash('sha256')
        .update(`${sale.id}:${saleItemId}:${idempotencyKey}`)
        .digest('hex');
      const seq = parseInt(hex.slice(-6), 16) % 1_000_000;
      const returnNumber = `${prefix}${String(seq).padStart(6, '0')}`;

      const existing = await prisma.saleReturn.findFirst({
        where: { saleId: sale.id, returnNumber },
        include: { items: true },
      });
      if (existing?.status === 'COMPLETED') {
        const refreshedItem = await prisma.saleItem.findUnique({ where: { id: saleItemId } });
        return {
          status: 'success',
          traceId,
          data: {
            saleReturn: existing,
            saleItem: refreshedItem,
            amountDue: sale.amountDue,
            existingIfReplay: true,
          },
        };
      }

      const financeContext = {
        tenantId,
        shopId: sale.shopId,
        userId: createdById,
        traceId,
      };

      const life = await firstValueFrom(
        this.inventoryClient
          .send(
            { cmd: 'GetDeviceLife' },
            {
              payload: { inventoryItemId: replacementInventoryItemId },
              context: financeContext,
            },
          )
          .pipe(timeout(15000)),
      );
      if (!life || life.status === 'error' || !life.data?.unit) {
        return {
          status: 'error',
          traceId,
          message: life?.message || 'Replacement unit not found',
          errorCode: life?.errorCode || ErrorCode.NOT_FOUND,
        };
      }
      const replacement = life.data.unit;
      if (String(replacement.status || '').toUpperCase() !== 'AVAILABLE') {
        return {
          status: 'error',
          traceId,
          message: `Replacement unit must be AVAILABLE (status: ${replacement.status})`,
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const originalInventoryItemId = saleItem.inventoryItemId;
      const oldSerial = saleItem.serialNumber || '';
      const newSerial = String(replacement.serialNumber || '');
      const newProductId = String(replacement.productId || saleItem.productId);
      const newProductName = replacement.productName ?? saleItem.productName;
      const newProductSku = replacement.productSku ?? saleItem.productSku;
      const newUnitCost =
        Number(life.data.costs?.totalCost ?? life.data.costs?.purchaseCost ?? saleItem.unitCost) || 0;
      const newImei1 = replacement.imei1 ?? saleItem.imei1;
      const newImei2 = replacement.imei2 ?? saleItem.imei2;

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
            totalAmount: 0,
            originalAmount: 0,
            approvedRefund: 0,
            refundedAmount: 0,
            retainedAmount: 0,
            refundAmount: 0,
            refundMethod: 'REPLACEMENT',
            reason,
            status: 'PENDING',
            createdById,
            items: {
              create: [
                {
                  saleItemId: saleItem.id,
                  inventoryItemId: originalInventoryItemId,
                  productId: saleItem.productId,
                  serialNumber: oldSerial,
                  quantity: Math.max(1, Number(saleItem.quantity) || 1),
                  unitCost: Number(saleItem.unitCost) || 0,
                  originalAmount: 0,
                  approvedRefund: 0,
                  refundedAmount: 0,
                  retainedAmount: 0,
                  refundAmount: 0,
                },
              ],
            },
          },
          include: { items: true },
        });
      }

      const takeBack = await firstValueFrom(
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
                items: [
                  {
                    inventoryItemId: originalInventoryItemId,
                    productId: saleItem.productId,
                    serialNumber: oldSerial,
                    quantity: Math.max(1, Number(saleItem.quantity) || 1),
                  },
                ],
              },
              context: financeContext,
            },
          )
          .pipe(timeout(15000)),
      );
      if (!takeBack || takeBack.status === 'error') {
        return {
          status: 'error',
          traceId,
          message: takeBack?.message || 'Inventory could not take back the original unit',
          errorCode: takeBack?.errorCode || ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const fulfill = await firstValueFrom(
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
                items: [
                  {
                    saleItemId: saleItem.id,
                    productId: newProductId,
                    inventoryItemId: replacementInventoryItemId,
                    serialNumber: newSerial,
                    quantity: Math.max(1, Number(saleItem.quantity) || 1),
                  },
                ],
              },
              context: financeContext,
            },
          )
          .pipe(timeout(15000)),
      );
      if (!fulfill || fulfill.status === 'error') {
        return {
          status: 'error',
          traceId,
          message: fulfill?.message || 'Inventory could not issue the replacement unit',
          errorCode: fulfill?.errorCode || ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const updatedItem = await prisma.saleItem.update({
        where: { id: saleItem.id },
        data: {
          inventoryItemId: replacementInventoryItemId,
          serialNumber: newSerial,
          productId: newProductId,
          productName: newProductName,
          productSku: newProductSku,
          unitCost: newUnitCost,
          imei1: newImei1,
          imei2: newImei2,
        },
      });

      await prisma.saleWarranty.updateMany({
        where: { saleItemId: saleItem.id, saleId: sale.id },
        data: { inventoryItemId: replacementInventoryItemId },
      });

      const completedReturn = await prisma.saleReturn.update({
        where: { id: saleReturn.id },
        data: { status: 'COMPLETED' },
        include: { items: true },
      });

      // amountDue / amountPaid / paymentStatus intentionally unchanged
      const stillDue = Number(sale.amountDue) || 0;

      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'REPLACEMENT',
          eventData: JSON.stringify({
            saleItemId: saleItem.id,
            saleReturnId: completedReturn.id,
            returnNumber,
            originalInventoryItemId,
            replacementInventoryItemId,
            oldSerial,
            newSerial,
            reason,
            amountDuePreserved: stillDue,
            replacedBy: userName,
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
          action: 'ProcessSaleReplacement',
          resource: 'Sale',
          resourceId: sale.id,
          traceId,
          details: JSON.stringify({
            saleItemId,
            originalInventoryItemId,
            replacementInventoryItemId,
            oldSerial,
            newSerial,
            returnNumber,
          }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'SaleItemReplaced',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId: sale.shopId,
          payload: {
            saleId: sale.id,
            saleItemId: saleItem.id,
            saleReturnId: completedReturn.id,
            originalInventoryItemId,
            replacementInventoryItemId,
            oldSerial,
            newSerial,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        } as any,
        'sale.item-replaced',
      );

      return {
        status: 'success',
        traceId,
        data: {
          saleReturn: completedReturn,
          saleItem: updatedItem,
          amountDue: stillDue,
          originalInventoryItemId,
          replacementInventoryItemId,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to process sale replacement',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
