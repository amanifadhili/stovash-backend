import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller.js';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter.js';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor.js';
import { ContextMiddleware } from './common/middleware/context.middleware.js';
import { RateLimitMiddleware } from './middleware/rate-limit.middleware.js';
import { CircuitBreakerInterceptor } from './interceptors/circuit-breaker.interceptor.js';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'IDENTITY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3002 },
      },
      {
        name: 'ACCOUNTING_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3003 },
      },
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3004 },
      },
      {
        name: 'SALES_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3005 },
      },
      {
        name: 'TREASURY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3006 },
      },
      {
        name: 'PURCHASE_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3007 },
      },
      {
        name: 'TENANT_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3008 },
      },
      {
        name: 'SUPPLIER_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3012 },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_FILTER, useClass: GlobalExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: CircuitBreakerInterceptor },
    RateLimitMiddleware
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ContextMiddleware, RateLimitMiddleware)
      .forRoutes(
        { path: '/api', method: RequestMethod.ALL },
        { path: '/api/*', method: RequestMethod.ALL }
      );
  }
}
