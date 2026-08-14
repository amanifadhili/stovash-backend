import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { saleCreatedConsumer } from './consumers/sale-created.consumer.js';
import { purchaseCreatedConsumer } from './consumers/purchase-created.consumer.js';
import { salePaymentRecordedConsumer } from './consumers/sale-payment-recorded.consumer.js';
import { purchasePaymentRecordedConsumer } from './consumers/purchase-payment-recorded.consumer.js';
import { inventoryIncidentRecordedConsumer } from './consumers/inventory-incident-recorded.consumer.js';
import { treasuryTransferCreatedConsumer } from './consumers/treasury-transfer-created.consumer.js';
import { treasuryLoanRecordedConsumer } from './consumers/treasury-loan-recorded.consumer.js';
import { treasuryLoanRepaidConsumer } from './consumers/treasury-loan-repaid.consumer.js';
import { treasuryDepositRecordedConsumer } from './consumers/treasury-deposit-recorded.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {}

  async onModuleInit() {
    try {
      // Create consumers BEFORE connecting
      this.eventBus.createConsumer('accounting-sales', 'sale.created');
      this.eventBus.createConsumer('accounting-purchases', 'purchase.created');
      this.eventBus.createConsumer('accounting-sale-payments', 'sale-payment.recorded');
      this.eventBus.createConsumer('accounting-purchase-payments', 'purchase-payment.recorded');
      this.eventBus.createConsumer('accounting-inventory-incidents', 'inventory.incident.recorded');
      this.eventBus.createConsumer('accounting-treasury-transfers', 'treasury.transfer.created');
      this.eventBus.createConsumer('accounting-treasury-loans', 'treasury.loan.recorded');
      this.eventBus.createConsumer('accounting-treasury-loan-repayments', 'treasury.loan.repaid');
      this.eventBus.createConsumer('accounting-treasury-deposits', 'treasury.deposit.recorded');

      this.eventBus.registerHandler('accounting-sales', 'SaleCreated', saleCreatedConsumer);
      this.eventBus.registerHandler('accounting-purchases', 'PurchaseCreated', purchaseCreatedConsumer);
      this.eventBus.registerHandler('accounting-sale-payments', 'SalePaymentRecorded', salePaymentRecordedConsumer);
      this.eventBus.registerHandler('accounting-purchase-payments', 'PurchasePaymentRecorded', purchasePaymentRecordedConsumer);
      this.eventBus.registerHandler('accounting-inventory-incidents', 'InventoryIncidentRecorded', inventoryIncidentRecordedConsumer);
      this.eventBus.registerHandler('accounting-treasury-transfers', 'TreasuryTransferCreated', treasuryTransferCreatedConsumer);
      this.eventBus.registerHandler('accounting-treasury-loans', 'TreasuryLoanRecorded', treasuryLoanRecordedConsumer);
      this.eventBus.registerHandler('accounting-treasury-loan-repayments', 'TreasuryLoanRepaymentRecorded', treasuryLoanRepaidConsumer);
      this.eventBus.registerHandler('accounting-treasury-deposits', 'TreasuryDepositRecorded', treasuryDepositRecordedConsumer);

      // Now connect (will connect publisher + all consumers)
      await this.eventBus.connect();

      await this.eventBus.startAllConsumers();
      console.log('Event consumers registered and started for Accounting Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}