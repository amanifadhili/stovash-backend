import bcrypt from 'bcryptjs';
import { DEMO, DEMO_PASSWORD } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

export async function seedIdentity(clients: SeedClients): Promise<void> {
  const hash = await bcrypt.hash(DEMO_PASSWORD, 10);
  const users = Object.values(DEMO.users);

  for (const u of users) {
    await clients.identity.user.upsert({
      where: { email: u.email },
      update: {
        password: hash,
        firstName: u.firstName,
        lastName: u.lastName,
        role: u.role,
        status: 'ACTIVE',
        tenantId: DEMO.tenantId,
      },
      create: {
        id: u.id,
        tenantId: DEMO.tenantId,
        email: u.email,
        password: hash,
        firstName: u.firstName,
        lastName: u.lastName,
        role: u.role,
        status: 'ACTIVE',
      },
    });
  }

  console.log(`  identity: ${users.length} users (password: ${DEMO_PASSWORD})`);
}
