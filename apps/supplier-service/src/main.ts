import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SupplierServiceModule } from './supplier-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SupplierServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.SUPPLIER_SERVICE_HOST || '0.0.0.0',
        port: parseInt(process.env.SUPPLIER_SERVICE_PORT || '3004', 10),
      },
    },
  );

  await app.listen();
  console.log('Supplier Service is listening on TCP port', process.env.SUPPLIER_SERVICE_PORT || '3004');
}

bootstrap();
