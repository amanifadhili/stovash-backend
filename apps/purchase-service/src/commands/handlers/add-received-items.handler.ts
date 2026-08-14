import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddReceivedItemsCommand, ReceivedItemData } from '../impl/add-received-items.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { recomputePurchaseItemAcquisitionCost, recomputePurchaseItemCounts, recomputePurchaseReceivingStatus } from '../../common/receiving-counts.js';
import { publishPurchaseUnitConfirmed } from '../../common/publish-purchase-unit-confirmed.js';

@CommandHandler(AddReceivedItemsCommand)
export class AddReceivedItemsHandler extends BaseCommandHandler<AddReceivedItemsCommand> {
  constructor(
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
  ) {
    super();
  }

  async execute(command: AddReceivedItemsCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const { receivingId, items } = payload;
      const recordedById = userId;
      const recordedByName = userName;

      const receiving = await prisma.purchaseReceiving.findFirst({
        where: { id: receivingId, purchase: { tenantId, shopId } },
        include: { purchase: true },
      });
      if (!receiving) {
        return { status: 'error', traceId, message: 'Receiving not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const purchase = receiving.purchase;
      if (purchase.commercialStatus !== 'CONFIRMED') {
        return { status: 'error', traceId, message: 'Purchase must be CONFIRMED', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const results = [];
      for (const item of items) {
        const purchaseItem = await prisma.purchaseItem.findUnique({
          where: { id: item.purchaseItemId },
        });
        if (!purchaseItem || purchaseItem.purchaseId !== purchase.id) {
          continue;
        }

        // Check for duplicate serial/IMEI across ALL purchases of this tenant+shop.
        if (item.serialNumber) {
          const existing = await prisma.purchaseReceivedItem.findFirst({
            where: { serialNumber: item.serialNumber, purchase: { tenantId, shopId } },
          });
          if (existing) {
            return { status: 'error', traceId, message: `Serial number ${item.serialNumber} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
          }
        }
        if (item.imei1) {
          const existing = await prisma.purchaseReceivedItem.findFirst({
            where: { imei1: item.imei1, purchase: { tenantId, shopId } },
          });
          if (existing) {
            return { status: 'error', traceId, message: `IMEI ${item.imei1} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
          }
        }

        const receivedItem = await prisma.purchaseReceivedItem.create({
          data: {
            purchaseId: purchase.id,
            purchaseItemId: item.purchaseItemId,
            receivingId,
            serialNumber: item.serialNumber,
            imei1: item.imei1,
            imei2: item.imei2,
            condition: item.condition,
            actualSpecs: item.actualSpecs,
            unitAcquisitionCost: item.unitAcquisitionCost,
            status: item.received ? 'CONFIRMED' : 'PENDING',
            confirmedAt: item.received ? new Date() : undefined,
            confirmedById: item.received ? recordedById : undefined,
            receivedAt: new Date(),
            receivedById: recordedById,
            notes: item.notes,
            images: Array.isArray(item.images) && item.images.length > 0 ? item.images.slice(0, 5) : undefined,
          },
        });

        results.push(receivedItem);

        // Update purchase item received/accepted/rejected counts (status-aware).
        await recomputePurchaseItemCounts(item.purchaseItemId);
        if (item.received) {
          await recomputePurchaseItemAcquisitionCost(item.purchaseItemId);
          await publishPurchaseUnitConfirmed(this.inventoryClient, this.eventBus, receivedItem, purchaseItem, context);
        }
      }

      // Update overall purchase receiving status (unified accepted-based rule).
      await recomputePurchaseReceivingStatus(purchase.id);

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: purchase.id,
          eventType: 'RECEIVING_COMPLETED',
          eventData: JSON.stringify({ receivingId, itemsCount: items.length, recordedBy: recordedByName }),
          userId: recordedById,
          userName: recordedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: recordedById,
          action: 'AddReceivedItems',
          resource: 'PurchaseReceivedItem',
          traceId,
          details: JSON.stringify({ receivingId, itemsCount: items.length }),
        },
      });

      return { status: 'success', traceId, data: { items: results } };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add received items',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}