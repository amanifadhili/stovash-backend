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
  private processedEvents: Set<string> = new Set();
  private retryCount: Map<string, number> = new Map();

  constructor(config: EventConsumerConfig) {
    this.config = {
      durable: true,
      exclusive: false,
      autoDelete: false,
      retryAttempts: 3,
      retryDelay: 1000,
      idempotencyEnabled: true,
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
      
      // Assert dead letter queue if configured
      if (this.config.deadLetterQueue) {
        await this.channel.assertQueue(
          this.config.deadLetterQueue,
          { durable: true }
        );
      }

      // Assert queue with dead letter exchange if configured
      const queueArgs: any = {
        durable: this.config.durable,
        exclusive: this.config.exclusive,
        autoDelete: this.config.autoDelete
      };

      if (this.config.deadLetterQueue) {
        queueArgs['x-dead-letter-exchange'] = '';
        queueArgs['x-dead-letter-routing-key'] = this.config.deadLetterQueue;
      }

      await this.channel.assertQueue(
        this.config.queueName,
        queueArgs
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
   * Generate idempotency key for event
   */
  private getIdempotencyKey(event: IEvent): string {
    return `${event.eventType}-${event.eventId}`;
  }

  /**
   * Check if event has already been processed (idempotency)
   */
  private isEventProcessed(event: IEvent): boolean {
    if (!this.config.idempotencyEnabled) {
      return false;
    }
    const key = this.getIdempotencyKey(event);
    return this.processedEvents.has(key);
  }

  /**
   * Mark event as processed
   */
  private markEventProcessed(event: IEvent): void {
    if (!this.config.idempotencyEnabled) {
      return;
    }
    const key = this.getIdempotencyKey(event);
    this.processedEvents.add(key);
    
    // Clean up old entries periodically (keep last 10000)
    if (this.processedEvents.size > 10000) {
      const entries = Array.from(this.processedEvents);
      this.processedEvents = new Set(entries.slice(5000));
    }
  }

  /**
   * Execute handler with retry logic
   */
  private async executeHandlerWithRetry(handler: EventHandler, event: IEvent): Promise<void> {
    const key = this.getIdempotencyKey(event);
    const currentRetry = this.retryCount.get(key) || 0;
    const maxRetries = this.config.retryAttempts || 3;

    try {
      await handler(event);
      // Success - reset retry count
      this.retryCount.delete(key);
    } catch (error) {
      if (currentRetry < maxRetries) {
        this.retryCount.set(key, currentRetry + 1);
        const delay = this.config.retryDelay || 1000;
        console.error(`Handler failed for event ${event.eventType}, retry ${currentRetry + 1}/${maxRetries} in ${delay}ms:`, error);
        
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, delay));
        
        // Retry
        await this.executeHandlerWithRetry(handler, event);
      } else {
        // Max retries exceeded
        this.retryCount.delete(key);
        throw error;
      }
    }
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

            // Idempotency check
            if (this.isEventProcessed(event)) {
              console.log(`Event ${event.eventId} already processed, skipping`);
              if (this.channel) {
                this.channel.ack(message);
              }
              return;
            }

            // Get handlers for this event type
            const handlers = this.handlers.get(event.eventType) || [];

            // Execute all handlers with retry logic
            for (const handler of handlers) {
              try {
                await this.executeHandlerWithRetry(handler, event);
              } catch (error: any) {
                console.error(`Handler failed for event ${event.eventType} after retries:`, error);
                // Send to dead letter queue if configured
                if (this.config.deadLetterQueue && this.channel) {
                  await this.channel.sendToQueue(
                    this.config.deadLetterQueue,
                    Buffer.from(JSON.stringify({
                      event,
                      error: error?.message || 'Unknown error',
                      timestamp: new Date().toISOString()
                    })),
                    { persistent: true }
                  );
                }
                // Continue with other handlers even if one fails
              }
            }

            // Mark event as processed
            this.markEventProcessed(event);

            // Acknowledge message
            if (this.channel) {
              this.channel.ack(message);
            }
          } catch (error) {
            console.error('Failed to process message:', error);
            // Reject message and don't requeue (send to DLQ if configured)
            if (this.channel) {
              this.channel.nack(message, false, false);
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
      this.processedEvents.clear();
      this.retryCount.clear();
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
