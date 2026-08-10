import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { FileController } from './file.controller.js';
import { FileService } from './file.service.js';
import { S3StorageProvider } from './providers/s3-storage.provider.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [FileController],
  providers: [
    FileService,
    S3StorageProvider,
    ...CommandHandlers,
  ],
})
export class AppModule {}
