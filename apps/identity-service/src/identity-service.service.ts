import { Injectable, Logger } from '@nestjs/common';
import { prisma } from '@electronic-shop/database';

@Injectable()
export class IdentityServiceService {
  private readonly logger = new Logger(IdentityServiceService.name);

  async createTenant(payload: any, context: any) {
    this.logger.log(`Creating tenant with payload: ${JSON.stringify(payload)}`);
    
    const tenant = await prisma.tenant.create({
      data: {
        name: payload.name || 'Default Tenant',
      }
    });

    // Also create a default shop for the tenant
    const shop = await prisma.shop.create({
      data: {
        tenantId: tenant.id,
        name: 'Main Shop',
      }
    });

    return {
      tenant,
      shop
    };
  }

  async createUser(payload: any, context: any) {
    this.logger.log(`Creating user with payload: ${JSON.stringify(payload)}`);
    
    const user = await prisma.user.create({
      data: {
        tenantId: payload.tenantId || context.tenantId,
        email: payload.email,
        password: 'hashed-password', // TODO: Hash password
        firstName: payload.firstName,
        lastName: payload.lastName,
        role: payload.role || 'STAFF',
      }
    });

    return user;
  }
}
