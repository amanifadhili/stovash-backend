import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from './permissions.decorator.js';
import { ROLES_KEY } from './roles.decorator.js';
import { IRequestContext } from '@electronic-shop/types';
import { AppError, ErrorCode } from '@electronic-shop/types';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredPermissions && !requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const reqContext = (request?.context || request?.body?.context) as IRequestContext;

    if (!reqContext) {
      throw new AppError(ErrorCode.UNAUTHORIZED, 'Request context is missing');
    }

    const userRoles = reqContext.roles || (reqContext.role ? [reqContext.role] : ['STAFF']);
    const userPermissions = reqContext.permissions || [];

    if (requiredRoles && requiredRoles.length > 0) {
      const hasRole = requiredRoles.some(r => userRoles.includes(r));
      if (!hasRole) {
        throw new AppError(ErrorCode.FORBIDDEN, `Insufficient role privileges. Required: ${requiredRoles.join(', ')}`);
      }
    }

    if (requiredPermissions && requiredPermissions.length > 0) {
      const hasPermission = requiredPermissions.some(p => userPermissions.includes(p));
      if (!hasPermission) {
        throw new AppError(ErrorCode.FORBIDDEN, `Insufficient granular permissions. Required: ${requiredPermissions.join(', ')}`);
      }
    }

    return true;
  }
}

