import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { InventoryServiceModule } from './inventory-service.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    InventoryServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: parseInt(process.env.INVENTORY_SERVICE_PORT || '5055', 10),
      },
    },
  );
  await app.listen();
  console.log('Inventory Microservice is listening on TCP port', process.env.INVENTORY_SERVICE_PORT || '5055');
}
bootstrap();
