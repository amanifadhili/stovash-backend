import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand, HeadObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3StorageProvider {
  private client: S3Client;
  private bucket: string;

  constructor() {
    this.bucket = process.env.S3_BUCKET || 'electronic-shop-files';
    
    this.client = new S3Client({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      },
      endpoint: process.env.S3_ENDPOINT, // Optional for local S3-compatible storage
    });
  }

  async upload(data: { key: string; body: Buffer; contentType: string }) {
    try {
      const command = new PutObjectCommand({
        Bucket: this.bucket,
        Key: data.key,
        Body: data.body,
        ContentType: data.contentType,
      });

      await this.client.send(command);

      const url = `${process.env.S3_PUBLIC_URL || `https://${this.bucket}.s3.amazonaws.com`}/${data.key}`;

      console.log('File uploaded to S3:', data.key);
      return { success: true, url, bucket: this.bucket };
    } catch (error) {
      console.error('Error uploading file to S3:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  async delete(key: string) {
    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucket,
        Key: key,
      });

      await this.client.send(command);
      console.log('File deleted from S3:', key);
      return true;
    } catch (error) {
      console.error('Error deleting file from S3:', error);
      return false;
    }
  }

  async getSignedUrl(key: string, operation: 'getObject' | 'putObject', expiresIn: number = 3600) {
    try {
      let command;
      
      if (operation === 'getObject') {
        command = new GetObjectCommand({
          Bucket: this.bucket,
          Key: key,
        });
      } else {
        command = new PutObjectCommand({
          Bucket: this.bucket,
          Key: key,
        });
      }

      const url = await getSignedUrl(this.client, command, { expiresIn });
      return url;
    } catch (error) {
      console.error('Error generating signed URL:', error);
      throw error;
    }
  }

  async list(prefix: string) {
    try {
      const command = new ListObjectsV2Command({
        Bucket: this.bucket,
        Prefix: prefix,
      });

      const response = await this.client.send(command);

      const files = response.Contents?.map(item => ({
        key: item.Key,
        size: item.Size,
        lastModified: item.LastModified,
      })) || [];

      return {
        files,
        isTruncated: response.IsTruncated || false,
      };
    } catch (error) {
      console.error('Error listing files from S3:', error);
      return {
        files: [],
        isTruncated: false,
      };
    }
  }

  async headObject(key: string) {
    try {
      const command = new HeadObjectCommand({
        Bucket: this.bucket,
        Key: key,
      });

      const response = await this.client.send(command);

      return {
        contentType: response.ContentType,
        contentLength: response.ContentLength,
        lastModified: response.LastModified,
        metadata: response.Metadata,
      };
    } catch (error) {
      console.error('Error getting object metadata from S3:', error);
      return null;
    }
  }
}
