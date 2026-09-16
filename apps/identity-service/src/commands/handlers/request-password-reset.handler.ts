import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';
import nodemailer from 'nodemailer';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RequestPasswordResetCommand } from '../impl/request-password-reset.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

function getFrontendUrl(): string {
  const frontendUrl = process.env.FRONTEND_URL;
  if (!frontendUrl) {
    throw new Error('FRONTEND_URL is not configured');
  }
  return frontendUrl.replace(/\/$/, '');
}

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

function createTransporter() {
  const encryption = process.env.MAIL_ENCRYPTION || process.env.SMTP_ENCRYPTION || 'tls';
  const host = process.env.MAIL_HOST || process.env.SMTP_HOST || 'localhost';
  const port = parseInt(process.env.MAIL_PORT || process.env.SMTP_PORT || '587', 10);
  const user = process.env.MAIL_USERNAME || process.env.SMTP_USER;
  const pass = process.env.MAIL_PASSWORD || process.env.SMTP_PASS;
  return nodemailer.createTransport({
    host,
    port,
    secure: encryption === 'ssl',
    ignoreTLS: encryption === 'none',
    auth: { user, pass },
  });
}

function renderPasswordResetEmail(data: { resetUrl: string; firstName?: string; appName: string; expiresInMinutes: number }): string {
  return `
    <h2>Password Reset Request</h2>
    <p>Hello${data.firstName ? ', ' + data.firstName : ''},</p>
    <p>We received a request to reset your password for ${data.appName}.</p>
    <p>
      <a href="${data.resetUrl}" style="display:inline-block;padding:12px 18px;background:#059669;color:#fff;text-decoration:none;border-radius:8px;">Reset Password</a>
    </p>
    <p>This link will expire in ${data.expiresInMinutes} minutes.</p>
    <p>If you did not request this, you can ignore this email.</p>
  `;
}

@CommandHandler(RequestPasswordResetCommand)
export class RequestPasswordResetHandler extends BaseCommandHandler<RequestPasswordResetCommand> {
  constructor() {
    super();
  }

  async execute(command: RequestPasswordResetCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.email) {
        return {
          status: 'error',
          traceId,
          message: 'Email is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(payload.email)) {
        return {
          status: 'error',
          traceId,
          message: 'Invalid email format',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const user = await prisma.user.findUnique({
        where: { email: payload.email.toLowerCase().trim() },
        select: { id: true, email: true, firstName: true, lastName: true },
      });

      if (!user) {
        return {
          status: 'success',
          traceId,
          data: { sent: true, message: 'If the email exists, you will receive a reset link shortly.' },
        };
      }

      const token = randomUUID();
      const ttlMinutes = Number(process.env.PASSWORD_RESET_TOKEN_TTL_MINUTES || '60');
      const expiresAt = addMinutes(new Date(), ttlMinutes);
      const resetUrl = `${getFrontendUrl()}/auth/reset-password?token=${encodeURIComponent(token)}`;

      await prisma.token.create({
        data: {
          userId: user.id,
          token,
          type: 'PASSWORD_RESET',
          expiresAt,
          used: false,
        },
      });

      const transporter = createTransporter();
      const appName = process.env.APP_NAME || 'Electronic Shop';
      const fromAddress = process.env.MAIL_FROM_ADDRESS || process.env.SMTP_FROM || 'noreply@electronic-shop.com';
      const fromName = process.env.MAIL_FROM_NAME || appName;
      const from = fromName ? `"${fromName}" <${fromAddress}>` : fromAddress;

      try {
        await transporter.sendMail({
          from,
          to: user.email,
          subject: `Reset your ${appName} password`,
          html: renderPasswordResetEmail({
            resetUrl,
            firstName: user.firstName || undefined,
            appName,
            expiresInMinutes: ttlMinutes,
          }),
        });
        console.log(`Password reset email sent to ${user.email} (userId: ${user.id})`);
      } catch (emailErr) {
        console.error(`Failed to send password reset email to ${user.email}:`, emailErr);
      }

      return {
        status: 'success',
        traceId,
        data: { sent: true, message: 'If the email exists, you will receive a reset link shortly.' },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to request password reset',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
