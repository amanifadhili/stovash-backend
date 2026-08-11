import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CloseWorkPeriodCommand } from '../impl/close-work-period.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CloseWorkPeriodCommand)
export class CloseWorkPeriodHandler extends BaseCommandHandler<CloseWorkPeriodCommand> {
  async execute(command: CloseWorkPeriodCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const targetShopId = payload?.shopId || context?.shopId;
    const targetStatus = payload?.targetStatus || 'CLOSED';

    try {
      let workPeriod = null;
      if (payload?.workPeriodId) {
        workPeriod = await prisma.workPeriod.findUnique({ where: { id: payload.workPeriodId } });
      } else if (targetShopId) {
        workPeriod = await prisma.workPeriod.findFirst({
          where: { shopId: targetShopId, status: { in: ['OPEN', 'PENDING_CLOSING', 'PENDING_RECONCILIATION'] } },
          orderBy: { openedAt: 'desc' }
        });
      }

      if (!workPeriod) {
        return {
          status: 'error',
          traceId,
          message: 'No active or specified work period found to transition/close',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (workPeriod.status === 'CLOSED' && targetStatus === 'CLOSED') {
        return {
          status: 'error',
          traceId,
          message: 'Work period is already CLOSED',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
        };
      }

      // Check for physical confirmations if closing to CLOSED status
      if (targetStatus === 'CLOSED') {
        // This would typically check Treasury service for physical confirmations
        // For now, we'll log a warning if no confirmations exist
        console.log(`Closing work period ${workPeriod.id} - physical confirmation check would be performed here`);
        
        // Check for reconciliation status
        // In a real implementation, this would query the Treasury service
        // to ensure all payment methods have been reconciled
        console.log(`Closing work period ${workPeriod.id} - reconciliation check would be performed here`);
        
        // For now, we'll add a flag to indicate reconciliation is required
        // This can be enforced when Treasury service integration is complete
      }

      // Calculate profit/loss for the work period
      const financialSummary = await this.calculatePeriodFinancials(workPeriod.id, workPeriod.tenantId, workPeriod.shopId);

      // Update work period with financial summary
      const updated = await prisma.workPeriod.update({
        where: { id: workPeriod.id },
        data: {
          status: targetStatus,
          closedBy: targetStatus === 'CLOSED' ? context?.userId || workPeriod.openedBy : workPeriod.closedBy,
          closedAt: targetStatus === 'CLOSED' ? new Date() : workPeriod.closedAt,
          totalRevenue: financialSummary.totalRevenue,
          totalExpense: financialSummary.totalExpense,
          netProfit: financialSummary.netProfit,
          grossProfit: financialSummary.grossProfit
        }
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId: workPeriod.tenantId,
            shopId: workPeriod.shopId,
            userId: context?.userId || null,
            action: 'CloseWorkPeriod',
            resource: 'WorkPeriod',
            resourceId: workPeriod.id,
            traceId: context?.traceId || null,
            details: JSON.stringify({
              status: targetStatus,
              totalRevenue: financialSummary.totalRevenue,
              totalExpense: financialSummary.totalExpense,
              netProfit: financialSummary.netProfit,
              grossProfit: financialSummary.grossProfit
            })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: {
          ...updated,
          financialSummary
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to close work period',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }

  /**
   * Calculate financial summary for a work period
   */
  private async calculatePeriodFinancials(workPeriodId: string, tenantId: string, shopId: string) {
    // Get all journal entries for this work period
    const journalEntries = await prisma.journalEntry.findMany({
      where: {
        workPeriodId,
        tenantId,
        shopId,
        status: 'POSTED'
      },
      include: {
        entries: {
          include: {
            account: true
          }
        }
      }
    });

    let totalRevenue = 0;
    let totalExpense = 0;
    let costOfGoodsSold = 0;

    // Calculate totals by account type
    for (const journalEntry of journalEntries) {
      for (const entry of journalEntry.entries) {
        const account = entry.account;
        const amount = Number(entry.amount);

        if (account.type === 'REVENUE') {
          // Credits increase revenue, debits decrease
          if (entry.type === 'CREDIT') {
            totalRevenue += amount;
          } else {
            totalRevenue -= amount;
          }
        } else if (account.type === 'EXPENSE') {
          // Debits increase expense, credits decrease
          if (entry.type === 'DEBIT') {
            totalExpense += amount;
          } else {
            totalExpense -= amount;
          }
        } else if (account.type === 'ASSET' && account.name.toLowerCase().includes('inventory') || account.name.toLowerCase().includes('cogs')) {
          // Track cost of goods sold
          if (entry.type === 'DEBIT') {
            costOfGoodsSold += amount;
          } else {
            costOfGoodsSold -= amount;
          }
        }
      }
    }

    const grossProfit = totalRevenue - costOfGoodsSold;
    const netProfit = totalRevenue - totalExpense;

    return {
      totalRevenue,
      totalExpense,
      costOfGoodsSold,
      grossProfit,
      netProfit,
      journalEntryCount: journalEntries.length
    };
  }
}
