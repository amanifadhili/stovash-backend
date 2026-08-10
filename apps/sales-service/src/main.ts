import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SalesServiceModule } from './sales-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SalesServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.SALES_SERVICE_HOST || '0.0.0.0',
        port: parseInt(process.env.SALES_SERVICE_PORT || '3005', 10),
      },
    },
  );

  await app.listen();
  console.log('Sales Service is listening on TCP port', process.env.SALES_SERVICE_PORT || '3005');
}

bootstrap();
