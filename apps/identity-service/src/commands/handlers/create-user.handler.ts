import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateUserCommand } from '../impl/create-user.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import bcrypt from 'bcryptjs';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler extends BaseCommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.email || !payload?.password || !payload?.firstName || !payload?.lastName) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID, email, password, first name, and last name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: payload.email }
      });

      if (existingUser) {
        return {
          status: 'error',
          traceId,
          message: 'User with this email already exists',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const hashedPassword = await bcrypt.hash(payload.password, 10);

      const user = await prisma.user.create({
        data: {
          tenantId: payload.tenantId,
          email: payload.email,
          password: hashedPassword,
          firstName: payload.firstName,
          lastName: payload.lastName,
          role: payload.role || 'STAFF',
          status: 'ACTIVE',
        }
      });

      return {
        status: 'success',
        traceId,
        data: user
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create user',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
