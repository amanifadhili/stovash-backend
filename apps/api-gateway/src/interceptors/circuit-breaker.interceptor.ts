import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadGatewayException } from '@nestjs/common';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, timeout, retryWhen, delayWhen, take } from 'rxjs/operators';

interface CircuitState {
  isOpen: boolean;
  failureCount: number;
  lastFailureTime: number;
}

@Injectable()
export class CircuitBreakerInterceptor implements NestInterceptor {
  private circuitState = new Map<string, CircuitState>();
  private readonly failureThreshold = 5;
  private readonly recoveryTimeout = 60000; // 1 minute
  private readonly requestTimeout = 5000; // 5 seconds

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const serviceName = this.getServiceName(context);
    const state = this.getCircuitState(serviceName);

    if (state.isOpen && Date.now() - state.lastFailureTime < this.recoveryTimeout) {
      return throwError(() => new BadGatewayException({
        status: 'error',
        message: `Service ${serviceName} circuit is open`,
        errorCode: 'CIRCUIT_BREAKER_OPEN'
      }));
    }

    return next.handle().pipe(
      timeout(this.requestTimeout),
      catchError(error => {
        console.error('[CIRCUIT-DEBUG] original error:', error.name, '-', error.message, '\n', error.stack?.split('\n').slice(0, 4).join('\n'));
        this.recordFailure(serviceName);
        return throwError(() => error);
      }),
      retryWhen(errors => errors.pipe(
        delayWhen(() => timer(1000)),
        take(2)
      ))
    );
  }

  private getServiceName(context: ExecutionContext): string {
    const handler = context.getHandler();
    return handler.name || 'unknown';
  }

  private getCircuitState(serviceName: string): CircuitState {
    if (!this.circuitState.has(serviceName)) {
      this.circuitState.set(serviceName, {
        isOpen: false,
        failureCount: 0,
        lastFailureTime: 0
      });
    }
    return this.circuitState.get(serviceName)!;
  }

  private recordFailure(serviceName: string): void {
    const state = this.getCircuitState(serviceName);
    state.failureCount++;
    state.lastFailureTime = Date.now();

    if (state.failureCount >= this.failureThreshold) {
      state.isOpen = true;
      console.warn(`Circuit breaker opened for service: ${serviceName}`);
    }
  }
}
