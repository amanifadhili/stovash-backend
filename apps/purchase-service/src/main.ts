import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { PurchaseServiceModule } from './purchase-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PurchaseServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.PURCHASE_SERVICE_HOST || '0.0.0.0',
        port: parseInt(process.env.PURCHASE_SERVICE_PORT || '5057', 10),
      },
    },
  );

  await app.listen();
  console.log('Purchase Service is listening on TCP port', process.env.PURCHASE_SERVICE_PORT || '5057');
}

bootstrap();
