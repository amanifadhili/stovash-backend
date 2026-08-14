import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateContactCommand } from '../impl/create-contact.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateContactCommand)
export class CreateContactHandler extends BaseCommandHandler<CreateContactCommand> {
  async execute(command: CreateContactCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required in context',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload.name?.trim()) {
        return {
          status: 'error',
          traceId,
          message: 'name is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const contactType = payload.type || 'RENTAL';
      const contact = await prisma.contact.create({
        data: {
          tenantId,
          shopId: contactType === 'SHOP' ? null : shopId,
          name: payload.name.trim(),
          phone: payload.phone?.trim() || null,
          email: payload.email?.trim() || null,
          address: payload.address?.trim() || null,
          type: contactType,
          notes: payload.notes?.trim() || null
        }
      });

      return {
        status: 'success',
        traceId,
        data: contact
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create contact',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
