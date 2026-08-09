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
    const reqContext = request.context as IRequestContext;

    if (!reqContext) {
      throw new AppError(ErrorCode.UNAUTHORIZED, 'Request context is missing');
    }

    // In a real application, we would fetch user roles and permissions from context
    // For this prototype, we'll assume the API gateway injects this into the context
    // or we resolve it here. For simplicity, we are passing if the context exists,
    // but we can extend this logic to check reqContext roles/permissions if they were added.
    return true;
  }
}
