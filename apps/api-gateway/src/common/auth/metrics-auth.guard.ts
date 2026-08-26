import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { canAccessMetrics, extractMetricsToken } from './metrics-access.js';

@Injectable()
export class MetricsAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const allowed = canAccessMetrics({
      nodeEnv: process.env.NODE_ENV || 'development',
      metricsToken: process.env.METRICS_TOKEN || '',
      providedToken: extractMetricsToken(request.headers || {}),
    });
    if (!allowed) {
      throw new UnauthorizedException({
        status: 'error',
        message: 'Metrics are not public. Send Authorization: Bearer <METRICS_TOKEN> or X-Metrics-Token.',
        errorCode: 'UNAUTHORIZED',
      });
    }
    return true;
  }
}
