import { EmailNotificationProvider } from '../../providers/email-notification.provider.js';

export const passwordResetRequestedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    const email = payload?.email;
    const resetUrl = payload?.resetUrl;

    if (!email || !resetUrl) {
      console.error(`PasswordResetRequested event for "${aggregateId}" is missing email or resetUrl`);
      return;
    }

    const fullName = [payload?.firstName, payload?.lastName].filter(Boolean).join(' ');

    const provider = new EmailNotificationProvider();
    await provider.send({
      to: email,
      subject: `Reset your ${process.env.APP_NAME || 'Electronic Shop'} password`,
      template: 'password-reset',
      data: {
        resetUrl,
        firstName: payload?.firstName,
        lastName: payload?.lastName,
        fullName: fullName || email,
        expiresInMinutes: payload?.expiresInMinutes,
      },
    });

    console.log(
      `Password reset email sent for ${email} (userId: ${aggregateId}, correlationId: ${correlationId})`,
    );
  } catch (error) {
    console.error(`Error sending password reset email for ${payload?.email}:`, error);
    throw error;
  }
};
