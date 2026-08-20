import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordInventoryUpgradeCommand } from '../impl/record-inventory-upgrade.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import {
  francsToMinor,
  isoDay,
  NON_TILL_METHODS,
  operationalKindForMethod,
  sendFinanceCommand,
} from '../../common/commercial-finance.js';
import { paymentsCoverCost } from '../../common/unit-expense-payments.js';

@CommandHandler(RecordInventoryUpgradeCommand)
export class RecordInventoryUpgradeHandler extends BaseCommandHandler<RecordInventoryUpgradeCommand> {
  constructor(@Inject('TREASURY_SERVICE') private readonly treasuryClient: ClientProxy) {
    super();
  }

  async execute(command: RecordInventoryUpgradeCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      if (!payload?.inventoryItemId || !payload?.upgradeType || payload?.cost === undefined) {
        return {
          status: 'error',
          traceId,
          message: 'inventoryItemId, upgradeType, and cost are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const cost = Number(payload.cost);
      if (!Number.isFinite(cost) || cost <= 0) {
        return {
          status: 'error',
          traceId,
          message: 'cost must be a positive franc amount',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const payments = Array.isArray(payload.payments) ? payload.payments : [];
      if (!paymentsCoverCost(cost, payments)) {
        return {
          status: 'error',
          traceId,
          message: 'Payment lines must cover the full unit expense. Split Cash, MoMo, and Bank if needed.',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      for (const line of payments) {
        if (NON_TILL_METHODS.has(String(line.paymentMethod || '').toUpperCase())) {
          return {
            status: 'error',
            traceId,
            message: 'CREDIT is not a treasury method. Pay from Cash, MoMo, or Bank.',
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
          };
        }
        const fromKind = operationalKindForMethod(line.paymentMethod);
        if (!fromKind && !line.accountId) {
          return {
            status: 'error',
            traceId,
            message: 'Each payment must map to an Operational physical account (Cash, MoMo, or Bank)',
            errorCode: ErrorCode.VALIDATION_ERROR,
          };
        }
        if (!francsToMinor(line.amount)) {
          return {
            status: 'error',
            traceId,
            message: 'Each payment amount must convert to positive RWF cents',
            errorCode: ErrorCode.VALIDATION_ERROR,
          };
        }
      }

      const invItem = await prisma.inventoryItem.findUnique({
        where: { id: payload.inventoryItemId },
      });

      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: `Inventory item ${payload.inventoryItemId} not found`,
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      if (invItem.tenantId !== tenantId || invItem.shopId !== shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Inventory item does not belong to this tenant/shop',
          errorCode: ErrorCode.UNAUTHORIZED,
        };
      }

      if (invItem.status === 'RENTED_IN' || invItem.status === 'RENTED_OUT') {
        return {
          status: 'error',
          traceId,
          message: 'Cannot capitalize extras on a borrowed unit. Add extras at sale instead.',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const rootKey = String(payload.idempotencyKey || '').trim() || null;
      if (rootKey) {
        const replay = await prisma.inventoryUpgrade.findFirst({
          where: { tenantId, shopId, idempotencyKey: rootKey },
        });
        if (replay) {
          const updatedItem = await prisma.inventoryItem.findUnique({ where: { id: invItem.id } });
          return { status: 'success', traceId, data: { upgrade: replay, updatedItem, existingIfReplay: true } };
        }
      }

      const financeContext = { tenantId, shopId, userId: context.userId, traceId };
      const occurredOn = isoDay(payload.occurredOn);

      for (let i = 0; i < payments.length; i++) {
        const line = payments[i];
        const fromKind = operationalKindForMethod(line.paymentMethod);
        const amountMinor = francsToMinor(line.amount);
        const lineKey =
          line.idempotencyKey ||
          (rootKey ? `${rootKey}:${i}` : `CBE-CAP:${payload.inventoryItemId}:${i}:${amountMinor}`);
        const movement = await sendFinanceCommand(
          this.treasuryClient,
          'CreateTreasuryMovement',
          {
            movementType: 'INVENTORY_CAPITALIZE',
            amountMinor,
            occurredOn,
            fromPhysicalId: line.accountId || undefined,
            fromKind,
            obligationSourceId: payload.inventoryItemId,
            idempotencyKey: lineKey,
            notes: line.reference || undefined,
            reason: payload.upgradeType,
          },
          financeContext,
        );
        if (movement.status === 'error') return movement;
      }

      const result = await prisma.$transaction(async (tx) => {
        const upgrade = await tx.inventoryUpgrade.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: payload.inventoryItemId,
            upgradeType: payload.upgradeType,
            description: payload.description,
            details: payload.details ?? undefined,
            idempotencyKey: rootKey,
            cost,
          },
        });

        const updatedItem = await tx.inventoryItem.update({
          where: { id: payload.inventoryItemId },
          data: {
            capitalizedCost: { increment: cost },
          },
        });

        return { upgrade, updatedItem };
      });

      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context.userId,
            action: 'RecordInventoryUpgrade',
            resource: 'InventoryUpgrade',
            resourceId: result.upgrade.id,
            traceId: context.traceId || null,
            details: JSON.stringify({
              inventoryItemId: payload.inventoryItemId,
              upgradeType: payload.upgradeType,
              cost,
            }),
          },
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: result,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record inventory upgrade',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
