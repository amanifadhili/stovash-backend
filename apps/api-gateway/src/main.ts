import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { createProxyMiddleware } from 'http-proxy-middleware';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
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
        ws: true, // proxy websockets
      })(req, res, next);
    }
  );

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`API Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();
