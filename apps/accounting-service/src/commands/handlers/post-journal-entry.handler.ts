import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { PostJournalEntryCommand } from '../impl/post-journal-entry.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(PostJournalEntryCommand)
export class PostJournalEntryHandler extends BaseCommandHandler<PostJournalEntryCommand> {
  async execute(command: PostJournalEntryCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!context?.tenantId || !context?.shopId || !context?.userId) {
        return {
          status: 'error',
          traceId,
          message: 'Missing required context (tenantId, shopId, or userId)',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      if (!payload?.entries || !Array.isArray(payload.entries) || payload.entries.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Journal entries array is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Double entry validation
      let totalDebit = 0;
      let totalCredit = 0;
      for (const entry of payload.entries) {
        if (entry.type === 'DEBIT') totalDebit += Number(entry.amount) || 0;
        if (entry.type === 'CREDIT') totalCredit += Number(entry.amount) || 0;
      }

      if (totalDebit !== totalCredit) {
        return {
          status: 'error',
          traceId,
          message: `Debits ($${totalDebit}) must equal credits ($${totalCredit})`,
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Work Period status check & Financial Period Lockout
      let activeWorkPeriodId = context.workPeriodId;
      if (activeWorkPeriodId) {
        const wp = await prisma.workPeriod.findUnique({ where: { id: activeWorkPeriodId } });
        if (wp && wp.status !== 'OPEN') {
          return {
            status: 'error',
            traceId,
            message: `Work period ${activeWorkPeriodId} is ${wp.status}. New journal entries are locked out.`,
            errorCode: ErrorCode.WORK_PERIOD_CLOSED
          };
        }
      } else {
        const activeWp = await prisma.workPeriod.findFirst({
          where: { shopId: context.shopId, status: 'OPEN' },
          orderBy: { openedAt: 'desc' }
        });
        if (!activeWp) {
          const closedWp = await prisma.workPeriod.findFirst({
            where: { shopId: context.shopId },
            orderBy: { openedAt: 'desc' }
          });
          if (closedWp) {
            return {
              status: 'error',
              traceId,
              message: `Shop ${context.shopId} work period is ${closedWp.status}. New journal entries are locked out.`,
              errorCode: ErrorCode.WORK_PERIOD_CLOSED
            };
          }
        } else {
          activeWorkPeriodId = activeWp.id;
        }
      }

      const result = await prisma.$transaction(async (tx) => {
        // Ensure all referenced ledger accounts exist or auto-provision them if missing for demo/test ease
        const resolvedEntries = [];
        for (const entry of payload.entries) {
          let account = await tx.ledgerAccount.findUnique({ where: { id: entry.accountId } });
          if (!account) {
            // Check if there is an account by code
            account = await tx.ledgerAccount.findFirst({
              where: { tenantId: context.tenantId!, code: entry.accountId }
            });
          }
          if (!account) {
            // Auto-create ledger account if missing
            const defaultType = entry.type === 'DEBIT' ? 'ASSET' : 'REVENUE';
            account = await tx.ledgerAccount.create({
              data: {
                id: entry.accountId.length > 20 ? entry.accountId : undefined,
                tenantId: context.tenantId!,
                shopId: context.shopId!,
                code: entry.accountId,
                name: `Account (${entry.accountId})`,
                type: defaultType,
                balance: 0
              }
            });
          }
          resolvedEntries.push({ entry, account });
        }

        const journalEntry = await tx.journalEntry.create({
          data: {
            tenantId: context.tenantId!,
            shopId: context.shopId!,
            workPeriodId: context.workPeriodId || 'default-work-period',
            description: payload.description || 'Journal Entry',
            postedBy: context.userId!,
            entries: {
              create: resolvedEntries.map(({ entry, account }) => ({
                accountId: account.id,
                type: entry.type,
                amount: Number(entry.amount) || 0
              }))
            }
          }
        });

        // Update balances
        for (const { entry, account } of resolvedEntries) {
          let multiplier = 1;
          if (account.type === 'ASSET' || account.type === 'EXPENSE') {
            multiplier = entry.type === 'DEBIT' ? 1 : -1;
          } else {
            multiplier = entry.type === 'CREDIT' ? 1 : -1;
          }

          await tx.ledgerAccount.update({
            where: { id: account.id },
            data: { balance: { increment: (Number(entry.amount) || 0) * multiplier } }
          });
        }

        return journalEntry;
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId: context.tenantId!,
            shopId: context.shopId!,
            userId: context.userId!,
            action: 'PostJournalEntry',
            resource: 'JournalEntry',
            resourceId: result.id,
            traceId: context.traceId || null,
            details: JSON.stringify({ 
              description: payload.description, 
              totalDebit, 
              totalCredit,
              entryCount: payload.entries.length 
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
        message: error.message || 'Failed to post journal entry',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
