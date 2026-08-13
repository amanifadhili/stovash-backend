import { PrismaClient as IdentityClient } from '../../identity-service/src/generated/prisma/index.js';
import { PrismaClient as TenantClient } from '../../tenant-service/src/generated/prisma/index.js';
import { PrismaClient as InventoryClient } from '../src/generated/prisma/index.js';
import { PrismaClient as PurchaseClient } from '../../purchase-service/src/generated/prisma/index.js';
import { v4 as uuidv4 } from 'uuid';

async function seed() {
  const identityClient = new IdentityClient();
  const tenantClient = new TenantClient();
  const inventoryClient = new InventoryClient();
  const purchaseClient = new PurchaseClient();

  try {
    // 1. Find user
    const user = await identityClient.user.findFirst({
      where: { email: 'sincereabayo@gmail.com' },
    });

    if (!user) {
      console.error('User sincereabayo@gmail.com not found. Please ensure the user exists.');
      return;
    }

    const tenantId = user.tenantId;

    // 2. Find shop
    const shop = await tenantClient.shop.findFirst({
      where: { tenantId, name: { contains: 'Kacyiru', mode: 'insensitive' } },
    });

    if (!shop) {
      console.error('Kacyiru shop not found for the user tenant.');
      return;
    }

    const shopId = shop.id;
    console.log(`Using Tenant: ${tenantId}, Shop: ${shopId}`);

    // 3. Create Brand
    const brand = await inventoryClient.brand.upsert({
      where: { tenantId_name: { tenantId, name: 'Apple' } },
      update: {},
      create: {
        id: uuidv4(),
        tenantId,
        shopId,
        name: 'Apple',
      }
    });

    // 4. Create Category
    // Prisma does not have tenantId_name unique constraint on category. We'll findFirst.
    let category = await inventoryClient.category.findFirst({
      where: { tenantId, name: 'Laptops' }
    });
    if (!category) {
      category = await inventoryClient.category.create({
        data: {
          id: uuidv4(),
          tenantId,
          shopId,
          name: 'Laptops',
        }
      });
    }

    // 5. Create Product
    const sku = 'MBP-M3-14';
    const product = await inventoryClient.product.upsert({
      where: { tenantId_sku: { tenantId, sku } },
      update: {},
      create: {
        id: uuidv4(),
        tenantId,
        shopId,
        name: 'MacBook Pro M3 14-inch',
        sku,
        brandId: brand.id,
        categoryId: category.id,
        trackingMethod: 'SERIALIZED',
      }
    });

    await inventoryClient.productPrice.create({
      data: {
        id: uuidv4(),
        tenantId,
        productId: product.id,
        sellingPrice: 1500000,
      }
    });

    // 6. Create Purchase Order
    const purchaseNumber = `PO-${Date.now()}`;
    const purchase = await purchaseClient.purchase.create({
      data: {
        id: uuidv4(),
        tenantId,
        shopId,
        purchaseNumber,
        supplierName: 'Apple Distributor Ltd',
        commercialStatus: 'CONFIRMED',
        receivingStatus: 'FULLY_RECEIVED',
        createdById: user.id,
        grandTotal: 1200000,
      }
    });

    const purchaseItem = await purchaseClient.purchaseItem.create({
      data: {
        id: uuidv4(),
        purchaseId: purchase.id,
        productId: product.id,
        productName: product.name,
        productSku: product.sku,
        productTracking: 'SERIALIZED',
        orderedQty: 1,
        receivedQty: 1,
        acceptedQty: 1,
        unitPrice: 1200000,
        lineTotal: 1200000,
      }
    });

    // 7. Receive Unit with Image (Online URL instead of base64)
    const serialNumber = `SN-APP-${Math.floor(Math.random() * 10000)}`;
    const imageUrl = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80'; // Unsplash MacBook image

    const receivedItem = await purchaseClient.purchaseReceivedItem.create({
      data: {
        id: uuidv4(),
        purchaseId: purchase.id,
        purchaseItemId: purchaseItem.id,
        serialNumber,
        unitAcquisitionCost: 1200000,
        status: 'CONFIRMED',
        receivedById: user.id,
        confirmedById: user.id,
        confirmedAt: new Date(),
        images: [imageUrl], // Use online image URL
      }
    });

    // 8. Manually sync to inventory (simulating SyncPurchaseStock RPC)
    const invItem = await inventoryClient.inventoryItem.create({
      data: {
        id: uuidv4(),
        tenantId,
        shopId,
        productId: product.id,
        serialNumber,
        purchaseCost: 1200000,
        imageUrl,
        status: 'AVAILABLE',
        createdBy: user.id,
      }
    });

    await inventoryClient.inventoryMovement.create({
      data: {
        id: uuidv4(),
        tenantId,
        shopId,
        inventoryItemId: invItem.id,
        movementType: 'IN',
        quantity: 1,
        referenceId: purchase.id,
        referenceType: 'PURCHASE',
        createdBy: user.id,
      }
    });

    console.log('Successfully seeded Laptops with online images!');
    console.log(`Created Serial: ${serialNumber}`);

  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await identityClient.$disconnect();
    await tenantClient.$disconnect();
    await inventoryClient.$disconnect();
    await purchaseClient.$disconnect();
  }
}

seed();
