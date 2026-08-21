import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { GetStockMovementsQuery } from '../impl/get-stock-movements.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

const RENTAL_REFERENCE_TYPES = new Set([
  'INWARD_RENTAL',
  'INWARD_RENTAL_HOLD',
  'OUTWARD_RENTAL',
  'OUTWARD_RENTAL_RETURN',
  'INWARD_RENTAL_RETURN',
  'INWARD_RENTAL_SALE',
  'LEND_OUT_SETTLE',
]);

const SALE_REFERENCE_TYPES = new Set(['SALE', 'INWARD_RENTAL_SALE']);

@QueryHandler(GetStockMovementsQuery)
export class GetStockMovementsHandler implements IQueryHandler<GetStockMovementsQuery> {
  constructor(@Inject('SALES_SERVICE') private readonly salesClient: ClientProxy) {}

  async execute(query: GetStockMovementsQuery): Promise<ICommandResponse<any>> {
    const { payload = {}, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload.shopId || context?.shopId;

    try {
      if (!tenantId) {
        return { status: 'error', traceId, message: 'tenantId is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const where: any = { tenantId };
      if (shopId) where.shopId = shopId;
      if (payload.movementType) where.movementType = payload.movementType;
      if (payload.referenceType) where.referenceType = payload.referenceType;

      if (payload.from || payload.to) {
        where.createdAt = {};
        if (payload.from) {
          const from = new Date(payload.from);
          if (!Number.isNaN(from.getTime())) where.createdAt.gte = from;
        }
        if (payload.to) {
          const to = new Date(payload.to);
          if (!Number.isNaN(to.getTime())) where.createdAt.lte = to;
        }
        if (!where.createdAt.gte && !where.createdAt.lte) delete where.createdAt;
      }

      const take = payload.limit && payload.limit > 0 ? Math.min(payload.limit, 500) : 100;
      const skip = payload.offset && payload.offset > 0 ? payload.offset : 0;
      const includeCount = payload.includeCount === true;

      const rows = await prisma.inventoryMovement.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take,
        skip,
      });
      const count = includeCount ? await prisma.inventoryMovement.count({ where }) : rows.length;

      const productIds = [...new Set(rows.map((r) => r.productId).filter(Boolean))] as string[];
      const itemIds = [...new Set(rows.map((r) => r.inventoryItemId).filter(Boolean))] as string[];
      const rentalIds = [
        ...new Set(
          rows
            .filter((r) => r.referenceId && r.referenceType && RENTAL_REFERENCE_TYPES.has(r.referenceType))
            .map((r) => r.referenceId as string)
        ),
      ];
      const customerIds = [...new Set(rows.map((r) => r.customerId).filter(Boolean))] as string[];

      const [products, items, rentals, contacts] = await Promise.all([
        productIds.length
          ? prisma.product.findMany({
              where: { tenantId, id: { in: productIds } },
              select: { id: true, name: true, sku: true },
            })
          : Promise.resolve([]),
        itemIds.length
          ? prisma.inventoryItem.findMany({
              where: { tenantId, id: { in: itemIds } },
              select: {
                id: true,
                serialNumber: true,
                name: true,
                productId: true,
                product: { select: { id: true, name: true, sku: true } },
              },
            })
          : Promise.resolve([]),
        rentalIds.length
          ? prisma.rentalAgreement.findMany({
              where: { tenantId, id: { in: rentalIds } },
              select: { id: true, personName: true, personPhone: true },
            })
          : Promise.resolve([]),
        customerIds.length
          ? prisma.contact.findMany({
              where: { tenantId, id: { in: customerIds } },
              select: { id: true, name: true, phone: true },
            })
          : Promise.resolve([]),
      ]);

      const productById = new Map(products.map((p) => [p.id, p]));
      const itemById = new Map(items.map((i) => [i.id, i]));
      const rentalById = new Map(rentals.map((r) => [r.id, r]));
      const contactById = new Map(contacts.map((c) => [c.id, c]));

      // Fallback: some create paths omit referenceId — map by inventory item.
      const itemIdsNeedingRental = [
        ...new Set(
          rows
            .filter(
              (r) =>
                !r.referenceId &&
                r.inventoryItemId &&
                r.referenceType &&
                RENTAL_REFERENCE_TYPES.has(r.referenceType)
            )
            .map((r) => r.inventoryItemId as string)
        ),
      ];
      const rentalsByItem =
        itemIdsNeedingRental.length > 0
          ? await prisma.rentalAgreement.findMany({
              where: { tenantId, inventoryItemId: { in: itemIdsNeedingRental } },
              orderBy: { createdAt: 'desc' },
              select: { id: true, inventoryItemId: true, personName: true, personPhone: true },
            })
          : [];
      const rentalByItemId = new Map<string, (typeof rentalsByItem)[number]>();
      for (const r of rentalsByItem) {
        if (r.inventoryItemId && !rentalByItemId.has(r.inventoryItemId)) {
          rentalByItemId.set(r.inventoryItemId, r);
        }
      }

      const saleIdsNeedingParty = [
        ...new Set(
          rows
            .filter(
              (r) =>
                r.referenceId &&
                r.referenceType &&
                SALE_REFERENCE_TYPES.has(r.referenceType) &&
                !(r as { counterpartyName?: string | null }).counterpartyName
            )
            .map((r) => r.referenceId as string)
        ),
      ];
      const returnIdsNeedingParty = [
        ...new Set(
          rows
            .filter(
              (r) =>
                r.referenceId &&
                r.referenceType === 'SALE_RETURN' &&
                !(r as { counterpartyName?: string | null }).counterpartyName
            )
            .map((r) => r.referenceId as string)
        ),
      ];

      const saleNameById = new Map<string, string>();
      const returnNameById = new Map<string, string>();
      try {
        const enrichJobs: Promise<void>[] = [];
        if (saleIdsNeedingParty.length > 0) {
          enrichJobs.push(
            firstValueFrom(
              this.salesClient
                .send(
                  { cmd: 'GetSales' },
                  {
                    payload: {
                      ids: saleIdsNeedingParty,
                      page: 1,
                      pageSize: Math.min(saleIdsNeedingParty.length, 500),
                    },
                    context,
                  },
                )
                .pipe(timeout(8000)),
            ).then((res: any) => {
              for (const s of res?.data?.sales || []) {
                if (s?.id && s.customerName) saleNameById.set(s.id, String(s.customerName));
              }
            }),
          );
        }
        if (returnIdsNeedingParty.length > 0) {
          enrichJobs.push(
            firstValueFrom(
              this.salesClient
                .send(
                  { cmd: 'GetSaleReturnsByIds' },
                  { payload: { ids: returnIdsNeedingParty }, context },
                )
                .pipe(timeout(8000)),
            ).then((res: any) => {
              for (const r of res?.data?.returns || []) {
                if (r?.id && r.customerName) returnNameById.set(r.id, String(r.customerName));
              }
            }),
          );
        }
        await Promise.all(enrichJobs);
      } catch {
        // Party enrichment is best-effort; Activity still loads without names.
      }

      let movements = rows.map((row) => {
        const item = row.inventoryItemId ? itemById.get(row.inventoryItemId) : null;
        const product =
          (row.productId ? productById.get(row.productId) : null) ||
          item?.product ||
          null;

        const storedName = (row as { counterpartyName?: string | null }).counterpartyName || null;
        const storedPhone = (row as { counterpartyPhone?: string | null }).counterpartyPhone || null;

        let counterpartyName: string | null = storedName;
        let counterpartyPhone: string | null = storedPhone;

        if (!counterpartyName && row.referenceType && RENTAL_REFERENCE_TYPES.has(row.referenceType)) {
          const rental =
            (row.referenceId ? rentalById.get(row.referenceId) : null) ||
            (row.inventoryItemId ? rentalByItemId.get(row.inventoryItemId) : null) ||
            null;
          if (rental) {
            counterpartyName = rental.personName || null;
            counterpartyPhone = counterpartyPhone || rental.personPhone || null;
          }
        }

        if (!counterpartyName && row.customerId) {
          const contact = contactById.get(row.customerId);
          if (contact) {
            counterpartyName = contact.name || null;
            counterpartyPhone = counterpartyPhone || contact.phone || null;
          }
        }

        if (!counterpartyName && row.referenceId && row.referenceType && SALE_REFERENCE_TYPES.has(row.referenceType)) {
          counterpartyName = saleNameById.get(row.referenceId) || null;
        }
        if (!counterpartyName && row.referenceId && row.referenceType === 'SALE_RETURN') {
          counterpartyName = returnNameById.get(row.referenceId) || null;
        }

        if (
          !counterpartyName &&
          (row.referenceType === 'SALE' ||
            row.referenceType === 'SALE_RETURN' ||
            row.referenceType === 'INWARD_RENTAL_SALE')
        ) {
          counterpartyName = 'Walk-in';
        } else if (!counterpartyName && (row.referenceType === 'PURCHASE' || row.referenceType === 'GOODS_RECEIPT')) {
          counterpartyName = 'Purchase';
        } else if (!counterpartyName && row.referenceType === 'INVENTORY_TRANSFER') {
          counterpartyName = 'Shop transfer';
        }

        return {
          id: row.id,
          createdAt: row.createdAt,
          movementType: row.movementType,
          referenceType: row.referenceType,
          referenceId: row.referenceId,
          quantity: row.quantity,
          productId: product?.id || row.productId || item?.productId || null,
          productName: product?.name || item?.name || null,
          productSku: product?.sku || null,
          inventoryItemId: row.inventoryItemId,
          serialNumber: item?.serialNumber || null,
          customerId: row.customerId,
          counterpartyName,
          counterpartyPhone,
          createdBy: row.createdBy,
          shopId: row.shopId,
        };
      });

      const search = payload.search?.trim().toLowerCase();
      if (search) {
        movements = movements.filter((m) => {
          const hay = [
            m.productName,
            m.productSku,
            m.serialNumber,
            m.counterpartyName,
            m.referenceType,
            m.referenceId,
            m.movementType,
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
          return hay.includes(search);
        });
      }

      return {
        status: 'success',
        traceId,
        data: { movements, count: search ? movements.length : count },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch stock movements',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
