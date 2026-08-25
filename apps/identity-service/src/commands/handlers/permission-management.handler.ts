import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { SYSTEM_PERMISSION_CATALOG, authorizeUserAction, seedPermissionsAndMigrateUsers } from '@electronic-shop/database';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

export class ManagePermissionsCommand {
  constructor(public readonly action: string, public readonly payload: any, public readonly context: any) {}
}

@CommandHandler(ManagePermissionsCommand)
export class ManagePermissionsHandler implements ICommandHandler<ManagePermissionsCommand> {
  async execute(command: ManagePermissionsCommand): Promise<ICommandResponse<any>> {
    const { action, payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const actorId = context?.userId || 'system';
    const tenantId = context?.tenantId || payload?.tenantId || 'system';

    try {
      if (action === 'GetPermissionTemplates') {
        let templates = await prisma.permissionTemplate.findMany({
          include: {
            templatePermissions: true,
            _count: { select: { userTemplateAssignments: true } },
          },
        });

        if (templates.length === 0) {
          try {
            await seedPermissionsAndMigrateUsers(prisma);
            templates = await prisma.permissionTemplate.findMany({
              include: {
                templatePermissions: true,
                _count: { select: { userTemplateAssignments: true } },
              },
            });
          } catch (seedErr) {
            console.error('[GetPermissionTemplates] Auto-seed failed:', seedErr);
          }
        }

        return {
          status: 'success',
          traceId,
          data: { templates },
        };
      }

      if (action === 'AssignTemplateToUser') {
        const { targetUserId, templateId, assign } = payload; // assign: boolean
        if (!targetUserId || !templateId) {
          return {
            status: 'error',
            traceId,
            message: 'Missing targetUserId or templateId',
            errorCode: ErrorCode.VALIDATION_ERROR,
          };
        }

        let resultData: any;
        if (assign) {
          resultData = await prisma.userTemplateAssignment.upsert({
            where: {
              userId_templateId: { userId: targetUserId, templateId },
            },
            create: { userId: targetUserId, templateId, assignedBy: actorId },
            update: { assignedBy: actorId },
          });

          await prisma.permissionAuditLog.create({
            data: {
              tenantId,
              actorId,
              targetUserId,
              action: 'ASSIGN_TEMPLATE',
              newValue: templateId,
              reason: payload.reason || 'Assigned permission template to staff',
              traceId,
            },
          });
        } else {
          resultData = await prisma.userTemplateAssignment.deleteMany({
            where: { userId: targetUserId, templateId },
          });

          await prisma.permissionAuditLog.create({
            data: {
              tenantId,
              actorId,
              targetUserId,
              action: 'REMOVE_TEMPLATE',
              oldValue: templateId,
              reason: payload.reason || 'Removed permission template from staff',
              traceId,
            },
          });
        }

        return {
          status: 'success',
          traceId,
          data: { result: resultData },
        };
      }

      if (action === 'SetUserPermissionOverride') {
        const { targetUserId, permissionKey, isGranted, scope, allowedShopIds, expiresAt, reason } = payload;
        if (!targetUserId || !permissionKey || isGranted === undefined) {
          return {
            status: 'error',
            traceId,
            message: 'Missing required override fields (targetUserId, permissionKey, isGranted)',
            errorCode: ErrorCode.VALIDATION_ERROR,
          };
        }

        const existing = await prisma.userPermission.findUnique({
          where: { userId_permissionKey: { userId: targetUserId, permissionKey } },
        });

        const updated = await prisma.userPermission.upsert({
          where: { userId_permissionKey: { userId: targetUserId, permissionKey } },
          create: {
            tenantId,
            userId: targetUserId,
            permissionKey,
            isGranted: Boolean(isGranted),
            scope: scope || 'ALL',
            allowedShopIds: allowedShopIds || [],
            expiresAt: expiresAt ? new Date(expiresAt) : null,
            grantedBy: actorId,
          },
          update: {
            isGranted: Boolean(isGranted),
            scope: scope || 'ALL',
            allowedShopIds: allowedShopIds || [],
            expiresAt: expiresAt ? new Date(expiresAt) : null,
            grantedBy: actorId,
          },
        });

        await prisma.permissionAuditLog.create({
          data: {
            tenantId,
            actorId,
            targetUserId,
            action: isGranted ? 'EXPLICIT_GRANT' : 'EXPLICIT_DENY',
            permissionKey,
            oldValue: existing ? JSON.stringify(existing) : null,
            newValue: JSON.stringify(updated),
            reason: reason || 'Set explicit user permission override',
            traceId,
          },
        });

        return {
          status: 'success',
          traceId,
          data: { permission: updated },
        };
      }

      if (action === 'RemoveUserPermissionOverride') {
        const { targetUserId, permissionKey, reason } = payload;
        if (!targetUserId || !permissionKey) {
          return {
            status: 'error',
            traceId,
            message: 'Missing targetUserId or permissionKey',
            errorCode: ErrorCode.VALIDATION_ERROR,
          };
        }

        const existing = await prisma.userPermission.findUnique({
          where: { userId_permissionKey: { userId: targetUserId, permissionKey } },
        });

        if (existing) {
          await prisma.userPermission.delete({
            where: { userId_permissionKey: { userId: targetUserId, permissionKey } },
          });

          await prisma.permissionAuditLog.create({
            data: {
              tenantId,
              actorId,
              targetUserId,
              action: 'REMOVE_OVERRIDE',
              permissionKey,
              oldValue: JSON.stringify(existing),
              reason: reason || 'Reset user permission override to template default',
              traceId,
            },
          });
        }

        return {
          status: 'success',
          traceId,
          data: { message: 'Permission override removed successfully' },
        };
      }

      if (action === 'GetUserEffectivePermissions') {
        const { targetUserId } = payload;
        const targetUser = await prisma.user.findUnique({
          where: { id: targetUserId },
          select: { id: true, tenantId: true, role: true, firstName: true, lastName: true, email: true },
        });

        if (!targetUser) {
          return {
            status: 'error',
            traceId,
            message: 'Target user not found',
            errorCode: ErrorCode.NOT_FOUND,
          };
        }

        const userContext = {
          userId: targetUser.id,
          tenantId: targetUser.tenantId,
          role: targetUser.role,
        };

        const effectiveMap: Record<string, any> = {};
        for (const permDef of SYSTEM_PERMISSION_CATALOG) {
          const res = await authorizeUserAction(prisma, userContext, permDef.key);
          effectiveMap[permDef.key] = {
            key: permDef.key,
            name: permDef.name,
            domain: permDef.domain,
            description: permDef.description,
            isSensitive: permDef.isSensitive,
            isFinancial: permDef.isFinancial,
            isAdminOnly: permDef.isAdminOnly,
            granted: res.allowed,
            scope: res.scope,
            allowedShopIds: res.allowedShopIds,
            source: res.source,
            reason: res.reason,
          };
        }

        const assignments = await prisma.userTemplateAssignment.findMany({
          where: { userId: targetUserId },
          include: { template: true },
        });

        const explicitOverrides = await prisma.userPermission.findMany({
          where: { userId: targetUserId },
        });

        return {
          status: 'success',
          traceId,
          data: {
            user: {
              ...targetUser,
              name: `${targetUser.firstName} ${targetUser.lastName}`.trim(),
            },
            effectivePermissions: effectiveMap,
            assignedTemplates: assignments.map((a: any) => a.template),
            explicitOverrides,
          },
        };
      }

      if (action === 'GetPermissionAuditLogs') {
        const { targetUserId, limit = 50 } = payload || {};
        const where: any = {};
        if (targetUserId) where.targetUserId = targetUserId;
        if (tenantId) where.tenantId = tenantId;

        const logs = await prisma.permissionAuditLog.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          take: Number(limit),
        });

        return {
          status: 'success',
          traceId,
          data: { auditLogs: logs },
        };
      }

      return {
        status: 'error',
        traceId,
        message: `Unknown permission command action: ${action}`,
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    } catch (err: any) {
      return {
        status: 'error',
        traceId,
        message: err.message || 'Permission management operation failed',
        errorCode: ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
