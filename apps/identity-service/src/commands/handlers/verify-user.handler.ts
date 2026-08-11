import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { VerifyUserCommand } from '../impl/verify-user.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import * as jwt from 'jsonwebtoken';

@CommandHandler(VerifyUserCommand)
export class VerifyUserHandler extends BaseCommandHandler<VerifyUserCommand> {
  async execute(command: VerifyUserCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.token) {
        return {
          status: 'error',
          traceId,
          message: 'Token is required',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      const decodedToken = jwt.verify(
        payload.token,
        process.env.JWT_SECRET || 'dev-secret-key'
      ) as any;

      const user = await prisma.user.findUnique({
        where: { id: decodedToken.sub }
      });

      if (!user) {
        return {
          status: 'error',
          traceId,
          message: 'User not found',
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

      return {
        status: 'success',
        traceId,
        data: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          tenantId: user.tenantId,
          status: user.status
        }
      };
    } catch (error: any) {
      if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
        return {
          status: 'error',
          traceId,
          message: error.message || 'Invalid or expired token',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }
      return {
        status: 'error',
        traceId,
        message: error.message || 'Verification failed',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
