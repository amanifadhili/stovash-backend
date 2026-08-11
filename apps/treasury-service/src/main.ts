import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TreasuryServiceModule } from './treasury-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TreasuryServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: parseInt(process.env.TREASURY_SERVICE_PORT || '3006', 10),
      },
    },
  );

  await app.listen();
  console.log('Treasury Microservice is listening on TCP port', process.env.TREASURY_SERVICE_PORT || '3006');
}

bootstrap();
