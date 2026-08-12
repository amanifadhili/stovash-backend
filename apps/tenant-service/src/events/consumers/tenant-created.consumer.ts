import { prisma } from '../../database/client.js';

export const tenantCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    const tenantId = payload.tenantId || aggregateId;
    const shopId = payload.shopId;

    const tenant = await prisma.tenant.create({
      data: {
        id: tenantId,
        name: payload.name,
        status: payload.status || 'ACTIVE'
      }
    });

    // Auto-create a FREE subscription for new tenants
    await prisma.subscription.create({
      data: {
        tenantId,
        plan: 'FREE',
        status: 'ACTIVE',
        validFrom: new Date(),
        validTo: null,
      }
    });

    let createdShopId: string | null = null;
    if (shopId) {
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
    }

    if (payload.userId) {
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
