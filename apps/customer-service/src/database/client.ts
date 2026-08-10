import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.CUSTOMER_DATABASE_URL,
    },
  },
});

export { prisma };
