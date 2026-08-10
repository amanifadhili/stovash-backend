import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.SALES_DATABASE_URL,
    },
  },
});

export { prisma };
