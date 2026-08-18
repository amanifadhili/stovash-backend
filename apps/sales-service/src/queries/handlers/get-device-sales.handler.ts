import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetDeviceSalesQuery } from '../impl/get-device-sales.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetDeviceSalesQuery)
export class GetDeviceSalesHandler implements IQueryHandler<GetDeviceSalesQuery> {
  async execute(query: GetDeviceSalesQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const inventoryItemId = payload?.inventoryItemId?.trim() || '';
    const serialNumber = payload?.serialNumber?.trim() || '';

    try {
      if (!tenantId) {
        return { status: 'error', traceId, message: 'tenantId is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (!inventoryItemId && !serialNumber) {
        return { status: 'error', traceId, message: 'inventoryItemId or serialNumber is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const itemOr: any[] = [];
      if (inventoryItemId) itemOr.push({ inventoryItemId });
      if (serialNumber) itemOr.push({ serialNumber });

      const saleWhere: any = { tenantId };
      if (shopId) saleWhere.shopId = shopId;

      const [saleItems, returnItems, warranties] = await Promise.all([
        prisma.saleItem.findMany({
          where: { OR: itemOr, sale: saleWhere },
          orderBy: { createdAt: 'asc' },
          include: {
            sale: {
              include: {
                payments: { orderBy: { paidAt: 'asc' } },
              },
            },
          },
        }),
        prisma.saleReturnItem.findMany({
          where: {
            OR: itemOr,
            saleReturn: saleWhere,
          },
          orderBy: { createdAt: 'asc' },
          include: { saleReturn: true },
        }),
        prisma.saleWarranty.findMany({
          where: inventoryItemId
            ? { inventoryItemId, sale: saleWhere }
            : { id: '__none__', sale: saleWhere },
          orderBy: { createdAt: 'asc' },
        }),
      ]);

      return {
        status: 'success',
        traceId,
        data: {
          sales: saleItems.map((row) => ({
            id: row.sale.id,
            orderNumber: row.sale.orderNumber,
            saleDate: row.sale.saleDate,
            customerName: row.sale.customerName,
            paymentStatus: row.sale.paymentStatus,
            commercialStatus: row.sale.commercialStatus,
            amountDue: Number(row.sale.amountDue) || 0,
            notes: row.sale.notes,
            unitPrice: Number(row.unitPrice) || 0,
            unitCost: Number(row.unitCost) || 0,
            additionalCost: Number(row.additionalCost) || 0,
            additionalCostPaymentMethod: row.additionalCostPaymentMethod,
            lineTotal: Number(row.lineTotal || row.total) || 0,
            payments: row.sale.payments,
          })),
          returns: returnItems.map((row) => ({
            id: row.saleReturn.id,
            returnNumber: row.saleReturn.returnNumber,
            createdAt: row.saleReturn.createdAt,
            status: row.saleReturn.status,
            reason: row.saleReturn.reason,
            refundMethod: row.saleReturn.refundMethod,
            approvedRefund: Number(row.approvedRefund || row.saleReturn.approvedRefund || 0),
            refundedAmount: Number(row.refundedAmount || row.saleReturn.refundedAmount || row.refundAmount || row.saleReturn.refundAmount || 0),
            conditionState: row.conditionState,
          })),
          warranties,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch device sales',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
