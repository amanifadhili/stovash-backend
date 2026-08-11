import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateLedgerAccountCommand } from '../impl/create-ledger-account.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateLedgerAccountCommand)
export class CreateLedgerAccountHandler extends BaseCommandHandler<CreateLedgerAccountCommand> {
  async execute(command: CreateLedgerAccountCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!context?.tenantId || !context?.shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Missing required context (tenantId / shopId)',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      if (!payload?.code || !payload?.name || !payload?.type) {
        return {
          status: 'error',
          traceId,
          message: 'Account code, name, and type are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const account = await prisma.ledgerAccount.create({
        data: {
          tenantId: context.tenantId,
          shopId: context.shopId,
          code: payload.code,
          name: payload.name,
          type: payload.type,
          balance: Number(payload.initialBalance) || 0
        }
      });

      return {
        status: 'success',
        traceId,
        data: account
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create ledger account',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
