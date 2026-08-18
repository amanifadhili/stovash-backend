import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

const PUBLIC_COMMANDS = ['LoginUser', 'CreateTenant'];

// Commands that do NOT require an active subscription (auth, reads, onboarding, subscription mgmt)
export const SUBSCRIPTION_EXEMPT = [
  'LoginUser', 'CreateTenant', 'VerifyUser', 'RefreshToken',
  'GetTenant', 'GetTenantSubscription', 'GetTenantShops',
  'CreateShop', // New users must create a shop before they can subscribe
];

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    @Inject('IDENTITY_SERVICE') private readonly identityClient: ClientProxy,
    @Inject('TENANT_SERVICE') private readonly tenantClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const command = request.body?.command || request.headers['x-command'];
    if (command && PUBLIC_COMMANDS.includes(command)) {
      return true;
    }

    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid authorization header');
    }

    const token = authHeader.split('Bearer ')[1];

    try {
      // Verify token and load user via Identity Service
      const response = await firstValueFrom(
        this.identityClient.send({ cmd: 'VerifyUser' }, { payload: { token }, context: { traceId: request.context?.traceId } })
      );

      if (response?.status !== 'success' || !response?.data) {
        throw new UnauthorizedException(response?.message || 'User not found');
      }

      const user = response.data;

      if (user.status !== 'ACTIVE') {
        throw new UnauthorizedException('User account is not active');
      }

      // Attach user to request
      request.user = {
        id: user.id,
        email: user.email,
        role: user.role,
        tenantId: user.tenantId,
        firstName: user.firstName,
        lastName: user.lastName,
        permissions: user.role === 'ADMIN' ? ['*'] : []
      };

      // Merge user ID + resolved tenant into the command context.
      if (request.context) {
        request.context.userId = user.id;
        request.context.tenantId = user.tenantId;
        request.context.firstName = user.firstName;
        request.context.lastName = user.lastName;
        request.context.email = user.email;
      }

      // Enforce active subscription for non-exempt commands
      if (command && !SUBSCRIPTION_EXEMPT.includes(command)) {
        const subscriptionResponse = await firstValueFrom(
          this.tenantClient.send(
            { cmd: 'GetTenantSubscription' },
            { payload: { tenantId: user.tenantId }, context: { traceId: request.context?.traceId } }
          )
        );

        const subscription = subscriptionResponse?.data;
        if (!subscription || subscription.status !== 'ACTIVE') {
          throw new ForbiddenException({
            status: 'error',
            message: 'No active subscription. Please subscribe to continue.',
            errorCode: 'SUBSCRIPTION_REQUIRED'
          });
        }
      }

      return true;
    } catch (error) {
      if (error instanceof UnauthorizedException || error instanceof ForbiddenException) {
        throw error;
      }
      console.error('Error verifying JWT token:', error);
      throw new UnauthorizedException('Authentication failed');
    }
  }
}
