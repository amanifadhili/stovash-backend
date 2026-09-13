import { PrismaClient } from './identity-rbac-client';

// Identity database client for RBAC permissions
// This connects to IDENTITY_DATABASE_URL which contains user permissions
// Lazy instantiation — PrismaClient is only created when first accessed,
// so module-level imports in tests don't crash when the env var is missing.

const globalForIdentityPrisma = global as unknown as { identityPrisma: PrismaClient };

let _identityPrisma: PrismaClient | null = null;

export function getIdentityPrisma(): PrismaClient {
  if (!_identityPrisma) {
    _identityPrisma =
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
      globalForIdentityPrisma.identityPrisma = _identityPrisma;
    }
  }
  return _identityPrisma;
}

// Backward-compatible named export — lazy getter pattern
export const identityPrisma = new Proxy({} as PrismaClient, {
  get(_, prop) {
    return (getIdentityPrisma() as any)[prop];
  },
});
