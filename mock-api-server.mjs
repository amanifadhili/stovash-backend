import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const JWT_SECRET = 'dev-secret-key';
const prisma = new PrismaClient({
  datasources: { db: { url: 'postgresql://postgres:postgres@localhost:5432/electronic_shop' } }
});

// In-memory email verification store (dev only)
const emailVerificationTokens = new Map();

// SMTP Transporter configuration
const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'test@example.com',
    pass: process.env.SMTP_PASS || 'testpass',
  },
};

let transporter = null;
let emailLog = [];

async function initTransporter() {
  try {
    transporter = nodemailer.createTransport(smtpConfig);
    // Verify connection
    await transporter.verify();
    console.log('SMTP transporter connected successfully');
  } catch (err) {
    console.warn('SMTP connection failed (emails will be logged only):', err.message);
    transporter = null;
  }
}

function sendVerificationEmail(email, token) {
  const verificationUrl = `http://localhost:3000/auth/verify-email?token=${token}`;
  
  const mailOptions = {
    from: '"Electronic Shop SaaS" <noreply@electronicshop.com>',
    to: email,
    subject: 'Verify Your Email Address',
    html: `
      <h2>Welcome to Electronic Shop SaaS!</h2>
      <p>Please verify your email address by clicking the link below:</p>
      <p><a href="${verificationUrl}" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Verify Your Email</a></p>
      <p>Or copy this verification code: <strong>${token.substring(0, 8).toUpperCase()}</strong></p>
      <p>This link will expire in 24 hours.</p>
      <p>Thank you,</p>
      <p>The Electronic Shop Team</p>
    `,
  };

  emailLog.push({ to: email, subject: mailOptions.subject, sentAt: new Date(), token });

  if (transporter) {
    return transporter.sendMail(mailOptions).catch(err => {
      console.error('Failed to send email:', err);
      return null;
    });
  } else {
    console.log(`[Dev Email] To: ${email}, Subject: ${mailOptions.subject}`);
    console.log(`[Dev Email] Verification URL: ${verificationUrl}`);
    return Promise.resolve(null);
  }
}

// Initialize SMTP on startup
initTransporter();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api', async (req, res) => {
  const { command, payload, traceId } = req.body || {};
  
  if (!command) {
    return res.status(400).json({ status: 'error', message: 'Missing command' });
  }

  // Skip auth for LoginUser
  let token = null;
  if (command !== 'LoginUser') {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split('Bearer ')[1];
    }
  }
  
  // Mock: always succeed, ignore token validation
  console.log(`[API] Command: ${command}, hasToken: ${!!token}`);
  
  try {
    if (command === 'LoginUser') {
      const { email, password } = payload;
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (!user) {
        return res.status(401).json({ status: 'error', message: 'Invalid credentials', errorCode: 'INVALID_CREDENTIALS' });
      }
      
      // Check if email is verified
      if (user.status === 'PENDING_VERIFICATION') {
        return res.status(403).json({ 
          status: 'error', 
          message: 'Email not verified. Please verify your email before logging in.', 
          errorCode: 'EMAIL_NOT_VERIFIED' 
        });
      }
      
      if (user.status !== 'ACTIVE') {
        return res.status(403).json({ status: 'error', message: 'User account is not active', errorCode: 'FORBIDDEN' });
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
        traceId: traceId || uuidv4(),
        data: {
          accessToken: token,
          user: { 
            id: user.id, 
            email: user.email, 
            name: `${user.firstName} ${user.lastName}`,
            role: user.role, 
            permissions: user.role === 'ADMIN' ? ['admin:*'] : ['staff:*'],
            tenantId: user.tenantId,
            shopId: 'shop-1'
          },
          tenant: { id: 'tenant-1', name: 'Main Tenant', code: 'TEN001', status: 'ACTIVE' },
          shop: { id: 'shop-1', name: 'Main Shop', tenantId: 'tenant-1', code: 'SHOP1' },
          workPeriod: { id: 'workperiod-1', tenantId: 'tenant-1', shopId: 'shop-1', status: 'OPEN' }
        }
      });
    }

    if (command === 'CreateTenant') {
      const { name, adminEmail, adminPassword, firstName, lastName } = payload;
      const tenant = await prisma.tenant.create({
        data: { id: uuidv4(), name, status: 'ACTIVE' }
      });
      // Create admin user for the tenant - require email verification
      const hashedPassword = await bcrypt.hash(adminPassword || 'password123', 10);
      const user = await prisma.user.create({
        data: {
          id: uuidv4(),
          tenantId: tenant.id,
          email: adminEmail,
          password: hashedPassword,
          firstName: firstName || 'Admin',
          lastName: lastName || 'User',
          role: 'ADMIN',
          status: 'PENDING_VERIFICATION',
        }
      });
      
      // Generate verification token and send email
      const verificationToken = uuidv4();
      emailVerificationTokens.set(verificationToken, {
        userId: user.id,
        email: user.email,
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      });
      await sendVerificationEmail(user.email, verificationToken);
      
      return res.json({ 
        status: 'success', 
        traceId: traceId || uuidv4(), 
        data: { 
          id: tenant.id, 
          name: tenant.name,
          user: { id: user.id, email: user.email, name: `${user.firstName} ${user.lastName}`, role: user.role, status: 'PENDING_VERIFICATION' }
        } 
      });
    }

    // Verify email address
    if (command === 'VerifyEmail') {
      const { token } = payload;
      const verification = emailVerificationTokens.get(token);
      
      if (!verification) {
        return res.status(400).json({
          status: 'error',
          message: 'Invalid or expired verification token',
          errorCode: 'INVALID_TOKEN'
        });
      }
      
      if (new Date() > verification.expiresAt) {
        emailVerificationTokens.delete(token);
        return res.status(400).json({
          status: 'error',
          message: 'Verification token has expired. Please request a new one.',
          errorCode: 'TOKEN_EXPIRED'
        });
      }
      
      // Update user status to ACTIVE
      await prisma.user.update({
        where: { id: verification.userId },
        data: { status: 'ACTIVE' }
      });
      
      emailVerificationTokens.delete(token);
      
      return res.json({
        status: 'success',
        traceId: traceId || uuidv4(),
        data: { message: 'Email verified successfully. You can now log in.' }
      });
    }

    // Resend verification email
    if (command === 'ResendVerificationEmail') {
      const { email } = payload;
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: 'User not found',
          errorCode: 'USER_NOT_FOUND'
        });
      }
      
      if (user.status === 'ACTIVE') {
        return res.json({
          status: 'success',
          traceId: traceId || uuidv4(),
          data: { message: 'Email already verified' }
        });
      }
      
      // Generate new verification token
      const verificationToken = uuidv4();
      emailVerificationTokens.set(verificationToken, {
        userId: user.id,
        email: user.email,
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });
      
      await sendVerificationEmail(user.email, verificationToken);
      
      return res.json({
        status: 'success',
        traceId: traceId || uuidv4(),
        data: { message: 'Verification email sent. Please check your inbox.' }
      });
    }

    // Generic mock responses for other commands
    const data = {
      success: true,
      command,
      message: `Command ${command} executed`,
    };
    
    // Return richer mock data for specific commands
    if (command === 'GetTrialBalance') {
      return res.json({
        status: 'success',
        traceId: traceId || uuidv4(),
        data: {
          trialBalance: [
            { accountCode: '1000', accountName: 'Cash', debit: 0, credit: 0, balance: 5000000 },
            { accountCode: '4000', accountName: 'Sales Revenue', debit: 0, credit: 1500000, balance: -1500000 },
            { accountCode: '5000', accountName: 'Cost of Goods Sold', debit: 800000, credit: 0, balance: 800000 },
          ]
        }
      });
    }
    
    if (command === 'GetIncomeStatement') {
      return res.json({
        status: 'success',
        traceId: traceId || uuidv4(),
        data: {
          revenue: 2500000,
          cogs: 1200000,
          grossProfit: 1300000,
          operatingExpenses: 500000,
          netIncome: 800000
        }
      });
    }
    
    if (command === 'GetBalanceSheet') {
      return res.json({
        status: 'success',
        traceId: traceId || uuidv4(),
        data: {
          assets: { current: 5000000, fixed: 2000000, total: 7000000 },
          liabilities: { current: 1000000, longTerm: 500000, total: 1500000 },
          equity: 5500000,
          totalAssets: 7000000,
          totalLiabilitiesAndEquity: 7000000
        }
      });
    }
    
    return res.json({ status: 'success', traceId: traceId || uuidv4(), data });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      status: 'error',
      traceId: traceId || uuidv4(),
      message: error.message || 'Internal error',
      errorCode: 'INTERNAL_ERROR'
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Mock API Server running on port ${PORT}`);
});
