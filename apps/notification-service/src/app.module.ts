import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NotificationController } from './notification.controller.js';
import { NotificationService } from './notification.service.js';
import { EmailNotificationProvider } from './providers/email-notification.provider.js';
import { SmsNotificationProvider } from './providers/sms-notification.provider.js';
import { PushNotificationProvider } from './providers/push-notification.provider.js';
import { WebhookNotificationProvider } from './providers/webhook-notification.provider.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    EmailNotificationProvider,
    SmsNotificationProvider,
    PushNotificationProvider,
    WebhookNotificationProvider,
    ...CommandHandlers,
  ],
})
export class AppModule {}
