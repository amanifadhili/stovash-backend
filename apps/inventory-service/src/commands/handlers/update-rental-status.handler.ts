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
    const shopId = context?.shopId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const rental = await prisma.rentalAgreement.findFirst({
        where: { id: payload.rentalId, tenantId }
      });

      if (!rental) {
        return {
          status: 'error',
          traceId,
          message: 'Rental agreement not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      const updated = await prisma.$transaction(async (tx) => {
        const newStatus = payload.status;
        const now = new Date();

        // 1. If Outward Rental:
        if (rental.agreementType === 'OUTWARD_RENTAL' && rental.inventoryItemId) {
          if (newStatus === 'RETURNED' || newStatus === 'CANCELLED') {
            await tx.inventoryItem.update({
              where: { id: rental.inventoryItemId },
              data: { status: 'AVAILABLE' }
            });
          } else if (newStatus === 'SOLD') {
            await tx.inventoryItem.update({
              where: { id: rental.inventoryItemId },
              data: { status: 'SOLD' }
            });
            await tx.inventoryMovement.create({
              data: {
                tenantId: rental.tenantId,
                shopId: rental.shopId,
                inventoryItemId: rental.inventoryItemId,
                movementType: 'SALE',
                quantity: 1,
                referenceId: rental.id,
                referenceType: 'RENTAL_CONVERTED_SALE',
                createdBy: context?.userId || 'system'
              }
            });
          }
        }

        // 2. If Inward Consignment:
        if (rental.agreementType === 'INWARD_CONSIGNMENT') {
          if (newStatus === 'SOLD' && rental.inventoryItemId) {
            await tx.inventoryItem.update({
              where: { id: rental.inventoryItemId },
              data: { status: 'SOLD' }
            });
          }
        }

        return await tx.rentalAgreement.update({
          where: { id: rental.id },
          data: {
            status: newStatus,
            actualReturn: (newStatus === 'RETURNED' || newStatus === 'SOLD') ? now : null,
            maintenanceCost: payload.maintenanceCost !== undefined ? payload.maintenanceCost : rental.maintenanceCost,
            notes: payload.notes ? `${rental.notes || ''}\n${payload.notes}`.trim() : rental.notes
          }
        });
      });

      return {
        status: 'success',
        traceId,
        data: updated
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to update rental status',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
