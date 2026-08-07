import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS and other gateway configurations
  app.enableCors();
  
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
