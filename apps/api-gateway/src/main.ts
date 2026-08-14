import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
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
  const app = await NestFactory.create(AppModule, { bodyParser: false });

  // Purchase photos travel as data URLs. Default Express JSON limit is 100kb.
  const bodyLimit = process.env.GATEWAY_BODY_LIMIT || '25mb';
  app.use(json({ limit: bodyLimit }));
  app.use(urlencoded({ extended: true, limit: bodyLimit }));
  
  const httpServer = app.getHttpServer();
  if (httpServer) {
    httpServer.setMaxListeners(50);
  }

  // Security and Gateway configurations
  app.use(helmet({
    contentSecurityPolicy: false, // disable CSP for Vite dev server proxy
    crossOriginEmbedderPolicy: false
  }));
  
  // CORS configuration - allow Next.js frontend with credentials
  const corsOriginsEnv = process.env.CORS_ORIGINS?.split(',').map((o) => o.trim()).filter(Boolean);
  const corsOrigins = corsOriginsEnv && corsOriginsEnv.length > 0 ? corsOriginsEnv : true;
  app.enableCors({
    origin: corsOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Tenant-ID', 'X-Shop-ID', 'X-User-ID', 'X-Work-Period-ID', 'X-Trace-ID'],
    credentials: true,
    maxAge: 86400,
  });
  
  // IP-level ceiling (express-rate-limit). Per-user limits also apply in
  // RateLimitMiddleware (20k/min auth, 2k/min anonymous). Keep this high enough
  // for SPA polling + multi-service fan-out from one browser IP.
  app.use(
    rateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: Number(process.env.GATEWAY_IP_RATE_LIMIT_MAX ?? 50000),
      standardHeaders: true,
      legacyHeaders: false,
      message: {
        status: 'error',
        message: 'Too many requests. Please wait a moment and try again.',
        errorCode: 'RATE_LIMIT_EXCEEDED',
      },
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
