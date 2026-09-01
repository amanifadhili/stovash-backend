import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AccountingServiceModule } from './accounting-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AccountingServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: parseInt(process.env.ACCOUNTING_SERVICE_PORT || '5053', 10),
      },
    },
  );
  await app.listen();
  console.log('Accounting Microservice is listening on TCP port', process.env.ACCOUNTING_SERVICE_PORT || '5053');
}
bootstrap();
