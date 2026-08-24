import { PrismaClient } from '@prisma/client';
import { MigrationService } from './migration.service';

export * from '@prisma/client';
export { MigrationService };
export * from './permissions/catalog';
export * from './permissions/resolution.engine';
export * from './permissions/scoping.helpers';
export * from './permissions/migration-seed';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
