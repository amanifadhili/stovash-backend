import { prisma } from '../../database/client.js';

export const tenantCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    const tenantId = payload.tenantId || aggregateId;
    const shopId = payload.shopId;

    // Upsert tenant (idempotent - safe if event is retried)
    const tenant = await prisma.tenant.upsert({
      where: { id: tenantId },
      update: { name: payload.name },
      create: {
        id: tenantId,
        name: payload.name,
        status: payload.status || 'ACTIVE'
      }
    });

    // Auto-create a FREE subscription if none exists
    const existingSubscription = await prisma.subscription.findUnique({
      where: { tenantId }
    });

    if (!existingSubscription) {
      await prisma.subscription.create({
        data: {
          tenantId,
          plan: 'FREE',
          status: 'ACTIVE',
          validFrom: new Date(),
          validTo: null,
        }
      });
      console.log(`FREE subscription created for tenant: ${tenantId}`);
    }

    let createdShopId: string | null = null;
    if (shopId) {
      const existingShop = await prisma.shop.findUnique({
        where: { id: shopId }
      });

      if (!existingShop) {
        const shop = await prisma.shop.create({
          data: {
            id: shopId,
            tenantId,
            name: payload.shopName || payload.name,
            location: payload.location || null,
            status: 'ACTIVE'
          }
        });
        createdShopId = shop.id;
      } else {
        createdShopId = shopId;
      }
    }

    if (payload.userId) {
      const existingStaff = await prisma.staff.findUnique({
        where: { userId: payload.userId }
      });

      if (!existingStaff) {
        await prisma.staff.create({
          data: {
            tenantId,
            shopId: createdShopId,
            userId: payload.userId,
            firstName: payload.firstName || '',
            lastName: payload.lastName || '',
            email: payload.email || '',
            role: 'ADMIN',
            status: 'ACTIVE'
          }
        });
      }
    }

    try {
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId: createdShopId,
          userId: payload.userId || null,
          action: 'CreateTenant',
          resource: 'Tenant',
          resourceId: tenantId,
          traceId: correlationId || null,
          details: JSON.stringify({ name: payload.name })
        }
      });
    } catch (auditError) {
      console.error('Failed to log audit action:', auditError);
    }

    console.log(`TenantCreated event processed: ${tenantId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing TenantCreated event:`, error);
    throw error;
  }
};
