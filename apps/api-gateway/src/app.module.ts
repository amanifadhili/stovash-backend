import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller.js';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter.js';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor.js';
import { ContextMiddleware } from './common/middleware/context.middleware.js';
import { RateLimitMiddleware } from './middleware/rate-limit.middleware.js';
import { CircuitBreakerInterceptor } from './interceptors/circuit-breaker.interceptor.js';
import { ReadinessService } from './common/readiness.service.js';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'IDENTITY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.IDENTITY_SERVICE_PORT || '5052', 10) },
      },
      {
        name: 'ACCOUNTING_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.ACCOUNTING_SERVICE_PORT || '5053', 10) },
      },
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.INVENTORY_SERVICE_PORT || '5055', 10) },
      },
      {
        name: 'SALES_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.SALES_SERVICE_PORT || '5056', 10) },
      },
      {
        name: 'TREASURY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.TREASURY_SERVICE_PORT || '5058', 10) },
      },
      {
        name: 'PURCHASE_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.PURCHASE_SERVICE_PORT || '5057', 10) },
      },
      {
        name: 'TENANT_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.TENANT_SERVICE_PORT || '5059', 10) },
      },
      {
        name: 'SUPPLIER_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.SUPPLIER_SERVICE_PORT || '5064', 10) },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_FILTER, useClass: GlobalExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: CircuitBreakerInterceptor },
    RateLimitMiddleware,
    ReadinessService
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
