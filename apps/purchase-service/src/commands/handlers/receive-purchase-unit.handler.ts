import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ReceivePurchaseUnitCommand } from '../impl/receive-purchase-unit.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';
import { recomputePurchaseItemCounts, recomputePurchaseReceivingStatus } from '../../common/receiving-counts.js';

const VALID_CONDITIONS = new Set([
  'EXCELLENT',
  'GOOD',
  'FAIR',
  'POOR',
  'DAMAGED',
  'REJECTED',
  'WRONG_ITEM',
  'ACCEPTED',
]);

function normalizeCondition(cond?: string): any {
  if (!cond) return 'GOOD';
  const u = String(cond).trim().toUpperCase();
  if (VALID_CONDITIONS.has(u)) return u;
  if (u === 'NEW' || u === 'LIKE_NEW') return 'EXCELLENT';
  if (u === 'REFURBISHED' || u === 'USED') return 'GOOD';
  return 'GOOD';
}

@CommandHandler(ReceivePurchaseUnitCommand)
export class ReceivePurchaseUnitHandler extends BaseCommandHandler<ReceivePurchaseUnitCommand> {
  async execute(command: ReceivePurchaseUnitCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const {
        purchaseId,
        purchaseItemId,
        serialNumber,
        imei1,
        imei2,
        condition = 'GOOD',
        actualSpecs,
        unitAcquisitionCost,
        receivedAt,
        notes,
      } = payload;
      const receivedById = userId;
      const receivedByName = userName;

      if (unitAcquisitionCost === undefined || unitAcquisitionCost === null) {
        return { status: 'error', traceId, message: 'unitAcquisitionCost is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const purchase = await prisma.purchase.findFirst({ where: { id: purchaseId, tenantId, shopId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (purchase.commercialStatus !== 'CONFIRMED') {
        return { status: 'error', traceId, message: 'Purchase must be CONFIRMED to receive units', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const purchaseItem = await prisma.purchaseItem.findUnique({ where: { id: purchaseItemId } });
      if (!purchaseItem || purchaseItem.purchaseId !== purchase.id) {
        return { status: 'error', traceId, message: 'Purchase item not found', errorCode: ErrorCode.NOT_FOUND };
      }

      // Duplicate serial/IMEI guard across ALL purchases of this tenant+shop.
      const existingSerial = serialNumber
        ? await prisma.purchaseReceivedItem.findFirst({
            where: { serialNumber, purchase: { tenantId, shopId } },
          })
        : null;
      if (existingSerial) {
        if (existingSerial.purchaseId === purchaseId) {
          // Idempotency: Unit was already received for THIS purchase attempt
          return { status: 'success', traceId, data: existingSerial };
        }
        return { status: 'error', traceId, message: `Serial number ${serialNumber} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const existingImei = imei1
        ? await prisma.purchaseReceivedItem.findFirst({
            where: { imei1, purchase: { tenantId, shopId } },
          })
        : null;
      if (existingImei) {
        if (existingImei.purchaseId === purchaseId) {
          return { status: 'success', traceId, data: existingImei };
        }
        return { status: 'error', traceId, message: `IMEI ${imei1} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
      }

      // Guard on ACCEPTED quantity (not raw received) so rejected/damaged units
      // can be replaced by receiving additional units later.
      if (purchaseItem.acceptedQty >= purchaseItem.orderedQty) {
        return { status: 'error', traceId, message: 'All ordered quantity has already been received and accepted', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      // Reuse the most recent receiving batch for this purchase so units added
      // later group into the same GRN instead of spawning a GRN per unit.
      const recvDate = receivedAt ? new Date(receivedAt) : new Date();
      let receiving = await prisma.purchaseReceiving.findFirst({
        where: { purchaseId },
        orderBy: { createdAt: 'desc' },
      });
      if (!receiving) {
        const totalCount = await prisma.purchaseReceiving.count();
        let seq = totalCount + 1;
        let receivingNumber = `GRN-${String(seq).padStart(4, '0')}`;
        while (await prisma.purchaseReceiving.findUnique({ where: { receivingNumber } })) {
          seq++;
          receivingNumber = `GRN-${String(seq).padStart(4, '0')}`;
        }
        try {
          receiving = await prisma.purchaseReceiving.create({
            data: {
              purchaseId,
              receivingNumber,
              receivedById,
              receivedAt: recvDate,
              receivedAtShop: shopId,
              notes,
            },
          });
        } catch (err: any) {
          // If a race condition occurred, check if receiving was created concurrently for this purchase
          receiving = await prisma.purchaseReceiving.findFirst({
            where: { purchaseId },
            orderBy: { createdAt: 'desc' },
          });
          if (!receiving) {
            // Otherwise generate with timestamp fallback to guarantee uniqueness
            receivingNumber = `GRN-${Date.now()}`;
            receiving = await prisma.purchaseReceiving.create({
              data: {
                purchaseId,
                receivingNumber,
                receivedById,
                receivedAt: recvDate,
                receivedAtShop: shopId,
                notes,
              },
            });
          }
        }
      }

      const receivedItem = await prisma.purchaseReceivedItem.create({
        data: {
          purchaseId: purchase.id,
          purchaseItemId,
          receivingId: receiving.id,
          serialNumber,
          imei1,
          imei2,
          condition: normalizeCondition(condition),
          actualSpecs,
          unitAcquisitionCost,
          status: 'PENDING',
          receivedAt: recvDate,
          receivedById,
          notes,
        },
      });

      await recomputePurchaseItemCounts(purchaseItemId);
      await recomputePurchaseReceivingStatus(purchase.id);

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: purchase.id,
          eventType: 'RECEIVING_STARTED',
          eventData: JSON.stringify({ receivedItemId: receivedItem.id, serialNumber, receivedBy: receivedByName, receivedAt: recvDate }),
          userId: receivedById,
          userName: receivedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: receivedById,
          action: 'ReceivePurchaseUnit',
          resource: 'PurchaseReceivedItem',
          resourceId: receivedItem.id,
          traceId,
          details: JSON.stringify({ purchaseId, purchaseItemId, serialNumber }),
        },
      });

      return { status: 'success', traceId, data: receivedItem };
    } catch (error: any) {
      let message = error.message || 'Failed to receive purchase unit';
      if (typeof message === 'string') {
        if (message.includes('Invalid value for argument `condition`')) {
          message = 'Invalid condition value provided';
        } else if (message.includes('Unique constraint failed')) {
          if (message.includes('serialNumber')) message = 'Serial number already exists';
          else if (message.includes('receivingNumber')) message = 'Receiving number collision; please try again';
          else message = 'Duplicate entry constraint error';
        } else if (message.includes('Invalid `') && message.includes('invocation')) {
          const parts = message.split('\n').map((s: string) => s.trim()).filter(Boolean);
          const cleanPart = parts.find((p: string) => !p.startsWith('Invalid `') && !p.startsWith('invocation in') && !p.includes('/dist/'));
          if (cleanPart) message = cleanPart.replace(/^→\s*/, '');
        }
      }
      return {
        status: 'error',
        traceId,
        message,
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
