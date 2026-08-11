import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePostingBatchCommand } from '../impl/create-posting-batch.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreatePostingBatchCommand)
export class CreatePostingBatchHandler extends BaseCommandHandler<CreatePostingBatchCommand> {
  async execute(command: CreatePostingBatchCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.name || !payload?.journalEntryIds || payload.journalEntryIds.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Batch name and journal entry IDs are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify all journal entries exist and are in DRAFT status
      const journalEntries = await prisma.journalEntry.findMany({
        where: {
          id: { in: payload.journalEntryIds },
          tenantId: context.tenantId,
          shopId: context.shopId
        }
      });

      if (journalEntries.length !== payload.journalEntryIds.length) {
        return {
          status: 'error',
          traceId,
          message: 'One or more journal entries not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      const nonDraftEntries = journalEntries.filter(je => je.status !== 'DRAFT');
      if (nonDraftEntries.length > 0) {
        return {
          status: 'error',
          traceId,
          message: 'Only DRAFT journal entries can be added to a batch',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
        };
      }

      // Get work period from first journal entry
      const workPeriodId = journalEntries[0].workPeriodId;

      const result = await prisma.$transaction(async (tx) => {
        // Create posting batch
        const batch = await tx.postingBatch.create({
          data: {
            tenantId: context.tenantId,
            shopId: context.shopId,
            workPeriodId,
            name: payload.name,
            description: payload.description,
            status: 'DRAFT',
            postedBy: context.userId
          }
        });

        // Update journal entries to reference the batch
        await tx.journalEntry.updateMany({
          where: {
            id: { in: payload.journalEntryIds }
          },
          data: {
            batchId: batch.id
          }
        });

        return batch;
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId: context.tenantId,
            shopId: context.shopId,
            userId: context.userId,
            action: 'CreatePostingBatch',
            resource: 'PostingBatch',
            resourceId: result.id,
            traceId: context.traceId || null,
            details: JSON.stringify({
              name: payload.name,
              journalEntryCount: payload.journalEntryIds.length
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
        message: error.message || 'Failed to create posting batch',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
