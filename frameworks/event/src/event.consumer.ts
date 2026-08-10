import amqp from 'amqplib';
import { IEvent } from '@electronic-shop/types';
import { EventHandler, EventConsumerConfig } from './event.types.js';

/**
 * Event consumer for consuming events from RabbitMQ
 */
export class EventConsumer {
  private connection: any = null;
  private channel: any = null;
  private config: EventConsumerConfig;
  private handlers: Map<string, EventHandler[]> = new Map();

  constructor(config: EventConsumerConfig) {
    this.config = {
      durable: true,
      exclusive: false,
      autoDelete: false,
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
      
      if (!this.channel) {
        throw new Error('Failed to create channel');
      }
      
      // Assert queue
      await this.channel.assertQueue(
        this.config.queueName,
        {
          durable: this.config.durable,
          exclusive: this.config.exclusive,
          autoDelete: this.config.autoDelete
        }
      );

      // Bind queue to exchange
      if (this.config.routingKey) {
        await this.channel.bindQueue(
          this.config.queueName,
          this.config.exchangeName,
          this.config.routingKey
        );
      }

      // Set prefetch
      await this.channel.prefetch(1);

      console.log(`Event consumer connected to queue: ${this.config.queueName}`);
    } catch (error) {
      console.error('Failed to connect event consumer:', error);
      throw error;
    }
  }

  /**
   * Register an event handler
   */
  registerHandler(eventType: string, handler: EventHandler): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)!.push(handler);
  }

  /**
   * Start consuming events
   */
  async startConsuming(): Promise<void> {
    if (!this.channel) {
      throw new Error('Event consumer not connected');
    }

    try {
      await this.channel.consume(
        this.config.queueName,
        async (message: any) => {
          if (!message) {
            console.warn('Received null message');
            return;
          }

          try {
            const content = message.content.toString();
            const event: IEvent = JSON.parse(content);

            console.log(`Received event: ${event.eventType} (${event.eventId})`);

            // Get handlers for this event type
            const handlers = this.handlers.get(event.eventType) || [];

            // Execute all handlers
            for (const handler of handlers) {
              try {
                await handler(event);
              } catch (error) {
                console.error(`Handler failed for event ${event.eventType}:`, error);
                // Continue with other handlers even if one fails
              }
            }

            // Acknowledge message
            if (this.channel) {
              this.channel.ack(message);
            }
          } catch (error) {
            console.error('Failed to process message:', error);
            // Reject message and requeue
            if (this.channel) {
              this.channel.nack(message, false, true);
            }
          }
        }
      );

      console.log(`Event consumer started consuming from queue: ${this.config.queueName}`);
    } catch (error) {
      console.error('Failed to start consuming:', error);
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
      console.log('Event consumer closed');
    } catch (error) {
      console.error('Error closing event consumer:', error);
    }
  }

  /**
   * Check if connected
   */
  isConnected(): boolean {
    return this.connection !== null && this.channel !== null;
  }
}
