import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  process.setMaxListeners(50);
  const app = await NestFactory.create(AppModule);
  
  const httpServer = app.getHttpServer();
  if (httpServer) {
    httpServer.setMaxListeners(50);
  }

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3008;
  await app.listen(port, '0.0.0.0');
  console.log(`Report Service is running on: ${await app.getUrl()}`);
}
bootstrap();
