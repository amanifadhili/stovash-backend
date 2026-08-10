import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { initializeTracing } from '@electronic-shop/tracing';
import { logger } from '@electronic-shop/logging';

async function bootstrap() {
  // Initialize OpenTelemetry tracing
  initializeTracing('api-gateway');

  // Initialize logging
  logger.info('Starting API Gateway...');

  process.setMaxListeners(50);
  const app = await NestFactory.create(AppModule);
  
  const httpServer = app.getHttpServer();
  if (httpServer) {
    httpServer.setMaxListeners(50);
  }

  // Security and Gateway configurations
  app.use(helmet({
    contentSecurityPolicy: false, // disable CSP for Vite dev server proxy
    crossOriginEmbedderPolicy: false
  }));
  app.enableCors();
  
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 1000 requests per windowMs
    }),
  );

  // Swagger/OpenAPI documentation
  const config = new DocumentBuilder()
    .setTitle('Electronic Shop API')
    .setDescription('API Gateway for Electronic Shop Management System')
    .setVersion('1.0')
    .addTag('Identity', 'User authentication and tenant management')
    .addTag('Accounting', 'Financial operations and ledger management')
    .addTag('Inventory', 'Product and inventory management')
    .addTag('Sales', 'Sales orders and quotations')
    .addTag('Purchase', 'Purchase orders and supplier management')
    .addTag('Treasury', 'Payment methods and operational deposits')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  
  // Proxy non-API requests to the Vite dev server (port 3001)
  app.use(
    '/',
    (req: any, res: any, next: any) => {
      // Skip proxying if the request is for the API
      if (req.url.startsWith('/api') || req.url.startsWith('/health') || req.url.startsWith('/docs')) {
        return next();
      }
      return createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: false, // disable websocket proxying to prevent HMR reload loops
      })(req, res, next);
    }
  );

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`API Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();
