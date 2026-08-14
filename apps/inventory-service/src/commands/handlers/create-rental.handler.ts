import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateRentalCommand } from '../impl/create-rental.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateRentalCommand)
export class CreateRentalHandler extends BaseCommandHandler<CreateRentalCommand> {
  async execute(command: CreateRentalCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload.agreementType) {
        return {
          status: 'error',
          traceId,
          message: 'agreementType is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Resolve person details: prefer customerId lookup, fallback to inline name/phone
      let resolvedName = payload.personName?.trim() || '';
      let resolvedPhone = payload.personPhone?.trim() || null;

      if (payload.customerId) {
        // Try to find the customer as a sale customer, or search across known contacts
        // For now we store the customerId and name from payload (no separate Customer model in inventory)
        // The frontend sends both customerId + name populated from its customer store
        if (!resolvedName) {
          return {
            status: 'error',
            traceId,
            message: 'personName (or customer name) is required',
            errorCode: ErrorCode.VALIDATION_ERROR
          };
        }
      } else if (!resolvedName) {
        return {
          status: 'error',
          traceId,
          message: 'personName or customerId is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const rental = await prisma.$transaction(async (tx) => {
        // If outward rental for a device, update inventory item status to RENTED_OUT
        if (payload.inventoryItemId && payload.agreementType === 'OUTWARD_RENTAL') {
          const item = await tx.inventoryItem.findUnique({ where: { id: payload.inventoryItemId } });
          if (item && item.status !== 'AVAILABLE') {
            throw new Error(`Unit ${payload.inventoryItemId} is not AVAILABLE (current status: ${item.status})`);
          }
          await tx.inventoryItem.update({
            where: { id: payload.inventoryItemId },
            data: { status: 'RENTED_OUT' }
          });
        }

        return await tx.rentalAgreement.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: payload.inventoryItemId || null,
            productId: payload.productId || null,
            personName: resolvedName,
            personPhone: resolvedPhone,
            agreementType: payload.agreementType,
            startDate: payload.startDate ? new Date(payload.startDate) : new Date(),
            expectedReturn: null,
            rentalFee: 0,
            ownerAgreedCost: 0,
            maintenanceCost: 0,
            status: 'ACTIVE',
            notes: payload.notes?.trim() || null,
            createdById: context.userId || 'system'
          }
        });
      });

      return {
        status: 'success',
        traceId,
        data: rental
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create rental agreement',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}

