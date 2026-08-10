import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WebhookNotificationProvider {
  async send(data: { url: string; payload: any }) {
    try {
      const response = await axios.post(data.url, data.payload, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 5000,
      });

      console.log('Webhook sent:', response.status);
      return { success: true, status: response.status };
    } catch (error) {
      console.error('Error sending webhook:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
}
