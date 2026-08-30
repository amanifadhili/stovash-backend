import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url:
        process.env.TENANT_DATABASE_URL ||
        process.env.POSTGRES_URI ||
        process.env.DATABASE_URL ||
        'postgresql://postgres:postgres@localhost:5432/electronic_shop',
    },
  },
});

export { prisma };
