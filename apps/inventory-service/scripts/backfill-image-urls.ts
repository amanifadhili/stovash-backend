import { PrismaClient as InventoryClient } from '../src/generated/prisma/index.js';
import { PrismaClient as PurchaseClient } from '../../purchase-service/src/generated/prisma/index.js';

async function backfill() {
  console.log('Starting backfill for imageUrls...');
  
  const inventoryClient = new InventoryClient();
  const purchaseClient = new PurchaseClient();

  try {
    // 1. Get all inventory items that don't have an imageUrl but have a serialNumber
    const items = await inventoryClient.inventoryItem.findMany({
      where: {
        imageUrl: null,
      },
    });

    console.log(`Found ${items.length} inventory items missing imageUrl.`);

    let updatedCount = 0;

    for (const item of items) {
      if (!item.serialNumber) continue;


      const actualReceivedItem = await purchaseClient.purchaseReceivedItem.findFirst({
        where: {
          serialNumber: item.serialNumber,
        },
      });

      if (actualReceivedItem && actualReceivedItem.images) {
        const images = actualReceivedItem.images as string[];
        if (Array.isArray(images) && images.length > 0) {
          const imageUrl = images[0];
          
          await inventoryClient.inventoryItem.update({
            where: { id: item.id },
            data: { imageUrl },
          });
          updatedCount++;
          console.log(`Updated inventory item ${item.serialNumber} with image.`);
        }
      }
    }

    console.log(`Successfully backfilled ${updatedCount} items.`);
  } catch (error) {
    console.error('Error during backfill:', error);
  } finally {
    await inventoryClient.$disconnect();
    await purchaseClient.$disconnect();
  }
}

backfill();
