import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePurchaseCommand } from '../impl/create-purchase.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { v4 as uuidv4 } from 'uuid';
import { actorOf } from '../../common/actor.js';
import { firstValueFrom } from 'rxjs';
import { Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@CommandHandler(CreatePurchaseCommand)
export class CreatePurchaseHandler extends BaseCommandHandler<CreatePurchaseCommand> {
  private readonly logger = new Logger(CreatePurchaseHandler.name);

  constructor(
    @Inject('SUPPLIER_SERVICE') private readonly supplierClient: ClientProxy,
  ) {
    super();
  }

  async execute(command: CreatePurchaseCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      let {
        supplierId,
        supplierName,
        supplierContact,
        supplierAddress,
        supplierTaxId,
        purchaseDate,
        supplierInvoiceNo,
        currency = 'RWF',
        exchangeRate = 1.0,
        notes,
      } = payload;
      const createdById = userId;
      const createdByName = userName;

      // Validate the supplier against the system (supplier-service) when one is
      // referenced, and sync the stored snapshot from the master record.
      if (supplierId) {
        const supplierResp: ICommandResponse<any> = await firstValueFrom(
          this.supplierClient.send(
            { cmd: 'GetSupplier' },
            { payload: { id: supplierId }, context },
          ),
        );

        if (!supplierResp || supplierResp.status !== 'success' || !supplierResp.data) {
          return {
            status: 'error',
            traceId,
            message: 'Supplier not found in the system for this tenant',
            errorCode: ErrorCode.VALIDATION_ERROR,
          };
        }

        const supplier = supplierResp.data;
        supplierName = supplier.name;
        supplierContact = supplier.phone || supplier.email || supplierContact;
        supplierAddress = supplier.address || supplierAddress;
      }

      // Generate a unique, gap-safe purchase number for the year. Each attempt
      // is its OWN transaction; on a (rare) unique-constraint clash we re-read
      // the max and try the next number. (A single $transaction cannot retry
      // after an error in Postgres — the tx is aborted, hence the loop here.)
      const date = purchaseDate ? new Date(purchaseDate) : new Date();
      const year = date.getFullYear();
      const prefix = `PUR-${year}-`;

      let purchase: any = null;
      for (let attempt = 0; attempt < 10 && !purchase; attempt++) {
        const last = await prisma.purchase.findFirst({
          where: { purchaseNumber: { startsWith: prefix } },
          orderBy: { purchaseNumber: 'desc' },
          select: { purchaseNumber: true },
        });
        let nextNumber = 1;
        if (last) {
          const parsed = parseInt(String(last.purchaseNumber).split('-')[2] || '0', 10);
          if (!Number.isNaN(parsed)) nextNumber = parsed + 1;
        }
        const purchaseNumber = `${prefix}${String(nextNumber).padStart(6, '0')}`;
        try {
          purchase = await prisma.purchase.create({
            data: {
              tenantId,
              shopId,
              purchaseNumber,
              supplierId,
              supplierName,
              supplierContact,
              supplierAddress,
              supplierTaxId,
              purchaseDate: date,
              supplierInvoiceNo,
              currency,
              exchangeRate,
              commercialStatus: 'DRAFT',
              receivingStatus: 'NOT_RECEIVED',
              paymentStatus: 'UNPAID',
              accountingStatus: 'UNPOSTED',
              subtotal: 0,
              discountTotal: 0,
              taxTotal: 0,
              otherCostTotal: 0,
              grandTotal: 0,
              amountPaid: 0,
              amountOutstanding: 0,
              notes,
              createdById,
            },
          });
        } catch (createErr: any) {
          if (createErr?.code === 'P2002') continue;
          throw createErr;
        }
      }

      if (!purchase) {
        return {
          status: 'error',
          traceId,
          message: 'Unable to generate a unique purchase number',
          errorCode: ErrorCode.INTERNAL_ERROR,
        };
      }

      // Create history entry
      await prisma.purchaseHistory.create({
        data: {
          purchaseId: purchase.id,
          eventType: 'CREATED',
          eventData: JSON.stringify({ purchaseNumber: purchase.purchaseNumber, supplierName, createdBy: createdByName }),
          userId: createdById,
          userName: createdByName,
          traceId,
        },
      });

      // Audit log
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId: createdById,
          action: 'CreatePurchase',
          resource: 'Purchase',
          resourceId: purchase.id,
          traceId,
          details: JSON.stringify({ purchaseNumber: purchase.purchaseNumber, supplierName }),
        },
      });

      return {
        status: 'success',
        traceId,
        data: purchase,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create purchase',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}