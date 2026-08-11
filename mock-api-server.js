const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const JWT_SECRET = 'dev-secret-key';
const prisma = new PrismaClient({
  datasources: { db: { url: 'postgresql://postgres:postgres@localhost:5432/electronic_shop' } }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api', async (req, res) => {
  const { command, payload, traceId } = req.body || {};
  
  if (!command) {
    return res.status(400).json({ status: 'error', message: 'Missing command' });
  }

  try {
    if (command === 'LoginUser') {
      const { email, password } = payload;
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (!user) {
        return res.status(401).json({ status: 'error', message: 'Invalid credentials', errorCode: 'INVALID_CREDENTIALS' });
      }
      
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.status(401).json({ status: 'error', message: 'Invalid credentials', errorCode: 'INVALID_CREDENTIALS' });
      }
      
      const token = jwt.sign(
        { sub: user.id, email: user.email, role: user.role, tenantId: user.tenantId },
        JWT_SECRET,
        { expiresIn: '1d' }
      );
      
      return res.json({
        status: 'success',
        traceId,
        data: {
          accessToken: token,
          user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, tenantId: user.tenantId }
        }
      });
    }

    if (command === 'CreateTenant') {
      const { name, adminEmail, adminPassword } = payload;
      const tenant = await prisma.tenant.create({
        data: { id: require('crypto').randomUUID(), name, status: 'ACTIVE' }
      });
      return res.json({ status: 'success', traceId, data: { id: tenant.id, name: tenant.name } });
    }

    // Generic mock responses for other commands
    return res.json({
      status: 'success',
      traceId,
      data: { message: `Command ${command} executed`, mock: true }
    });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      status: 'error',
      traceId,
      message: error.message || 'Internal error',
      errorCode: 'INTERNAL_ERROR'
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Mock API Server running on port ${PORT}`);
});
