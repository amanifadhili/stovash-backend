import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

const PUBLIC_COMMANDS = ['LoginUser', 'CreateTenant'];

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    @Inject('IDENTITY_SERVICE') private readonly identityClient: ClientProxy,
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

      // Merge user ID into command context
      if (request.context) {
        request.context.userId = user.id;
        request.context.tenantId = user.tenantId;
        if (request.context.shopId === 'default-shop') {
          request.context.shopId = 'shop-1';
        }
      }

      return true;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      console.error('Error verifying JWT token:', error);
      throw new UnauthorizedException('Authentication failed');
    }
  }
}
