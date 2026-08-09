import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateTenantCommand } from '../impl/create-tenant.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import * as bcrypt from 'bcryptjs';

@CommandHandler(CreateTenantCommand)
export class CreateTenantHandler extends BaseCommandHandler<CreateTenantCommand> {
  async execute(command: CreateTenantCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.adminEmail || !payload?.adminPassword || !payload?.name) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant name, adminEmail, and adminPassword are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Validate email uniqueness
      const existingUser = await prisma.user.findUnique({ where: { email: payload.adminEmail } });
      if (existingUser) {
        return {
          status: 'error',
          traceId,
          message: 'Admin email already in use',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const hashedPassword = await bcrypt.hash(payload.adminPassword, 10);

      const result = await prisma.$transaction(async (tx) => {
        const tenant = await tx.tenant.create({
          data: {
            name: payload.name,
            status: 'ACTIVE',
          }
        });

        const user = await tx.user.create({
          data: {
            tenantId: tenant.id,
            email: payload.adminEmail,
            password: hashedPassword,
            firstName: payload.adminFirstName || 'Admin',
            lastName: payload.adminLastName || 'User',
            role: 'ADMIN',
            status: 'ACTIVE'
          }
        });

        return { tenant, user };
      });

      return {
        status: 'success',
        traceId,
        data: {
          tenantId: result.tenant.id,
          userId: result.user.id
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create tenant',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
