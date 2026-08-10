import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateRoleCommand } from '../impl/create-role.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateRoleCommand)
export class CreateRoleHandler extends BaseCommandHandler<CreateRoleCommand> {
  async execute(command: CreateRoleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.name) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID and role name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const role = await prisma.role.create({
        data: {
          tenantId: payload.tenantId,
          name: payload.name,
          description: payload.description,
        }
      });

      if (payload.permissions && payload.permissions.length > 0) {
        await prisma.rolePermission.createMany({
          data: payload.permissions.map((permissionId: string) => ({
            roleId: role.id,
            permissionId,
          }))
        });
      }

      return {
        status: 'success',
        traceId,
        data: role
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create role',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
