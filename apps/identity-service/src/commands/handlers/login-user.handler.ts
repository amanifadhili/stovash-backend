import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { LoginUserCommand } from '../impl/login-user.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@CommandHandler(LoginUserCommand)
export class LoginUserHandler extends BaseCommandHandler<LoginUserCommand> {
  async execute(command: LoginUserCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.email || !payload?.password) {
        return {
          status: 'error',
          traceId,
          message: 'Email and password are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const user = await prisma.user.findUnique({ where: { email: payload.email } });
      if (!user) {
        return {
          status: 'error',
          traceId,
          message: 'Invalid credentials',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      const isPasswordValid = await bcrypt.compare(payload.password, user.password);
      if (!isPasswordValid) {
        return {
          status: 'error',
          traceId,
          message: 'Invalid credentials',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      if (user.status !== 'ACTIVE') {
        return {
          status: 'error',
          traceId,
          message: 'User account is not active',
          errorCode: ErrorCode.FORBIDDEN
        };
      }

      const token = jwt.sign(
        {
          sub: user.id,
          email: user.email,
          role: user.role,
          tenantId: user.tenantId
        },
        process.env.JWT_SECRET || 'dev-secret-key',
        { expiresIn: '1d' }
      );

      return {
        status: 'success',
        traceId,
        data: {
          accessToken: token,
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            tenantId: user.tenantId
          }
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Login failed',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
