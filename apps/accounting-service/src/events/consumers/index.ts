import { saleCreatedConsumer } from './sale-created.consumer.js';
import { purchaseCreatedConsumer } from './purchase-created.consumer.js';

export const EventConsumers = [
  saleCreatedConsumer,
  purchaseCreatedConsumer,
];
