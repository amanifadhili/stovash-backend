/**
 * Mock EventBus for development without RabbitMQ.
 * Silently swallows events instead of throwing.
 */
export class MockEventBus {
  async publish<T>(event: any, routingKey: string): Promise<boolean> {
    console.log(`[MockEventBus] Event published: ${event.eventType} (${routingKey})`);
    return true;
  }
  async connect(): Promise<void> {}
  async close(): Promise<void> {}
  isConnected(): boolean { return true; }
  createConsumer() {
    return {
      connect: async () => {},
      startConsuming: async () => {},
      close: async () => {},
      registerHandler: () => {},
    };
  }
  registerHandler(queueName: string, eventType: string, handler: (...args: any[]) => void) {
    console.log(`[MockEventBus] Registered handler for ${eventType} on queue ${queueName}`);
  }
  async startConsuming(): Promise<void> {}
  async startAllConsumers(): Promise<void> {}
}
