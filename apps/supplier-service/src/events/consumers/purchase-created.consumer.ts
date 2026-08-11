import { prisma } from '../../database/client.js';

export const purchaseCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload.supplierId) {
      console.log(`PurchaseCreated event has no supplierId, skipping ledger update`);
      return;
    }

    const supplier = await prisma.supplier.findUnique({
      where: { id: payload.supplierId }
    });

    if (!supplier) {
      console.log(`Supplier ${payload.supplierId} not found, skipping ledger update`);
      return;
    }

    // Update supplier outstanding balance (AP increases)
    await prisma.supplier.update({
      where: { id: payload.supplierId },
      data: { balance: { increment: payload.totalCost || payload.totalAmount || 0 } }
    });

    // Record a statement entry for the current period
    const now = new Date();
    const period = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;

    await prisma.supplierStatement.upsert({
      where: {
        supplierId_period: {
          supplierId: payload.supplierId,
          period
        }
      },
      create: {
        supplierId: payload.supplierId,
        period,
        balance: payload.totalCost || payload.totalAmount || 0
      },
      update: {
        balance: { increment: payload.totalCost || payload.totalAmount || 0 }
      }
    });

    console.log(`PurchaseCreated event processed for supplier ${payload.supplierId}: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing PurchaseCreated event for supplier:`, error);
    throw error;
  }
};
