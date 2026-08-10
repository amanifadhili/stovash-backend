import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AssignRoleCommand } from '../impl/assign-role.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(AssignRoleCommand)
export class AssignRoleHandler extends BaseCommandHandler<AssignRoleCommand> {
  async execute(command: AssignRoleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.staffId || !payload?.roleId) {
        return {
          status: 'error',
          traceId,
          message: 'Staff ID and role ID are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const staffRole = await prisma.staffRole.create({
        data: {
          staffId: payload.staffId,
          roleId: payload.roleId,
        }
      });

      return {
        status: 'success',
        traceId,
        data: staffRole
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to assign role',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
