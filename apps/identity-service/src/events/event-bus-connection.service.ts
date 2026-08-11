import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@Injectable()
export class EventBusConnectionService implements OnModuleInit {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {}

  async onModuleInit() {
    try {
      await this.eventBus.connect();
      console.log('Event bus connected for Identity Service');
    } catch (error) {
      console.error('Failed to connect event bus:', error);
    }
  }
}
