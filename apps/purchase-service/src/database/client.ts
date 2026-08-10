import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.PURCHASE_DATABASE_URL,
    },
  },
});

export { prisma };
