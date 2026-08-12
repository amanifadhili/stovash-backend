import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: parseInt(process.env.NOTIFICATION_SERVICE_PORT || '3009', 10),
      },
    },
  );

  await app.listen();
  console.log('Notification Service is listening on port', process.env.NOTIFICATION_SERVICE_PORT || '3009');
}
bootstrap();
