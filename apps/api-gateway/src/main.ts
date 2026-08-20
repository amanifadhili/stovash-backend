import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module.js';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { initializeTracing } from '@electronic-shop/tracing';
import { logger } from '@electronic-shop/logging';
import { isGatewayOwnedPath } from './common/gateway-owned-path.js';
import {
  DEFAULT_JSON_LIMIT,
  UPLOAD_JSON_LIMIT,
  allowOversizedJsonBody,
  parseByteLimit,
  peekJsonCommand,
} from './common/json-body-limit.js';

async function bootstrap() {
  // Initialize OpenTelemetry tracing
  initializeTracing('api-gateway');

  // Initialize logging
  logger.info('Starting API Gateway...');

  process.setMaxListeners(50);
  const app = await NestFactory.create(AppModule, { bodyParser: false });

  // Default 1mb for normal commands. Purchase photo data URLs may use up to 25mb,
  // and only for LARGE_BODY_COMMANDS (see json-body-limit.ts).
  const defaultLimit = DEFAULT_JSON_LIMIT;
  const uploadLimit = UPLOAD_JSON_LIMIT;
  const defaultLimitBytes = parseByteLimit(defaultLimit);
  logger.info(`JSON body limits: default=${defaultLimit} upload=${uploadLimit}`);

  app.use(
    json({
      limit: uploadLimit,
      verify: (req: any, _res, buf) => {
        const command =
          peekJsonCommand(buf) ||
          String(req.headers['x-command'] || req.headers['X-Command'] || '');
        if (
          !allowOversizedJsonBody({
            bodyBytes: buf.length,
            defaultLimitBytes,
            command,
          })
        ) {
          const err: any = new Error('request entity too large');
          err.status = 413;
          err.statusCode = 413;
          err.type = 'entity.too.large';
          throw err;
        }
      },
    }),
  );
  app.use(urlencoded({ extended: true, limit: defaultLimit }));
  
  const httpServer = app.getHttpServer();
  if (httpServer) {
    httpServer.setMaxListeners(50);
  }

  // Security and Gateway configurations
  app.use(helmet({
    contentSecurityPolicy: false,
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

  // Dev-only: proxy leftover UI paths to a local Vite server.
  // Production must NOT do this — localhost:3001 is absent and nginx sees 504s on /, /metrics, etc.
  const enableDevProxy =
    process.env.GATEWAY_DEV_PROXY === '1' ||
    (process.env.NODE_ENV !== 'production' && process.env.GATEWAY_DEV_PROXY !== '0');

  if (enableDevProxy) {
    const viteTarget = process.env.GATEWAY_DEV_PROXY_TARGET || 'http://localhost:3001';
    logger.info(`Gateway UI proxy enabled -> ${viteTarget}`);
    app.use(
      '/',
      (req: any, res: any, next: any) => {
        if (isGatewayOwnedPath(req.url || '')) {
          return next();
        }
        return createProxyMiddleware({
          target: viteTarget,
          changeOrigin: true,
          ws: false,
        })(req, res, next);
      },
    );
  } else {
    logger.info('Gateway UI proxy disabled (production). Unknown paths return Nest 404.');
  }

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`API Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();
