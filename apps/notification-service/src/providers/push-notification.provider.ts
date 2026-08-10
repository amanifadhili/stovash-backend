import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class PushNotificationProvider {
  private app: admin.app.App;

  constructor() {
    // Initialize Firebase Admin SDK with environment variables
    try {
      const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
      if (serviceAccount) {
        const credentials = JSON.parse(serviceAccount);
        this.app = admin.initializeApp({
          credential: admin.credential.cert(credentials),
        });
      }
    } catch (error) {
      console.warn('Firebase Admin SDK not configured, skipping push notifications');
    }
  }

  async send(data: { to: string; title: string; body: string }) {
    try {
      if (!this.app) {
        console.warn('Firebase Admin not configured, skipping push notification');
        return { success: false, error: 'Firebase not configured' };
      }

      const message = {
        notification: {
          title: data.title,
          body: data.body,
        },
        token: data.to,
      };

      const response = await this.app.messaging().send(message);
      console.log('Push notification sent:', response);
      return { success: true, messageId: response };
    } catch (error) {
      console.error('Error sending push notification:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
}
