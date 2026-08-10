import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';

@Injectable()
export class SmsNotificationProvider {
  private client: twilio.Twilio;

  constructor() {
    // Initialize Twilio client with environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    if (accountSid && authToken) {
      this.client = twilio(accountSid, authToken);
    }
  }

  async send(data: { to: string; message: string }) {
    try {
      if (!this.client) {
        console.warn('Twilio client not configured, skipping SMS');
        return { success: false, error: 'Twilio not configured' };
      }

      const message = await this.client.messages.create({
        body: data.message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: data.to,
      });

      console.log('SMS sent:', message.sid);
      return { success: true, messageId: message.sid };
    } catch (error) {
      console.error('Error sending SMS:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
}
