import { IEvent } from '@electronic-shop/types';

/**
 * Event handler function type
 */
export type EventHandler<T = any> = (event: IEvent<T>) => Promise<void> | void;

/**
 * Event subscription configuration
 */
export interface EventSubscription {
  eventType: string;
  handler: EventHandler;
  queueName?: string;
  durable?: boolean;
  autoAck?: boolean;
}

/**
 * Event publisher configuration
 */
export interface EventPublisherConfig {
  exchangeName: string;
  exchangeType?: 'direct' | 'topic' | 'fanout' | 'headers';
  durable?: boolean;
}

/**
 * Event consumer configuration
 */
export interface EventConsumerConfig {
  queueName: string;
  exchangeName: string;
  routingKey?: string;
  durable?: boolean;
  exclusive?: boolean;
  autoDelete?: boolean;
  retryAttempts?: number;
  retryDelay?: number;
  deadLetterQueue?: string;
  idempotencyEnabled?: boolean;
}

/**
 * Event bus configuration
 */
export interface EventBusConfig {
  url: string;
  exchangeName: string;
  queuePrefix: string;
  reconnectInterval?: number;
  heartbeat?: number;
  retryAttempts?: number;
  retryDelay?: number;
  deadLetterExchange?: string;
  idempotencyEnabled?: boolean;
}
