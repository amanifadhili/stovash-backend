import { EmailNotificationProvider } from '../../providers/email-notification.provider.js';

/**
 * Sends a welcome/credentials email when a new staff user is created
 * via the admin invite flow (CreateUser → CreateStaff).
 */
export const userCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    const email = payload?.email;
    if (!email) {
      console.error(`UserCreated event for "${aggregateId}" has no email payload; skipping invitation email`);
      return;
    }

    const password = payload?.password;
    if (!password) {
      console.error(`UserCreated event for "${aggregateId}" has no password payload; skipping invitation email`);
      return;
    }

    const firstName = payload?.firstName || '';
    const role = payload?.role || 'STAFF';
    const loginUrl = process.env.LOGIN_URL || `${process.env.APP_URL || 'http://localhost:3000'}/auth/login`;

    const provider = new EmailNotificationProvider();
    await provider.send({
      to: email,
      subject: `Your ${process.env.APP_NAME || 'Electronic Shop'} account is ready`,
      template: 'staff-invitation',
      data: {
        firstName,
        email,
        password,
        role,
        loginUrl,
      },
    });

    console.log(`Staff invitation email sent to ${email} (userId: ${aggregateId}, role: ${role}, correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error sending staff invitation email for ${payload?.email}:`, error);
    throw error;
  }
};
