import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { IdentityServiceModule } from './identity-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    IdentityServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: parseInt(process.env.IDENTITY_SERVICE_PORT || '5052', 10),
      },
    },
  );
  await app.listen();
  console.log('Identity Microservice is listening on TCP port', process.env.IDENTITY_SERVICE_PORT || '5052');
}
bootstrap();
