import { EventPublisher } from './event.publisher.js';
import { EventConsumer } from './event.consumer.js';
import { EventBusConfig, EventHandler } from './event.types.js';

/**
 * Event bus for managing event publishing and consuming
 */
export class EventBus {
  private publisher: EventPublisher;
  private consumers: Map<string, EventConsumer> = new Map();
  private config: EventBusConfig;

  constructor(config: EventBusConfig) {
    this.config = config;
    this.publisher = new EventPublisher({
      exchangeName: config.exchangeName,
      exchangeType: 'topic',
      durable: true
    });
  }

  /**
   * Connect to RabbitMQ
   */
  async connect(): Promise<void> {
    try {
      // Connect publisher
      await this.publisher.connect(this.config.url);
      
      // Connect all consumers
      for (const consumer of this.consumers.values()) {
        await consumer.connect(this.config.url);
      }

      console.log('Event bus connected successfully');
    } catch (error) {
      console.error('Failed to connect event bus:', error);
      throw error;
    }
  }

  /**
   * Create and register a consumer
   */
  createConsumer(
    queueName: string,
    routingKey?: string
  ): EventConsumer {
    const consumer = new EventConsumer({
      queueName,
      exchangeName: this.config.exchangeName,
      routingKey,
      durable: true,
      exclusive: false,
      autoDelete: false
    });

    this.consumers.set(queueName, consumer);
    return consumer;
  }

  /**
   * Register an event handler for a specific consumer
   */
  registerHandler(
    queueName: string,
    eventType: string,
    handler: EventHandler
  ): void {
    const consumer = this.consumers.get(queueName);
    if (!consumer) {
      throw new Error(`Consumer ${queueName} not found`);
    }
    consumer.registerHandler(eventType, handler);
  }

  /**
   * Start consuming events for a specific consumer
   */
  async startConsuming(queueName: string): Promise<void> {
    const consumer = this.consumers.get(queueName);
    if (!consumer) {
      throw new Error(`Consumer ${queueName} not found`);
    }
    await consumer.startConsuming();
  }

  /**
   * Start consuming events for all consumers
   */
  async startAllConsumers(): Promise<void> {
    for (const [queueName, consumer] of this.consumers) {
      try {
        await consumer.startConsuming();
        console.log(`Started consuming from queue: ${queueName}`);
      } catch (error) {
        console.error(`Failed to start consumer ${queueName}:`, error);
      }
    }
  }

  /**
   * Publish an event
   */
  async publish<T>(event: any, routingKey: string): Promise<boolean> {
    return await this.publisher.publish(event, routingKey);
  }

  /**
   * Close all connections
   */
  async close(): Promise<void> {
    try {
      await this.publisher.close();
      
      for (const consumer of this.consumers.values()) {
        await consumer.close();
      }
      
      this.consumers.clear();
      console.log('Event bus closed successfully');
    } catch (error) {
      console.error('Error closing event bus:', error);
    }
  }

  /**
   * Check if connected
   */
  isConnected(): boolean {
    return this.publisher.isConnected();
  }
}
