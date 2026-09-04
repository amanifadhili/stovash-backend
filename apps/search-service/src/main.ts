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
        port: parseInt(process.env.SEARCH_SERVICE_PORT || '5061', 10),
      },
    },
  );

  await app.listen();
  console.log('Search Service is listening on port', process.env.SEARCH_SERVICE_PORT || '5061');
}
bootstrap();
