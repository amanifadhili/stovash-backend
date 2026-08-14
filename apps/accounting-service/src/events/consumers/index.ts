import { saleCreatedConsumer } from './sale-created.consumer.js';
import { purchaseCreatedConsumer } from './purchase-created.consumer.js';
import { salePaymentRecordedConsumer } from './sale-payment-recorded.consumer.js';
import { purchasePaymentRecordedConsumer } from './purchase-payment-recorded.consumer.js';
import { inventoryIncidentRecordedConsumer } from './inventory-incident-recorded.consumer.js';

export const EventConsumers = [
  saleCreatedConsumer,
  purchaseCreatedConsumer,
  salePaymentRecordedConsumer,
  purchasePaymentRecordedConsumer,
  inventoryIncidentRecordedConsumer,
];
