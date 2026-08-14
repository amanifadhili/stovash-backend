import { EventBus } from '@electronic-shop/framework-event';
import { IRequestContext } from '@electronic-shop/types';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

/**
 * Stocks a confirmed purchase unit into the inventory service.
 *
 * The SYNCHRONOUS RPC (`SyncPurchaseStock`) is the source of truth — it works
 * even when RabbitMQ is down (offline dev box), so confirmed units appear in
 * sales immediately. The async `PurchaseUnitConfirmed` event is still published
 * as a redundant broadcast for any other consumers; the inventory consumer is
 * idempotent so a double delivery cannot double-count.
 *
 * Mirrors the create-purchase -> SUPPLIER_SERVICE RPC pattern.
 */
export async function publishPurchaseUnitConfirmed(
  inventoryClient: ClientProxy,
  eventBus: EventBus,
  receivedItem: any,
  purchaseItem: any,
  context?: IRequestContext,
  quantity: number = 1,
): Promise<void> {
  const traceId = context?.traceId || 'unknown';
  const createdBy = context?.userId || 'system';
  const qty = Math.max(1, Number(quantity) || 1);

  try {
    // 1) Synchronous, reliable stock-in (works without RabbitMQ).
    const resp = await firstValueFrom(
      inventoryClient.send(
        { cmd: 'SyncPurchaseStock' },
        {
          payload: {
            productId: purchaseItem?.productId,
            productTracking: purchaseItem?.productTracking,
            name: purchaseItem?.productName,
            serialNumber: receivedItem.serialNumber,
            imei1: receivedItem.imei1,
            imei2: receivedItem.imei2,
            unitAcquisitionCost: receivedItem.unitAcquisitionCost || 0,
            additionalCost: receivedItem.additionalCost || 0,
            condition: receivedItem.condition,
            notes: receivedItem.notes,
            specifications: (() => {
              try {
                return purchaseItem?.purchaseSpecs ? JSON.parse(purchaseItem.purchaseSpecs) : undefined;
              } catch {
                return undefined;
              }
            })(),
            images: Array.isArray(receivedItem.images) && receivedItem.images.length > 0 ? receivedItem.images.slice(0, 5) : undefined,
            purchaseId: receivedItem.purchaseId,
            referenceId: receivedItem.id,
            quantity: qty,
          },
          context,
        },
      ),
    );

    if (resp?.status === 'error') {
      console.error(`SyncPurchaseStock failed: ${resp.message}`);
    }
  } catch (error: any) {
    console.error(`Failed to sync purchase unit to inventory: ${error.message}`);
  }

  // 2) Async broadcast — only when the event bus is actually connected
  //    (RabbitMQ down on this dev box -> skip quietly instead of erroring).
  try {
    if (eventBus.isConnected?.()) {
      await eventBus.publish(
        {
          eventType: 'PurchaseUnitConfirmed',
          aggregateId: receivedItem.id,
          aggregateType: 'PurchaseReceivedItem',
          tenantId: context?.tenantId,
          shopId: context?.shopId,
          payload: {
            tenantId: context?.tenantId,
            shopId: context?.shopId,
            receivedItemId: receivedItem.id,
            purchaseId: receivedItem.purchaseId,
            purchaseItemId: purchaseItem?.id,
            productId: purchaseItem?.productId,
            productName: purchaseItem?.productName,
            productSku: purchaseItem?.productSku,
            productTracking: purchaseItem?.productTracking,
            serialNumber: receivedItem.serialNumber,
            imei1: receivedItem.imei1,
            imei2: receivedItem.imei2,
            unitAcquisitionCost: receivedItem.unitAcquisitionCost || 0,
            additionalCost: receivedItem.additionalCost || 0,
            condition: receivedItem.condition,
            images: Array.isArray(receivedItem.images) && receivedItem.images.length > 0 ? receivedItem.images.slice(0, 5) : undefined,
            quantity: qty,
            confirmedAt: receivedItem.confirmedAt || new Date().toISOString(),
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy,
        },
        'purchase.unit.confirmed',
      );
    }
  } catch (error: any) {
    console.error(`Failed to publish PurchaseUnitConfirmed event: ${error.message}`);
  }
}