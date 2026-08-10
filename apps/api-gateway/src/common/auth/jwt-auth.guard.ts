import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { prisma } from '@electronic-shop/database';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly jwtSecret = process.env.JWT_SECRET || 'dev-secret-key';

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid authorization header');
    }

    const token = authHeader.split('Bearer ')[1];
    
    try {
      const decodedToken = jwt.verify(token, this.jwtSecret) as any;
      
      // Verify user exists in database
      const user = await prisma.user.findUnique({
        where: { id: decodedToken.sub }
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

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
        lastName: user.lastName
      };
      
      // Merge user ID into command context
      if (request.context) {
        request.context.userId = user.id;
      }
      
      return true;
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        throw new UnauthorizedException('Invalid token');
      }
      if (error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException('Token expired');
      }
      console.error('Error verifying JWT token:', error);
      throw new UnauthorizedException('Authentication failed');
    }
  }
}
