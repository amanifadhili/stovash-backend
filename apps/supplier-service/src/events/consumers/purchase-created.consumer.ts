import { prisma } from '../../database/client.js';

export const purchaseCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;
  
  try {
    // Update supplier balance when purchase is created
    // Supplier is owed money (AP increases)
    
    if (!payload.supplierId) {
      console.log(`PurchaseCreated event has no supplierId, skipping ledger update`);
      return;
    }

    // Get or create supplier ledger
    let supplierLedger = await prisma.supplierLedger.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        supplierId: payload.supplierId
      }
    });

    if (!supplierLedger) {
      supplierLedger = await prisma.supplierLedger.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          supplierId: payload.supplierId,
          balance: 0
        }
      });
    }

    // Update supplier balance (increase AP)
    await prisma.supplierLedger.update({
      where: { id: supplierLedger.id },
      data: { balance: { increment: payload.totalCost } }
    });

    // Create ledger entry
    await prisma.ledgerEntry.create({
      data: {
        supplierLedgerId: supplierLedger.id,
        referenceId: aggregateId,
        referenceType: 'Purchase',
        debit: 0,
        credit: payload.totalCost,
        description: `Purchase ${aggregateId}`,
        balance: supplierLedger.balance + payload.totalCost
      }
    });

    console.log(`PurchaseCreated event processed for supplier ${payload.supplierId}: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing PurchaseCreated event for supplier:`, error);
    throw error;
  }
};
