import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordInventoryIncidentCommand } from '../impl/record-inventory-incident.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(RecordInventoryIncidentCommand)
export class RecordInventoryIncidentHandler extends BaseCommandHandler<RecordInventoryIncidentCommand> {
  async execute(command: RecordInventoryIncidentCommand): Promise<ICommandResponse<any>> {
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
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.inventoryItemId || !payload?.incidentType) {
        return {
          status: 'error',
          traceId,
          message: 'inventoryItemId and incidentType are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!['DAMAGED', 'LOST', 'STOLEN'].includes(payload.incidentType)) {
        return {
          status: 'error',
          traceId,
          message: 'incidentType must be DAMAGED, LOST, or STOLEN',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify inventory item exists
      const invItem = await prisma.inventoryItem.findUnique({
        where: { id: payload.inventoryItemId }
      });

      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: `Inventory item ${payload.inventoryItemId} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (invItem.tenantId !== tenantId || invItem.shopId !== shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Inventory item does not belong to this tenant/shop',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      // Check active Work Period
      const workPeriod = await prisma.workPeriod.findFirst({
        where: { shopId, status: 'OPEN' },
        orderBy: { openedAt: 'desc' }
      });

      if (!workPeriod) {
        return {
          status: 'error',
          traceId,
          message: `Shop ${shopId} work period is CLOSED or missing. Incident recording is locked out.`,
          errorCode: ErrorCode.WORK_PERIOD_CLOSED
        };
      }

      const result = await prisma.$transaction(async (tx) => {
        // Update inventory item status to incident type
        const updatedItem = await tx.inventoryItem.update({
          where: { id: payload.inventoryItemId },
          data: { status: payload.incidentType }
        });

        // If write-off amount specified, record journal entry for loss
        let journalEntry = null;
        if (payload.writeOffAmount && payload.writeOffAmount > 0) {
          const getOrCreateAccount = async (code: string, name: string, type: string) => {
            let acc = await tx.ledgerAccount.findFirst({
              where: { tenantId, shopId, code }
            });
            if (!acc) {
              acc = await tx.ledgerAccount.create({
                data: { tenantId, shopId, code, name, type }
              });
            }
            return acc;
          };

          const lossAcc = await getOrCreateAccount('6001', 'Loss on Inventory', 'EXPENSE');
          const invAcc = await getOrCreateAccount('1002', 'Inventory Asset', 'ASSET');

          journalEntry = await tx.journalEntry.create({
            data: {
              tenantId,
              shopId,
              workPeriodId: workPeriod.id,
              description: `Inventory ${payload.incidentType} - ${invItem.serialNumber}`,
              postedBy: context.userId || 'system',
              status: 'POSTED',
              entries: {
                create: [
                  { accountId: lossAcc.id, type: 'DEBIT', amount: payload.writeOffAmount },
                  { accountId: invAcc.id, type: 'CREDIT', amount: payload.writeOffAmount }
                ]
              }
            },
            include: { entries: true }
          });

          // Update ledger balances
          await tx.ledgerAccount.update({
            where: { id: lossAcc.id },
            data: { balance: { increment: payload.writeOffAmount } }
          });
          await tx.ledgerAccount.update({
            where: { id: invAcc.id },
            data: { balance: { decrement: payload.writeOffAmount } }
          });
        }

        return { updatedItem, journalEntry };
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context.userId,
            action: 'RecordInventoryIncident',
            resource: 'InventoryItem',
            resourceId: payload.inventoryItemId,
            traceId: context.traceId || null,
            details: JSON.stringify({
              incidentType: payload.incidentType,
              writeOffAmount: payload.writeOffAmount
            })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: result
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record inventory incident',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
