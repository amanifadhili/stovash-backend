import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordInventoryIncidentCommand } from '../impl/record-inventory-incident.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';
import { adjustShopBalance, getShopBalanceQty } from '../../common/shop-product-balance.js';

const INCIDENT_TYPES = ['DAMAGED', 'LOST', 'STOLEN'] as const;
const BLOCKED_ITEM_STATUSES = ['SOLD', 'DISPOSED', 'DAMAGED', 'LOST', 'STOLEN', 'RETURNED'];

@CommandHandler(RecordInventoryIncidentCommand)
export class RecordInventoryIncidentHandler extends BaseCommandHandler<RecordInventoryIncidentCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: RecordInventoryIncidentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      if (!payload?.incidentType || !INCIDENT_TYPES.includes(payload.incidentType)) {
        return {
          status: 'error',
          traceId,
          message: 'incidentType must be DAMAGED, LOST, or STOLEN',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      if (!payload.inventoryItemId && !payload.productId) {
        return {
          status: 'error',
          traceId,
          message: 'inventoryItemId or productId is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const result = await prisma.$transaction(async (tx) => {
        if (payload.inventoryItemId) {
          const invItem = await tx.inventoryItem.findFirst({
            where: { id: payload.inventoryItemId, tenantId },
          });
          if (!invItem) throw Object.assign(new Error('Inventory item not found'), { code: ErrorCode.NOT_FOUND });
          if (invItem.shopId !== shopId) {
            throw Object.assign(new Error('Inventory item does not belong to this shop'), { code: ErrorCode.UNAUTHORIZED });
          }
          if (BLOCKED_ITEM_STATUSES.includes(invItem.status)) {
            throw Object.assign(
              new Error(`Cannot record loss on a ${invItem.status.toLowerCase()} unit`),
              { code: ErrorCode.VALIDATION_ERROR },
            );
          }

          const writeOffAmount =
            payload.writeOffAmount != null
              ? Number(payload.writeOffAmount)
              : Number(invItem.purchaseCost || 0) + Number(invItem.capitalizedCost || 0);
          const ownedOnBooks = ['CREATED', 'RECEIVED', 'AVAILABLE', 'RESERVED', 'RENTED_OUT'].includes(
            invItem.status,
          );

          await tx.inventoryItem.update({
            where: { id: invItem.id },
            data: { status: payload.incidentType, updatedBy: userId },
          });

          await tx.rentalAgreement.updateMany({
            where: { tenantId, inventoryItemId: invItem.id, status: 'ACTIVE' },
            data: {
              status: 'CANCELLED',
              actualReturn: new Date(),
              notes: [payload.description, `${payload.incidentType} write-off`].filter(Boolean).join(' — '),
            },
          });

          const adjustment = await tx.inventoryAdjustment.create({
            data: {
              tenantId,
              shopId,
              inventoryItemId: invItem.id,
              adjustmentType: payload.incidentType,
              reason: [payload.description, writeOffAmount ? `Write-off RWF ${writeOffAmount}` : null]
                .filter(Boolean)
                .join(' — ') || null,
              quantity: 1,
              createdBy: userId,
            },
          });

          await tx.inventoryMovement.create({
            data: {
              tenantId,
              shopId,
              inventoryItemId: invItem.id,
              productId: invItem.productId,
              movementType: 'OUT',
              quantity: 1,
              referenceId: adjustment.id,
              referenceType: 'INVENTORY_INCIDENT',
              createdBy: userId,
            },
          });

          return {
            kind: 'SERIALIZED' as const,
            inventoryItemId: invItem.id,
            productId: invItem.productId,
            serialNumber: invItem.serialNumber,
            productName: invItem.name,
            quantity: 1,
            writeOffAmount,
            postToBooks: ownedOnBooks && writeOffAmount > 0,
            previousStatus: invItem.status,
            adjustmentId: adjustment.id,
          };
        }

        const product = await tx.product.findFirst({ where: { id: payload.productId, tenantId } });
        if (!product) throw Object.assign(new Error('Product not found'), { code: ErrorCode.NOT_FOUND });
        const qty = Math.max(1, Number(payload.quantity) || 1);
        const onHand = await getShopBalanceQty(tx, {
          tenantId,
          shopId,
          productId: product.id,
        });
        if (onHand < qty) {
          throw Object.assign(
            new Error(`Not enough stock: have ${onHand}, need ${qty}`),
            { code: ErrorCode.VALIDATION_ERROR },
          );
        }

        const writeOffAmount = payload.writeOffAmount != null ? Number(payload.writeOffAmount) : 0;

        await adjustShopBalance(tx, {
          tenantId,
          shopId,
          productId: product.id,
          delta: -qty,
          updatedBy: userId,
        });

        const adjustment = await tx.inventoryAdjustment.create({
          data: {
            tenantId,
            shopId,
              inventoryItemId: product.id,
            adjustmentType: payload.incidentType,
            reason: [
              product.name,
              payload.description,
              `qty ${qty}`,
              writeOffAmount ? `Write-off RWF ${writeOffAmount}` : null,
            ]
              .filter(Boolean)
              .join(' — '),
            quantity: qty,
            createdBy: userId,
          },
        });

        await tx.inventoryMovement.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: null,
            productId: product.id,
            movementType: 'OUT',
            quantity: qty,
            referenceId: adjustment.id,
            referenceType: 'INVENTORY_INCIDENT',
            createdBy: userId,
          },
        });

        return {
          kind: 'NON_SERIALIZED' as const,
          inventoryItemId: null,
          productId: product.id,
          serialNumber: null,
          productName: product.name,
          quantity: qty,
          writeOffAmount,
          postToBooks: writeOffAmount > 0,
          previousStatus: 'AVAILABLE',
          adjustmentId: adjustment.id,
        };
      });

      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId,
            action: 'RecordInventoryIncident',
            resource: result.kind === 'SERIALIZED' ? 'InventoryItem' : 'Product',
            resourceId: result.inventoryItemId || result.productId,
            traceId,
            details: JSON.stringify({
              incidentType: payload.incidentType,
              writeOffAmount: result.writeOffAmount,
              quantity: result.quantity,
            }),
          },
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      await this.eventBus.publish(
        {
          eventType: 'InventoryIncidentRecorded',
          aggregateId: result.adjustmentId,
          aggregateType: 'InventoryAdjustment',
          tenantId,
          shopId,
          payload: {
            tenantId,
            shopId,
            incidentType: payload.incidentType,
            inventoryItemId: result.inventoryItemId,
            productId: result.productId,
            serialNumber: result.serialNumber,
            productName: result.productName,
            quantity: result.quantity,
            writeOffAmount: result.writeOffAmount,
            postToBooks: result.postToBooks,
            description: payload.description || null,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: userId,
        },
        'inventory.incident.recorded',
      );

      return { status: 'success', traceId, data: result };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record inventory incident',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
