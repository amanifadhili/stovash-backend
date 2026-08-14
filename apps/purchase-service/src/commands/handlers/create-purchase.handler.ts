import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePurchaseCommand } from '../impl/create-purchase.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';
import { firstValueFrom } from 'rxjs';
import { Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { recomputePurchaseItemCounts, recomputePurchaseReceivingStatus } from '../../common/receiving-counts.js';
import { publishPurchaseUnitConfirmed } from '../../common/publish-purchase-unit-confirmed.js';

@CommandHandler(CreatePurchaseCommand)
export class CreatePurchaseHandler extends BaseCommandHandler<CreatePurchaseCommand> {
  private readonly logger = new Logger(CreatePurchaseHandler.name);

  constructor(
    @Inject('SUPPLIER_SERVICE') private readonly supplierClient: ClientProxy,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
  ) {
    super();
  }

  async execute(command: CreatePurchaseCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      let {
        supplierId,
        supplierName,
        supplierContact,
        supplierAddress,
        purchaseDate,
        supplierInvoiceNo,
        currency = 'RWF',
        exchangeRate = 1.0,
        notes,
        items = [],
      } = payload;
      const createdById = userId;
      const createdByName = userName;

      // Validate the supplier against the system (supplier-service) when one is
      // referenced, and sync the stored snapshot from the master record.
      if (supplierId) {
        const supplierResp: ICommandResponse<any> = await firstValueFrom(
          this.supplierClient.send(
            { cmd: 'GetSupplier' },
            { payload: { id: supplierId }, context },
          ),
        );

        if (!supplierResp || supplierResp.status !== 'success' || !supplierResp.data) {
          return {
            status: 'error',
            traceId,
            message: 'Supplier not found in the system for this tenant',
            errorCode: ErrorCode.VALIDATION_ERROR,
          };
        }

        const supplier = supplierResp.data;
        supplierName = supplier.name;
        supplierContact = supplier.phone || supplier.email || supplierContact;
        supplierAddress = supplier.address || supplierAddress;
      }

      // Generate a unique, gap-safe purchase number for the year. Each attempt
      // is its OWN transaction; on a (rare) unique-constraint clash we re-read
      // the max and try the next number. (A single $transaction cannot retry
      // after an error in Postgres — the tx is aborted, hence the loop here.)
      const date = purchaseDate ? new Date(purchaseDate) : new Date();
      const year = date.getFullYear();
      const prefix = `PUR-${year}-`;

      let purchase: any = null;
      for (let attempt = 0; attempt < 10 && !purchase; attempt++) {
        const last = await prisma.purchase.findFirst({
          where: { purchaseNumber: { startsWith: prefix } },
          orderBy: { purchaseNumber: 'desc' },
          select: { purchaseNumber: true },
        });
        let nextNumber = 1;
        if (last) {
          const parsed = parseInt(String(last.purchaseNumber).split('-')[2] || '0', 10);
          if (!Number.isNaN(parsed)) nextNumber = parsed + 1;
        }
        const purchaseNumber = `${prefix}${String(nextNumber).padStart(6, '0')}`;
        try {
          purchase = await prisma.purchase.create({
            data: {
              tenantId,
              shopId,
              purchaseNumber,
              supplierId,
              supplierName,
              supplierContact,
              supplierAddress,
              purchaseDate: date,
              supplierInvoiceNo,
              currency,
              exchangeRate,
              commercialStatus: 'DRAFT',
              receivingStatus: 'NOT_RECEIVED',
              paymentStatus: 'UNPAID',
              accountingStatus: 'UNPOSTED',
              subtotal: 0,
              discountTotal: 0,
              otherCostTotal: 0,
              grandTotal: 0,
              amountPaid: 0,
              amountOutstanding: 0,
              notes,
              createdById,
            },
          });
        } catch (createErr: any) {
          if (createErr?.code === 'P2002') continue;
          throw createErr;
        }
      }

      if (!purchase) {
        return {
          status: 'error',
          traceId,
          message: 'Unable to generate a unique purchase number',
          errorCode: ErrorCode.INTERNAL_ERROR,
        };
      }

      // Create inline items (if provided) and recompute purchase totals.
      if (Array.isArray(items) && items.length > 0) {
        for (const it of items) {
          const qty = Number(it.orderedQty) || 0;
          const unitPrice = Number(it.unitPrice) || 0;
          const gross = qty * unitPrice;
          const discount = it.discountType === 'PERCENTAGE'
            ? (gross * (Number(it.discountAmount) || 0)) / 100
            : (Number(it.discountAmount) || 0);
          const net = gross - discount;
          const otherCosts = Number(it.otherCosts) || 0;
          const lineTotal = net + otherCosts;
          const acquisitionCost = qty > 0 ? lineTotal / qty : 0;

          await prisma.purchaseItem.create({
            data: {
              purchaseId: purchase.id,
              productId: it.productId,
              productName: it.productName || it.productId,
              productSku: it.productSku || `SKU-${it.productId.slice(0, 8)}`,
              productTracking: it.productTracking || 'NON_SERIALIZED',
              orderedQty: qty,
              unitPrice,
              discountAmount: discount,
              discountType: it.discountType || 'FIXED',
              otherCosts,
              lineTotal,
              acquisitionCost,
              purchaseSpecs: it.purchaseSpecs ?? null,
              notes: it.notes ?? null,
            },
          });
        }

        const itemRows = await prisma.purchaseItem.findMany({ where: { purchaseId: purchase.id } });
        const subtotal = itemRows.reduce((s, i) => s + i.orderedQty * i.unitPrice, 0);
        const discountTotal = itemRows.reduce((s, i) => s + i.discountAmount, 0);
        const otherCostTotal = itemRows.reduce((s, i) => s + i.otherCosts, 0);
        const grandTotal = itemRows.reduce((s, i) => s + i.lineTotal, 0);
        await prisma.purchase.update({
          where: { id: purchase.id },
          data: { subtotal, discountTotal, otherCostTotal, grandTotal, amountOutstanding: grandTotal },
        });
      }

      // Inline per-unit receive: if any item carries serialized units, auto-confirm
      // the order (receiving requires CONFIRMED) and create the received units.
      const hasUnits = Array.isArray(items) && items.some((it) => Array.isArray(it.units) && it.units.length > 0);
      if (hasUnits) {
        await prisma.purchase.update({
          where: { id: purchase.id },
          data: { commercialStatus: 'CONFIRMED', approvedById: createdById, approvedAt: new Date() },
        });

        await prisma.purchaseHistory.create({
          data: {
            purchaseId: purchase.id,
            eventType: 'CONFIRMED',
            eventData: JSON.stringify({ approvedBy: createdByName, auto: true }),
            userId: createdById,
            userName: createdByName,
            traceId,
          },
        });

        for (const it of items) {
          if (!Array.isArray(it.units) || it.units.length === 0) continue;
          const purchaseItem = await prisma.purchaseItem.findFirst({
            where: { purchaseId: purchase.id, productId: it.productId },
          });
          if (!purchaseItem) continue;

          for (const unit of it.units) {
            if (unit.serialNumber) {
              const existing = await prisma.purchaseReceivedItem.findFirst({
                where: { serialNumber: unit.serialNumber, purchase: { tenantId, shopId } },
              });
              if (existing) {
                return { status: 'error', traceId, message: `Serial ${unit.serialNumber} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
              }
            }
            if (unit.imei1) {
              const existing = await prisma.purchaseReceivedItem.findFirst({
                where: { imei1: unit.imei1, purchase: { tenantId, shopId } },
              });
              if (existing) {
                return { status: 'error', traceId, message: `IMEI ${unit.imei1} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
              }
            }

            const isConfirmed = unit.received === true;
            const createdReceived = await prisma.purchaseReceivedItem.create({
              data: {
                purchaseId: purchase.id,
                purchaseItemId: purchaseItem.id,
                serialNumber: unit.serialNumber,
                imei1: unit.imei1,
                imei2: unit.imei2,
                condition: unit.condition || 'GOOD',
                unitAcquisitionCost: Number(unit.unitAcquisitionCost) || 0,
                status: isConfirmed ? 'CONFIRMED' : 'PENDING',
                confirmedAt: isConfirmed ? new Date() : undefined,
                confirmedById: isConfirmed ? createdById : undefined,
                receivedAt: new Date(),
                receivedById: createdById,
                notes: unit.notes,
                images: Array.isArray(unit.images) && unit.images.length > 0 ? unit.images.slice(0, 5) : undefined,
              },
            });

            // Inline confirmed units also stock the inventory (sync RPC + event, idempotent).
            if (isConfirmed) {
              const batchQty =
                purchaseItem.productTracking === 'NON_SERIALIZED'
                  ? Math.max(1, Number(unit.quantity) || Number(purchaseItem.orderedQty) || 1)
                  : 1;
              await publishPurchaseUnitConfirmed(
                this.inventoryClient,
                this.eventBus,
                createdReceived,
                purchaseItem,
                context,
                batchQty,
              );
            }
          }

          // Status-aware counts: only CONFIRMED units count as received.
          // NON_SERIALIZED batch may be one received row representing orderedQty.
          if (purchaseItem.productTracking === 'NON_SERIALIZED') {
            const confirmed = await prisma.purchaseReceivedItem.findMany({
              where: { purchaseItemId: purchaseItem.id, status: 'CONFIRMED' },
            });
            const stockable = confirmed.filter((i) =>
              ['ACCEPTED', 'EXCELLENT', 'GOOD', 'FAIR'].includes(i.condition),
            );
            const qty = purchaseItem.orderedQty;
            await prisma.purchaseItem.update({
              where: { id: purchaseItem.id },
              data: {
                receivedQty: confirmed.length > 0 ? qty : 0,
                acceptedQty: stockable.length > 0 ? qty : 0,
                rejectedQty: confirmed.length > 0 && stockable.length === 0 ? qty : 0,
              },
            });
          } else {
            await recomputePurchaseItemCounts(purchaseItem.id);
          }
        }

        await recomputePurchaseReceivingStatus(purchase.id);
      }

      // Create history entry
      await prisma.purchaseHistory.create({
        data: {
          purchaseId: purchase.id,
          eventType: 'CREATED',
          eventData: JSON.stringify({ purchaseNumber: purchase.purchaseNumber, supplierName, createdBy: createdByName }),
          userId: createdById,
          userName: createdByName,
          traceId,
        },
      });

      if (Array.isArray(items) && items.length > 0) {
        await prisma.purchaseHistory.create({
          data: {
            purchaseId: purchase.id,
            eventType: 'ITEM_ADDED',
            eventData: JSON.stringify({ itemsCount: items.length, createdBy: createdByName }),
            userId: createdById,
            userName: createdByName,
            traceId,
          },
        });
      }

      // Audit log
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId: createdById,
          action: 'CreatePurchase',
          resource: 'Purchase',
          resourceId: purchase.id,
          traceId,
          details: JSON.stringify({ purchaseNumber: purchase.purchaseNumber, supplierName }),
        },
      });

      return {
        status: 'success',
        traceId,
        data: purchase,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create purchase',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}