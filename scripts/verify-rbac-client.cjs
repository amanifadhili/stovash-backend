const { PrismaClient } = require('../packages/database/src/identity-rbac-client');

const client = new PrismaClient();
const required = ['userPermission', 'userTemplateAssignment', 'templatePermission'];
const missing = required.filter((model) => typeof client[model] === 'undefined');

if (missing.length > 0) {
  console.error(`Missing RBAC Prisma delegates: ${missing.join(', ')}`);
  process.exitCode = 1;
} else {
  console.log(`RBAC Prisma delegates verified: ${required.join(', ')}`);
}

client.$disconnect().catch(() => {
  process.exitCode = 1;
});
