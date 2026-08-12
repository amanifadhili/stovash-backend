import { EmailNotificationProvider } from '../../providers/email-notification.provider.js';

/**
 * Welcome email handler for the `tenant.created` event (TenantCreated),
 * i.e. the moment a new tenant is registered (CreateTenant flow).
 */
export const tenantCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    const email = payload?.email || payload?.adminEmail;
    if (!email) {
      console.error(`TenantCreated event for "${aggregateId}" has no email payload; skipping welcome email`);
      return;
    }

    const fullName = [payload?.firstName, payload?.lastName].filter(Boolean).join(' ') || email;

    const provider = new EmailNotificationProvider();
    await provider.send({
      to: email,
      subject: `Welcome to ${process.env.APP_NAME || 'Electronic Shop'}, ${payload?.name || 'new tenant'}!`,
      template: 'welcome',
      data: {
        tenantName: payload?.name,
        adminName: fullName,
        firstName: payload?.firstName,
        lastName: payload?.lastName,
        email,
        role: 'ADMIN',
      },
    });

    console.log(`Welcome email sent for registered tenant ${payload?.name} (${email}) (tenantId: ${aggregateId}, correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error sending welcome email for tenant ${payload?.email}:`, error);
    throw error;
  }
};
