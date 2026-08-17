import { Injectable, OnModuleInit, Logger } from '@nestjs/common';

/**
 * Phase 1 financial rebuild: do not consume payment-method.created.
 * Opening reconciliations must not be written while till balances are quarantined.
 */
@Injectable()
export class EventConsumerService implements OnModuleInit {
  private readonly logger = new Logger(EventConsumerService.name);

  async onModuleInit() {
    this.logger.warn(
      'Treasury event consumers are quarantined (FINANCIAL_REBUILD_IN_PROGRESS).',
    );
  }
}
