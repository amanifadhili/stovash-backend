import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.PURCHASE_DATABASE_URL,
    },
  },
});

export { prisma };
