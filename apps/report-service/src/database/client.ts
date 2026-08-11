import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.REPORT_DATABASE_URL,
    },
  },
});

export { prisma };
