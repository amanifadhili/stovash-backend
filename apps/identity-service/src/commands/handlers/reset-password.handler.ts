import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import bcrypt from 'bcryptjs';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { ResetPasswordCommand } from '../impl/reset-password.command.js';

@CommandHandler(ResetPasswordCommand)
export class ResetPasswordHandler extends BaseCommandHandler<ResetPasswordCommand> {
  async execute(command: ResetPasswordCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.token || !payload?.password) {
        return {
          status: 'error',
          traceId,
          message: 'Token and password are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const tokenRecord = await prisma.token.findUnique({
        where: { token: payload.token },
      });

      if (
        !tokenRecord ||
        tokenRecord.type !== 'PASSWORD_RESET' ||
        tokenRecord.used ||
        tokenRecord.expiresAt.getTime() < Date.now()
      ) {
        return {
          status: 'error',
          traceId,
          message: 'Reset token is invalid or expired',
          errorCode: ErrorCode.UNAUTHORIZED,
        };
      }

      const hashedPassword = await bcrypt.hash(payload.password, 10);

      await prisma.$transaction([
        prisma.user.update({
          where: { id: tokenRecord.userId },
          data: { password: hashedPassword },
        }),
        prisma.token.update({
          where: { token: payload.token },
          data: { used: true },
        }),
      ]);

      return {
        status: 'success',
        traceId,
        data: { updated: true },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to reset password',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
