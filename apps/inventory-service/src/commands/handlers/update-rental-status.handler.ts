import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateRentalStatusCommand } from '../impl/update-rental-status.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(UpdateRentalStatusCommand)
export class UpdateRentalStatusHandler extends BaseCommandHandler<UpdateRentalStatusCommand> {
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
          message: 'Rental agreement not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      if (rental.status !== 'ACTIVE') {
        return {
          status: 'error',
          traceId,
          message: `Rental is already ${rental.status}`,
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const updated = await prisma.$transaction(async (tx) => {
        const newStatus = payload.status;
        const now = new Date();
        const salePrice = payload.salePrice != null ? Number(payload.salePrice) : null;
        const ownerPayoutTotal =
          payload.ownerPayoutTotal != null
            ? Number(payload.ownerPayoutTotal)
            : Number(rental.ownerAgreedCost) || 0;
        const commissionAmount =
          payload.commissionAmount != null
            ? Number(payload.commissionAmount)
            : salePrice != null
              ? salePrice - ownerPayoutTotal
              : null;

        if (rental.inventoryItemId) {
          if (rental.agreementType === 'OUTWARD_RENTAL') {
            if (newStatus === 'RETURNED' || newStatus === 'CANCELLED') {
              await tx.inventoryItem.update({
                where: { id: rental.inventoryItemId },
                data: { status: 'AVAILABLE', updatedBy: userId },
              });
            } else if (newStatus === 'SOLD') {
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
                  referenceType: 'RENTAL_CONVERTED_SALE',
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
        }

        return await tx.rentalAgreement.update({
          where: { id: rental.id },
          data: {
            status: newStatus,
            actualReturn: newStatus === 'RETURNED' || newStatus === 'SOLD' ? now : null,
            maintenanceCost:
              payload.maintenanceCost !== undefined ? payload.maintenanceCost : rental.maintenanceCost,
            salePrice: newStatus === 'SOLD' ? salePrice : rental.salePrice,
            ownerPayoutTotal: newStatus === 'SOLD' ? ownerPayoutTotal : rental.ownerPayoutTotal,
            ownerPayoutDetails:
              newStatus === 'SOLD' && payload.ownerPayoutDetails
                ? (JSON.parse(JSON.stringify(payload.ownerPayoutDetails)) as any)
                : rental.ownerPayoutDetails,
            commissionAmount: newStatus === 'SOLD' ? commissionAmount : rental.commissionAmount,
            notes: payload.notes ? `${rental.notes || ''}\n${payload.notes}`.trim() : rental.notes,
          },
        });
      });

      return {
        status: 'success',
        traceId,
        data: updated,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to update rental status',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
