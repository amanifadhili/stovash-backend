import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailNotificationProvider {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Initialize email transporter with environment variables
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async send(data: {
    to: string;
    subject: string;
    template?: string;
    data?: any;
    html?: string;
    text?: string;
  }) {
    try {
      const mailOptions = {
        from: process.env.SMTP_FROM || 'noreply@electronic-shop.com',
        to: data.to,
        subject: data.subject,
        html: data.html || this.renderTemplate(data.template || 'default', data.data),
        text: data.text,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  private renderTemplate(template: string, data: any): string {
    // Simple template rendering - in production, use a proper template engine
    const templates: Record<string, (data: any) => string> = {
      'sale-confirmation': (d) => `
        <h2>Sale Confirmation</h2>
        <p>Thank you for your purchase!</p>
        <p><strong>Order #:</strong> ${d.salesOrderId}</p>
        <p><strong>Total Amount:</strong> $${d.totalAmount}</p>
      `,
      'purchase-order': (d) => `
        <h2>Purchase Order Created</h2>
        <p><strong>Order #:</strong> ${d.purchaseOrderId}</p>
        <p><strong>Total Cost:</strong> $${d.totalCost}</p>
      `,
      'work-period-closed': (d) => `
        <h2>Work Period Closed</h2>
        <p><strong>Period #:</strong> ${d.workPeriodId}</p>
        <p><strong>Total Sales:</strong> $${d.totalSales}</p>
      `,
      'low-stock-alert': (d) => `
        <h2>Low Stock Alert</h2>
        <p><strong>Product:</strong> ${d.productName}</p>
        <p><strong>Current Stock:</strong> ${d.currentStock}</p>
        <p><strong>Threshold:</strong> ${d.threshold}</p>
      `,
      'payment-received': (d) => `
        <h2>Payment Received</h2>
        <p><strong>Amount:</strong> $${d.amount}</p>
        <p><strong>Method:</strong> ${d.paymentMethod}</p>
      `,
      'loan-payment-reminder': (d) => `
        <h2>Loan Payment Reminder</h2>
        <p><strong>Order #:</strong> ${d.salesOrderId}</p>
        <p><strong>Due Date:</strong> ${d.dueDate}</p>
        <p><strong>Amount:</strong> $${d.amount}</p>
      `,
      'default': (d) => `<p>${JSON.stringify(d)}</p>`,
    };

    const renderer = templates[template] || templates['default'];
    return renderer(data);
  }
}
