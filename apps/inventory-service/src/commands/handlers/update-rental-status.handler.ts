import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateRentalStatusCommand } from '../impl/update-rental-status.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

function closedAt(status: string) {
  return status === 'RETURNED' || status === 'SOLD' || status === 'SETTLED';
}

@CommandHandler(UpdateRentalStatusCommand)
export class UpdateRentalStatusHandler extends BaseCommandHandler<UpdateRentalStatusCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: UpdateRentalStatusCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const rental = await prisma.rentalAgreement.findFirst({
        where: { id: payload.rentalId, tenantId },
      });

      if (!rental) {
        return {
          status: 'error',
          traceId,
          message: 'Lending agreement not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      if (rental.status !== 'ACTIVE') {
        return {
          status: 'error',
          traceId,
          message: `Lending is already ${rental.status}`,
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      if (rental.agreementType === 'OUTWARD_RENTAL' && payload.status === 'SOLD') {
        return {
          status: 'error',
          traceId,
          message: 'Use SETTLED for Lend-OUT — do not book their customer as yours',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      if (rental.agreementType === 'INWARD_CONSIGNMENT' && payload.status === 'SETTLED') {
        return {
          status: 'error',
          traceId,
          message: 'SETTLED is for Lend-OUT. Lend-IN uses Sale.',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const floor = Number(rental.ownerAgreedCost) || 0;
      const extras =
        payload.maintenanceCost !== undefined ? Number(payload.maintenanceCost) || 0 : Number(rental.maintenanceCost) || 0;
      const salePrice = payload.salePrice != null ? Number(payload.salePrice) : null;
      const ownerPayoutTotal =
        payload.ownerPayoutTotal != null ? Math.max(0, Number(payload.ownerPayoutTotal) || 0) : 0;
      const qty = Math.max(1, Number(rental.quantity) || 1);
      const commissionAmount =
        payload.commissionAmount != null
          ? Number(payload.commissionAmount)
          : payload.status === 'SOLD' && salePrice != null
            ? salePrice - floor - extras
            : payload.status === 'SETTLED'
              ? null
              : null;

      let unitCost = 0;
      if (rental.inventoryItemId) {
        const item = await prisma.inventoryItem.findUnique({ where: { id: rental.inventoryItemId } });
        unitCost = Number(item?.purchaseCost || 0) + Number(item?.capitalizedCost || 0);
      }

      const updated = await prisma.$transaction(async (tx) => {
        const newStatus = payload.status;
        const now = new Date();

        if (rental.inventoryItemId) {
          if (rental.agreementType === 'OUTWARD_RENTAL') {
            if (newStatus === 'RETURNED' || newStatus === 'CANCELLED') {
              await tx.inventoryItem.update({
                where: { id: rental.inventoryItemId },
                data: { status: 'AVAILABLE', updatedBy: userId },
              });
            } else if (newStatus === 'SETTLED') {
              await tx.inventoryItem.update({
                where: { id: rental.inventoryItemId },
                data: { status: 'SOLD', updatedBy: userId },
              });
              await tx.inventoryMovement.create({
                data: {
                  tenantId: rental.tenantId,
                  shopId: rental.shopId,
                  inventoryItemId: rental.inventoryItemId,
                  movementType: 'OUT',
                  quantity: 1,
                  referenceId: rental.id,
                  referenceType: 'LEND_OUT_SETTLE',
                  createdBy: userId,
                },
              });
            }
          }

          if (rental.agreementType === 'INWARD_CONSIGNMENT') {
            if (newStatus === 'RETURNED' || newStatus === 'CANCELLED') {
              await tx.inventoryItem.update({
                where: { id: rental.inventoryItemId },
                data: { status: 'RETURNED', updatedBy: userId },
              });
              await tx.inventoryMovement.create({
                data: {
                  tenantId: rental.tenantId,
                  shopId: rental.shopId,
                  inventoryItemId: rental.inventoryItemId,
                  movementType: 'OUT',
                  quantity: 1,
                  referenceId: rental.id,
                  referenceType: 'INWARD_RENTAL_RETURN',
                  createdBy: userId,
                },
              });
            } else if (newStatus === 'SOLD') {
              const item = await tx.inventoryItem.findUnique({ where: { id: rental.inventoryItemId } });
              if (item && item.status !== 'SOLD') {
                await tx.inventoryItem.update({
                  where: { id: rental.inventoryItemId },
                  data: { status: 'SOLD', updatedBy: userId },
                });
                await tx.inventoryMovement.create({
                  data: {
                    tenantId: rental.tenantId,
                    shopId: rental.shopId,
                    inventoryItemId: rental.inventoryItemId,
                    movementType: 'OUT',
                    quantity: 1,
                    referenceId: rental.id,
                    referenceType: 'INWARD_RENTAL_SALE',
                    createdBy: userId,
                  },
                });
              }
            }
          }
        } else if (rental.productId) {
          const product = await tx.product.findFirst({
            where: { id: rental.productId, tenantId: rental.tenantId },
          });
          if (rental.agreementType === 'OUTWARD_RENTAL') {
            if ((newStatus === 'RETURNED' || newStatus === 'CANCELLED') && product) {
              await tx.product.update({
                where: { id: product.id },
                data: { quantityOnHand: Number(product.quantityOnHand || 0) + qty, updatedBy: userId },
              });
              await tx.inventoryMovement.create({
                data: {
                  tenantId: rental.tenantId,
                  shopId: rental.shopId,
                  productId: product.id,
                  movementType: 'IN',
                  quantity: qty,
                  referenceId: rental.id,
                  referenceType: 'OUTWARD_RENTAL_RETURN',
                  createdBy: userId,
                },
              });
            } else if (newStatus === 'SETTLED') {
              await tx.inventoryMovement.create({
                data: {
                  tenantId: rental.tenantId,
                  shopId: rental.shopId,
                  productId: rental.productId,
                  movementType: 'OUT',
                  quantity: qty,
                  referenceId: rental.id,
                  referenceType: 'LEND_OUT_SETTLE',
                  createdBy: userId,
                },
              });
            }
          }

          if (rental.agreementType === 'INWARD_CONSIGNMENT') {
            if (newStatus === 'RETURNED' || newStatus === 'CANCELLED') {
              await tx.inventoryMovement.create({
                data: {
                  tenantId: rental.tenantId,
                  shopId: rental.shopId,
                  productId: rental.productId,
                  movementType: 'OUT',
                  quantity: qty,
                  referenceId: rental.id,
                  referenceType: 'INWARD_RENTAL_RETURN',
                  createdBy: userId,
                },
              });
            }
          }
        }

        const settledCommission =
          payload.commissionAmount != null
            ? Number(payload.commissionAmount)
            : newStatus === 'SETTLED'
              ? floor - unitCost
              : commissionAmount;

        return await tx.rentalAgreement.update({
          where: { id: rental.id },
          data: {
            status: newStatus,
            actualReturn: closedAt(newStatus) ? now : null,
            maintenanceCost: payload.maintenanceCost !== undefined ? extras : rental.maintenanceCost,
            salePrice: newStatus === 'SOLD' || newStatus === 'SETTLED' ? salePrice ?? floor : rental.salePrice,
            ownerPayoutTotal:
              newStatus === 'SOLD' || newStatus === 'SETTLED' ? ownerPayoutTotal : rental.ownerPayoutTotal,
            ownerPayoutDetails:
              (newStatus === 'SOLD' || newStatus === 'SETTLED') && payload.ownerPayoutDetails
                ? (JSON.parse(JSON.stringify(payload.ownerPayoutDetails)) as any)
                : rental.ownerPayoutDetails,
            commissionAmount:
              newStatus === 'SOLD' || newStatus === 'SETTLED' ? settledCommission : rental.commissionAmount,
            notes: payload.notes ? `${rental.notes || ''}\n${payload.notes}`.trim() : rental.notes,
          },
        });
      });

      const payoutMethod = Array.isArray(payload.ownerPayoutDetails)
        ? payload.ownerPayoutDetails.find((l) => Number(l.amount) > 0)?.method
        : undefined;

      if (payload.status === 'SOLD' && rental.agreementType === 'INWARD_CONSIGNMENT' && floor > 0) {
        try {
          await this.eventBus.publish(
            {
              eventType: 'LendInSold',
              aggregateId: rental.id,
              aggregateType: 'RentalAgreement',
              tenantId,
              shopId: rental.shopId,
              payload: {
                tenantId,
                shopId: rental.shopId,
                rentalId: rental.id,
                shopName: rental.personName,
                contactId: rental.contactId,
                inventoryItemId: rental.inventoryItemId,
                productId: rental.productId,
                floor,
                extras,
                extrasCash: Boolean(payload.extrasCash),
                extrasPaymentMethod: payload.extrasPaymentMethod || 'CASH',
                salePrice,
                ownerPayoutTotal,
                unpaid: Math.max(0, floor - ownerPayoutTotal),
                payoutMethod: payoutMethod || 'CASH',
              },
              timestamp: new Date().toISOString(),
              correlationId: traceId,
              createdBy: userId,
            },
            'inventory.lend-in.sold',
          );
        } catch (publishError) {
          console.error('Failed to publish LendInSold event:', publishError);
        }
      }

      if (payload.status === 'SETTLED' && rental.agreementType === 'OUTWARD_RENTAL' && floor > 0) {
        try {
          await this.eventBus.publish(
            {
              eventType: 'LendOutSettled',
              aggregateId: rental.id,
              aggregateType: 'RentalAgreement',
              tenantId,
              shopId: rental.shopId,
              payload: {
                tenantId,
                shopId: rental.shopId,
                rentalId: rental.id,
                shopName: rental.personName,
                contactId: rental.contactId,
                inventoryItemId: rental.inventoryItemId,
                productId: rental.productId,
                floor,
                unitCost,
                receivedNow: ownerPayoutTotal,
                unpaid: Math.max(0, floor - ownerPayoutTotal),
                payoutMethod: payoutMethod || 'CASH',
              },
              timestamp: new Date().toISOString(),
              correlationId: traceId,
              createdBy: userId,
            },
            'inventory.lend-out.settled',
          );
        } catch (publishError) {
          console.error('Failed to publish LendOutSettled event:', publishError);
        }
      }

      return {
        status: 'success',
        traceId,
        data: updated,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to update lending status',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
