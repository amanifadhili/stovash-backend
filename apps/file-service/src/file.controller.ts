import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { FileService } from './file.service.js';

@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @EventPattern('UploadFile')
  async handleUploadFile(@Payload() data: any) {
    return this.fileService.uploadFile(data);
  }

  @EventPattern('DeleteFile')
  async handleDeleteFile(@Payload() data: any) {
    return this.fileService.deleteFile(data.key);
  }

  @EventPattern('GetFileUrl')
  async handleGetFileUrl(@Payload() data: any) {
    return this.fileService.getFileUrl(data.key, data.expiresIn);
  }

  @EventPattern('GeneratePresignedUrl')
  async handleGeneratePresignedUrl(@Payload() data: any) {
    return this.fileService.generatePresignedUrl(data.key, data.operation, data.expiresIn);
  }
}
