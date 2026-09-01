import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { CustomerServiceModule } from './customer-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CustomerServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.CUSTOMER_SERVICE_HOST || '0.0.0.0',
        port: parseInt(process.env.CUSTOMER_SERVICE_PORT || '5054', 10),
      },
    },
  );

  await app.listen();
  console.log('Customer Service is listening on TCP port', process.env.CUSTOMER_SERVICE_PORT || '5054');
}

bootstrap();
