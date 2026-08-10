import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { PostBatchCommand } from '../impl/post-batch.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(PostBatchCommand)
export class PostBatchHandler extends BaseCommandHandler<PostBatchCommand> {
  async execute(command: PostBatchCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!context?.tenantId || !context?.shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Missing required context (tenantId, shopId)',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      if (!payload?.batchId) {
        return {
          status: 'error',
          traceId,
          message: 'Batch ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify batch exists and is in DRAFT status
      const batch = await prisma.postingBatch.findUnique({
        where: { id: payload.batchId },
        include: {
          journalEntries: {
            include: {
              entries: {
                include: {
                  account: true
                }
              }
            }
          }
        }
      });

      if (!batch) {
        return {
          status: 'error',
          traceId,
          message: 'Posting batch not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (batch.status !== 'DRAFT') {
        return {
          status: 'error',
          traceId,
          message: `Batch is already ${batch.status}`,
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
        };
      }

      if (batch.tenantId !== context.tenantId || batch.shopId !== context.shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Batch does not belong to this tenant/shop',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      const result = await prisma.$transaction(async (tx) => {
        // Update batch status to POSTED
        const updatedBatch = await tx.postingBatch.update({
          where: { id: payload.batchId },
          data: {
            status: 'POSTED',
            postedBy: context.userId,
            postedAt: new Date()
          }
        });

        // Update all journal entries in the batch to POSTED
        await tx.journalEntry.updateMany({
          where: { batchId: payload.batchId },
          data: { status: 'POSTED' }
        });

        // Update ledger balances for all entries in the batch
        for (const journalEntry of batch.journalEntries) {
          for (const entry of journalEntry.entries) {
            const account = entry.account;
            const amount = Number(entry.amount);
            
            let multiplier = 1;
            if (account.type === 'ASSET' || account.type === 'EXPENSE') {
              multiplier = entry.type === 'DEBIT' ? 1 : -1;
            } else {
              multiplier = entry.type === 'CREDIT' ? 1 : -1;
            }

            await tx.ledgerAccount.update({
              where: { id: account.id },
              data: { balance: { increment: amount * multiplier } }
            });
          }
        }

        return updatedBatch;
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId: context.tenantId,
            shopId: context.shopId,
            userId: context.userId,
            action: 'PostBatch',
            resource: 'PostingBatch',
            resourceId: result.id,
            traceId: context.traceId || null,
            details: JSON.stringify({
              batchId: payload.batchId,
              journalEntryCount: batch.journalEntries.length
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
        message: error.message || 'Failed to post batch',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
