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

    // 3. Create Brands
    const brandNames = ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus'];
    const brands = await Promise.all(
      brandNames.map(name => 
        inventoryClient.brand.upsert({
          where: { tenantId_name: { tenantId, name } },
          update: {},
          create: { id: uuidv4(), tenantId, shopId, name }
        })
      )
    );

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

    const images = [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
      'https://images.unsplash.com/photo-1531297172814-af2632200f60?w=800&q=80',
      'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80',
    ];

    // 5. Create Purchase Order
    const purchaseNumber = `PO-${Date.now()}`;
    const purchase = await purchaseClient.purchase.create({
      data: {
        id: uuidv4(),
        tenantId,
        shopId,
        purchaseNumber,
        supplierName: 'Global Tech Distributor Ltd',
        commercialStatus: 'CONFIRMED',
        receivingStatus: 'FULLY_RECEIVED',
        createdById: user.id,
        grandTotal: 0,
      }
    });

    let grandTotal = 0;

    for (let i = 1; i <= 100; i++) {
      const brand = brands[Math.floor(Math.random() * brands.length)];
      const sku = `${brand.name.toUpperCase().substring(0, 3)}-MOD-${i}-${Date.now()}`;
      const cost = Math.floor(Math.random() * 1000000) + 500000;
      const sellingPrice = cost + Math.floor(cost * 0.3);

      const product = await inventoryClient.product.upsert({
        where: { tenantId_sku: { tenantId, sku } },
        update: {},
        create: {
          id: uuidv4(),
          tenantId,
          shopId,
          name: `${brand.name} Pro Series ${i}`,
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
          sellingPrice,
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
          unitPrice: cost,
          lineTotal: cost,
        }
      });

      const serialNumber = `SN-${brand.name.toUpperCase()}-${Math.floor(Math.random() * 10000000)}`;
      const imageUrl = images[Math.floor(Math.random() * images.length)];

      const receivedItem = await purchaseClient.purchaseReceivedItem.create({
        data: {
          id: uuidv4(),
          purchaseId: purchase.id,
          purchaseItemId: purchaseItem.id,
          serialNumber,
          unitAcquisitionCost: cost,
          status: 'CONFIRMED',
          receivedById: user.id,
          confirmedById: user.id,
          confirmedAt: new Date(),
          images: [imageUrl],
        }
      });

      const invItem = await inventoryClient.inventoryItem.create({
        data: {
          id: uuidv4(),
          tenantId,
          shopId,
          productId: product.id,
          serialNumber,
          purchaseCost: cost,
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

      grandTotal += cost;
      if (i % 10 === 0) console.log(`Seeded ${i} items...`);
    }

    await purchaseClient.purchase.update({
      where: { id: purchase.id },
      data: { grandTotal }
    });

    console.log('Successfully seeded 100 Laptops with online images!');

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
