import { prisma } from '../database/client.js';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

describe('Identity service (login + JWT verify)', () => {
  const tenantId = 'tenant-identity-test';
  const email = 'identity-test@stovash.local';
  const password = 'TestPass123!';
  let userId: string;

  beforeAll(async () => {
    process.env.JWT_SECRET = 'test-jwt-secret';
    await prisma.user.deleteMany({ where: { email } });
    const hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        tenantId,
        email,
        password: hash,
        firstName: 'Test',
        lastName: 'User',
        role: 'ADMIN',
        status: 'ACTIVE',
      },
    });
    userId = user.id;
  });

  afterAll(async () => {
    await prisma.user.deleteMany({ where: { email } });
    await prisma.$disconnect();
  });

  it('stores user with hashed password (login precondition)', async () => {
    const user = await prisma.user.findUnique({ where: { email } });
    expect(user).toBeTruthy();
    expect(await bcrypt.compare(password, user!.password)).toBe(true);
  });

  it('issues and verifies JWT with tenantId claim', async () => {
    const token = jwt.sign(
      { sub: userId, email, role: 'ADMIN', tenantId },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' },
    );
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    expect(decoded.tenantId).toBe(tenantId);
    expect(decoded.sub).toBe(userId);
  });

  it('rejects expired JWT', () => {
    const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET!, { expiresIn: '-1s' });
    expect(() => jwt.verify(token, process.env.JWT_SECRET!)).toThrow();
  });

  it('rejects invalid credentials at bcrypt layer', async () => {
    const user = await prisma.user.findUnique({ where: { email } });
    expect(await bcrypt.compare('wrong-password', user!.password)).toBe(false);
  });
});
