import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

interface RateLimitStore {
  count: number;
  resetTime: number;
}

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  private store = new Map<string, RateLimitStore>();
  private readonly windowMs = 60 * 1000; // 1 minute window
  private readonly maxRequests = 100; // 100 requests per minute

  use(req: Request, res: Response, next: NextFunction) {
    const key = this.getKey(req);
    const now = Date.now();
    const record = this.store.get(key);

    if (!record || now > record.resetTime) {
      // Create new record or reset expired one
      this.store.set(key, {
        count: 1,
        resetTime: now + this.windowMs
      });
      return next();
    }

    if (record.count >= this.maxRequests) {
      throw new HttpException(
        {
          status: 'error',
          message: 'Too many requests',
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
    // Use user ID if available, otherwise use IP
    const userId = (req as any).user?.id;
    if (userId) {
      return `user:${userId}`;
    }
    return `ip:${req.ip}`;
  }
}
