import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailNotificationProvider {
  private transporter: nodemailer.Transporter;
  public from: string;

  constructor() {
    // Initialize email transporter with environment variables
    const encryption = process.env.MAIL_ENCRYPTION || process.env.SMTP_ENCRYPTION || 'tls';
    const host = process.env.MAIL_HOST || process.env.SMTP_HOST || 'localhost';
    const port = parseInt(process.env.MAIL_PORT || process.env.SMTP_PORT || '587', 10);
    const user = process.env.MAIL_USERNAME || process.env.SMTP_USER;
    const pass = process.env.MAIL_PASSWORD || process.env.SMTP_PASS;

    const fromAddress = process.env.MAIL_FROM_ADDRESS || process.env.SMTP_FROM || 'noreply@electronic-shop.com';
    const fromName = process.env.MAIL_FROM_NAME || process.env.MAIL_FROM_NAME || 'Electronic Shop';
    const from = fromName ? `"${fromName}" <${fromAddress}>` : fromAddress;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure: encryption === 'ssl', // true for 465 (implicit TLS), false for 587 STARTTLS
      ignoreTLS: encryption === 'none',
      auth: { user, pass },
    });
    this.from = from;
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
        from: this.from,
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
      'welcome': (d) => `
        <h2>Welcome${d.firstName ? ', ' + d.firstName : ''}${d.lastName ? ' ' + d.lastName : ''}!</h2>
        <p>Thank you for registering on ${process.env.APP_NAME || 'Electronic Shop'}.</p>
        ${d.role ? `<p><strong>Your account role:</strong> ${d.role}</p>` : ''}
        <p>Your account has been created successfully. You can now sign in and start using the platform.</p>
      `,
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
