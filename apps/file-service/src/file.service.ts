import { Injectable } from '@nestjs/common';
import { S3StorageProvider } from './providers/s3-storage.provider.js';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
  constructor(private readonly s3Provider: S3StorageProvider) {}

  async uploadFile(data: {
    file: Buffer;
    filename: string;
    contentType: string;
    tenantId: string;
    category?: string;
  }) {
    const { file, filename, contentType, tenantId, category } = data;
    
    // Generate unique key
    const key = this.generateKey(tenantId, category, filename);
    
    // Upload to S3
    const result = await this.s3Provider.upload({
      key,
      body: file,
      contentType,
    });

    return {
      success: true,
      key,
      url: result.url,
      bucket: result.bucket,
    };
  }

  async deleteFile(key: string) {
    const result = await this.s3Provider.delete(key);
    return {
      success: result,
    };
  }

  async getFileUrl(key: string, expiresIn: number = 3600) {
    const url = await this.s3Provider.getSignedUrl(key, 'getObject', expiresIn);
    return {
      success: true,
      url,
    };
  }

  async generatePresignedUrl(
    key: string,
    operation: 'putObject' | 'getObject',
    expiresIn: number = 3600
  ) {
    const url = await this.s3Provider.getSignedUrl(key, operation, expiresIn);
    return {
      success: true,
      url,
    };
  }

  private generateKey(tenantId: string, filename: string, category?: string): string {
    const ext = filename.split('.').pop();
    const uniqueId = uuidv4();
    const timestamp = Date.now();
    
    if (category) {
      return `${tenantId}/${category}/${timestamp}-${uniqueId}.${ext}`;
    }
    
    return `${tenantId}/${timestamp}-${uniqueId}.${ext}`;
  }

  async listFiles(tenantId: string, prefix?: string) {
    const result = await this.s3Provider.list(
      prefix || tenantId
    );
    
    return {
      success: true,
      files: result.files,
      isTruncated: result.isTruncated,
    };
  }

  async getFileMetadata(key: string) {
    const metadata = await this.s3Provider.headObject(key);
    return {
      success: true,
      metadata,
    };
  }
}
