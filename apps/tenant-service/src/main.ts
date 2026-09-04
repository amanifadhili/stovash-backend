import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { TenantServiceModule } from './tenant-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TenantServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.TENANT_SERVICE_HOST || '127.0.0.1',
        port: parseInt(process.env.TENANT_SERVICE_PORT || '5059', 10),
      },
    },
  );

  await app.listen();
  console.log('Tenant Service is listening on TCP port', process.env.TENANT_SERVICE_PORT || '5059');
}

bootstrap();
