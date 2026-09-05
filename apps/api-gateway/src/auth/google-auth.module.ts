import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GoogleAuthController } from './google-auth.controller.js';
import { GoogleAuthService } from './google-auth.service.js';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'IDENTITY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.IDENTITY_SERVICE_PORT || '5052', 10) },
      },
    ]),
  ],
  controllers: [GoogleAuthController],
  providers: [GoogleAuthService],
  exports: [GoogleAuthService],
})
export class GoogleAuthModule {}