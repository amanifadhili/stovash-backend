import amqp from 'amqplib';
import { v4 as uuidv4 } from 'uuid';
import { IEvent } from '@electronic-shop/types';
import { EventPublisherConfig } from './event.types.js';

/**
 * Event publisher for publishing events to RabbitMQ
 */
export class EventPublisher {
  private connection: any = null;
  private channel: any = null;
  private config: EventPublisherConfig;

  constructor(config: EventPublisherConfig) {
    this.config = {
      exchangeType: 'topic',
      durable: true,
      ...config
    };
  }

  /**
   * Connect to RabbitMQ
   */
  async connect(url: string): Promise<void> {
    try {
      this.connection = await amqp.connect(url);
      this.channel = await this.connection.createChannel();
      
      // Assert exchange
      await this.channel.assertExchange(
        this.config.exchangeName,
        this.config.exchangeType!,
        { durable: this.config.durable }
      );

      console.log(`Event publisher connected to exchange: ${this.config.exchangeName}`);
    } catch (error) {
      console.error('Failed to connect event publisher:', error);
      throw error;
    }
  }

  /**
   * Publish an event
   */
  async publish<T>(event: IEvent<T>, routingKey: string): Promise<boolean> {
    if (!this.channel) {
      throw new Error('Event publisher not connected');
    }

    try {
      // Ensure event has required fields
      const eventToPublish: IEvent<T> = {
        eventId: event.eventId || uuidv4(),
        eventType: event.eventType,
        eventVersion: event.eventVersion || '1.0',
        tenantId: event.tenantId,
        shopId: event.shopId,
        workPeriodId: event.workPeriodId,
        traceId: event.traceId || uuidv4(),
        createdAt: event.createdAt || new Date(),
        createdBy: event.createdBy,
        payload: event.payload
      };

      const published = this.channel.publish(
        this.config.exchangeName,
        routingKey,
        Buffer.from(JSON.stringify(eventToPublish)),
        {
          persistent: true,
          contentType: 'application/json',
          messageId: eventToPublish.eventId,
          timestamp: Math.floor(Date.now() / 1000)
        }
      );

      if (!published) {
        console.warn(`Event ${eventToPublish.eventType} not published (buffer full)`);
      }

      return published;
    } catch (error) {
      console.error(`Failed to publish event ${event.eventType}:`, error);
      throw error;
    }
  }

  /**
   * Close connection
   */
  async close(): Promise<void> {
    try {
      if (this.channel) {
        await this.channel.close();
        this.channel = null;
      }
      if (this.connection) {
        await this.connection.close();
        this.connection = null;
      }
      console.log('Event publisher closed');
    } catch (error) {
      console.error('Error closing event publisher:', error);
    }
  }

  /**
   * Check if connected
   */
  isConnected(): boolean {
    return this.connection !== null && this.channel !== null;
  }
}
