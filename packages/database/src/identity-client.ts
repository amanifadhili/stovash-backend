import { PrismaClient } from './identity-rbac-client';

// Identity database client for RBAC permissions
// This connects to IDENTITY_DATABASE_URL which contains user permissions

const globalForIdentityPrisma = global as unknown as { identityPrisma: PrismaClient };

export const identityPrisma =
  globalForIdentityPrisma.identityPrisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.IDENTITY_DATABASE_URL,
      },
    },
    log: ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForIdentityPrisma.identityPrisma = identityPrisma;
}
