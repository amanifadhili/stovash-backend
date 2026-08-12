import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

interface RateLimitStore {
  count: number;
  resetTime: number;
}

const LOGIN_EXEMPT_COMMANDS = ['LoginUser', 'CreateTenant'];

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  private store = new Map<string, RateLimitStore>();
  private readonly windowMs = 60 * 1000; // 1 minute window
  private readonly maxRequests = 500; // 500 requests per minute for authenticated users
  private readonly maxRequestsAnonymous = 50; // 50 requests per minute for anonymous (login)

  use(req: Request, res: Response, next: NextFunction) {
    const command = req.body?.command || req.headers['x-command'];

    // Exempt login and registration from rate limiting
    if (command && LOGIN_EXEMPT_COMMANDS.includes(command)) {
      return next();
    }

    const key = this.getKey(req);
    const now = Date.now();
    const record = this.store.get(key);

    if (!record || now > record.resetTime) {
      this.store.set(key, {
        count: 1,
        resetTime: now + this.windowMs
      });
      return next();
    }

    const max = (req as any).user ? this.maxRequests : this.maxRequestsAnonymous;

    if (record.count >= max) {
      throw new HttpException(
        {
          status: 'error',
          message: 'Too many requests. Please wait a moment and try again.',
          errorCode: 'RATE_LIMIT_EXCEEDED',
          retryAfter: Math.ceil((record.resetTime - now) / 1000)
        },
        HttpStatus.TOO_MANY_REQUESTS
      );
    }

    record.count++;
    return next();
  }

  private getKey(req: Request): string {
    const userId = (req as any).user?.id;
    if (userId) {
      return `user:${userId}`;
    }
    return `ip:${req.ip}`;
  }
}
