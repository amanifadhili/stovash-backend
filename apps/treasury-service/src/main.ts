import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TreasuryServiceModule } from './treasury-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TreasuryServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
        queue: process.env.TREASURY_SERVICE_QUEUE || 'treasury-service',
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  await app.listen();
  console.log('Treasury Service is running');
}

bootstrap();
