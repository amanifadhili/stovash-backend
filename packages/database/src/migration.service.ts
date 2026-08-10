import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Migration configuration
 */
export interface MigrationConfig {
  schemaPath: string;
  databaseUrl: string;
  serviceName: string;
}

/**
 * Migration service for managing database migrations
 */
export class MigrationService {
  private schemasDir: string;

  constructor(schemasDir: string) {
    this.schemasDir = schemasDir;
  }

  /**
   * Get all available schema files
   */
  getAvailableSchemas(): string[] {
    const schemasPath = path.join(this.schemasDir, 'schemas');
    
    if (!fs.existsSync(schemasPath)) {
      return [];
    }

    const files = fs.readdirSync(schemasPath);
    return files.filter(file => file.endsWith('.prisma'));
  }

  /**
   * Generate Prisma client for a specific schema
   */
  generateClient(serviceName: string): void {
    const schemaPath = path.join(this.schemasDir, 'schemas', `${serviceName}.prisma`);
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }

    console.log(`Generating Prisma client for ${serviceName}...`);
    
    try {
      execSync(
        `npx prisma generate --schema=${schemaPath}`,
        { stdio: 'inherit' }
      );
      console.log(`Prisma client generated for ${serviceName}`);
    } catch (error) {
      console.error(`Failed to generate client for ${serviceName}:`, error);
      throw error;
    }
  }

  /**
   * Generate clients for all schemas
   */
  generateAllClients(): void {
    const schemas = this.getAvailableSchemas();
    
    console.log(`Found ${schemas.length} schema(s) to process`);
    
    for (const schemaFile of schemas) {
      const serviceName = schemaFile.replace('.prisma', '');
      this.generateClient(serviceName);
    }
  }

  /**
   * Run migrations for a specific service
   */
  migrate(serviceName: string): void {
    const schemaPath = path.join(this.schemasDir, 'schemas', `${serviceName}.prisma`);
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }

    console.log(`Running migrations for ${serviceName}...`);
    
    try {
      // Create migration
      execSync(
        `npx prisma migrate dev --schema=${schemaPath} --name init`,
        { stdio: 'inherit' }
      );
      console.log(`Migrations completed for ${serviceName}`);
    } catch (error) {
      console.error(`Failed to migrate ${serviceName}:`, error);
      throw error;
    }
  }

  /**
   * Run migrations for all services
   */
  migrateAll(): void {
    const schemas = this.getAvailableSchemas();
    
    console.log(`Running migrations for ${schemas.length} service(s)`);
    
    for (const schemaFile of schemas) {
      const serviceName = schemaFile.replace('.prisma', '');
      this.migrate(serviceName);
    }
  }

  /**
   * Reset database for a specific service
   */
  reset(serviceName: string): void {
    const schemaPath = path.join(this.schemasDir, 'schemas', `${serviceName}.prisma`);
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }

    console.log(`Resetting database for ${serviceName}...`);
    
    try {
      execSync(
        `npx prisma migrate reset --schema=${schemaPath} --force`,
        { stdio: 'inherit' }
      );
      console.log(`Database reset for ${serviceName}`);
    } catch (error) {
      console.error(`Failed to reset ${serviceName}:`, error);
      throw error;
    }
  }

  /**
   * Push schema changes without migration (for development)
   */
  push(serviceName: string): void {
    const schemaPath = path.join(this.schemasDir, 'schemas', `${serviceName}.prisma`);
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }

    console.log(`Pushing schema changes for ${serviceName}...`);
    
    try {
      execSync(
        `npx prisma db push --schema=${schemaPath}`,
        { stdio: 'inherit' }
      );
      console.log(`Schema pushed for ${serviceName}`);
    } catch (error) {
      console.error(`Failed to push schema for ${serviceName}:`, error);
      throw error;
    }
  }

  /**
   * Push all schemas (for development)
   */
  pushAll(): void {
    const schemas = this.getAvailableSchemas();
    
    console.log(`Pushing schemas for ${schemas.length} service(s)`);
    
    for (const schemaFile of schemas) {
      const serviceName = schemaFile.replace('.prisma', '');
      this.push(serviceName);
    }
  }

  /**
   * Create a new migration for a service
   */
  createMigration(serviceName: string, name: string): void {
    const schemaPath = path.join(this.schemasDir, 'schemas', `${serviceName}.prisma`);
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }

    console.log(`Creating migration for ${serviceName}: ${name}...`);
    
    try {
      execSync(
        `npx prisma migrate dev --schema=${schemaPath} --name ${name}`,
        { stdio: 'inherit' }
      );
      console.log(`Migration created for ${serviceName}`);
    } catch (error) {
      console.error(`Failed to create migration for ${serviceName}:`, error);
      throw error;
    }
  }

  /**
   * Validate schema for a service
   */
  validate(serviceName: string): void {
    const schemaPath = path.join(this.schemasDir, 'schemas', `${serviceName}.prisma`);
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }

    console.log(`Validating schema for ${serviceName}...`);
    
    try {
      execSync(
        `npx prisma validate --schema=${schemaPath}`,
        { stdio: 'inherit' }
      );
      console.log(`Schema validated for ${serviceName}`);
    } catch (error) {
      console.error(`Schema validation failed for ${serviceName}:`, error);
      throw error;
    }
  }

  /**
   * Format schema for a service
   */
  format(serviceName: string): void {
    const schemaPath = path.join(this.schemasDir, 'schemas', `${serviceName}.prisma`);
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }

    console.log(`Formatting schema for ${serviceName}...`);
    
    try {
      execSync(
        `npx prisma format --schema=${schemaPath}`,
        { stdio: 'inherit' }
      );
      console.log(`Schema formatted for ${serviceName}`);
    } catch (error) {
      console.error(`Failed to format schema for ${serviceName}:`, error);
      throw error;
    }
  }

  /**
   * Format all schemas
   */
  formatAll(): void {
    const schemas = this.getAvailableSchemas();
    
    console.log(`Formatting ${schemas.length} schema(s)`);
    
    for (const schemaFile of schemas) {
      const serviceName = schemaFile.replace('.prisma', '');
      this.format(serviceName);
    }
  }

  /**
   * Get migration status for a service
   */
  status(serviceName: string): void {
    const schemaPath = path.join(this.schemasDir, 'schemas', `${serviceName}.prisma`);
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`);
    }

    console.log(`Migration status for ${serviceName}:`);
    
    try {
      execSync(
        `npx prisma migrate status --schema=${schemaPath}`,
        { stdio: 'inherit' }
      );
    } catch (error) {
      console.error(`Failed to get status for ${serviceName}:`, error);
      throw error;
    }
  }
}
