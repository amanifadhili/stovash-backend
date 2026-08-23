import { firstValueFrom, timeout } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

export function unitCostWithExtras(baseCost: unknown, additionalCost: unknown, quantity: unknown): number {
  const qty = Math.max(1, Number(quantity) || 1);
  return (Number(baseCost) || 0) + (Number(additionalCost) || 0) / qty;
}

export function saleCogsFrancs(
  items: Array<{ unitCost?: unknown; quantity?: unknown }>,
): number {
  return (items ?? []).reduce(
    (sum, item) => sum + (Number(item.unitCost) || 0) * (Number(item.quantity) || 0),
    0,
  );
}

export async function loadInventoryBookCosts(
  client: ClientProxy,
  inventoryItemIds: Array<string | null | undefined>,
  context: Record<string, unknown>,
): Promise<Map<string, number>> {
  const map = new Map<string, number>();
  const ids = [...new Set(inventoryItemIds.map((id) => String(id || '').trim()).filter(Boolean))];
  if (ids.length === 0) return map;
  try {
    const result = await firstValueFrom(
      client.send({ cmd: 'GetInventoryBookCosts' }, { payload: { inventoryItemIds: ids }, context }).pipe(timeout(15000)),
    );
    const rows = result?.data?.items ?? [];
    for (const row of rows) {
      if (!row?.id) continue;
      const book = Number(row.bookCost);
      if (Number.isFinite(book)) map.set(String(row.id), book);
    }
  } catch {
    // Confirm/create fall back to the client unitCost when inventory is unreachable.
  }
  return map;
}
