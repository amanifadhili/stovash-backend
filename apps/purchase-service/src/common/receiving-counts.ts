import { prisma } from '../database/client.js';

/** Conditions that count toward accepted/stockable receiving qty. */
export const STOCKABLE_CONDITIONS = new Set([
  'ACCEPTED',
  'EXCELLENT',
  'GOOD',
  'FAIR',
]);

/**
 * Recomputed purchase item received/accepted/rejected counts from its received
 * units. Only CONFIRMED units count as received — PENDING units are logged but
 * not yet received, and CANCELLED units are excluded entirely.
 */
export async function recomputePurchaseItemCounts(purchaseItemId: string): Promise<void> {
  const receivedItems = await prisma.purchaseReceivedItem.findMany({
    where: { purchaseItemId, status: 'CONFIRMED' },
  });
  const receivedQty = receivedItems.length;
  const acceptedQty = receivedItems.filter((i) => STOCKABLE_CONDITIONS.has(i.condition)).length;
  const rejectedQty = receivedItems.filter((i) => !STOCKABLE_CONDITIONS.has(i.condition)).length;

  await prisma.purchaseItem.update({
    where: { id: purchaseItemId },
    data: { receivedQty, acceptedQty, rejectedQty },
  });
}

/**
 * Unified receiving status rule (used by every handler that touches receiving):
 *   NOT_RECEIVED         — no confirmed units
 *   FULLY_RECEIVED       — accepted units >= ordered units
 *   PARTIALLY_RECEIVED   — anything else
 * Accepted (not raw received) is used so rejected/damaged units can still be
 * replaced by receiving additional units later.
 */
export async function recomputePurchaseReceivingStatus(purchaseId: string): Promise<'NOT_RECEIVED' | 'PARTIALLY_RECEIVED' | 'FULLY_RECEIVED'> {
  const items = await prisma.purchaseItem.findMany({ where: { purchaseId } });
  const totalOrdered = items.reduce((sum, i) => sum + i.orderedQty, 0);
  const totalReceived = items.reduce((sum, i) => sum + i.receivedQty, 0);
  const totalAccepted = items.reduce((sum, i) => sum + i.acceptedQty, 0);

  let status: 'NOT_RECEIVED' | 'PARTIALLY_RECEIVED' | 'FULLY_RECEIVED' = 'NOT_RECEIVED';
  if (totalReceived === 0) status = 'NOT_RECEIVED';
  else if (totalAccepted >= totalOrdered) status = 'FULLY_RECEIVED';
  else status = 'PARTIALLY_RECEIVED';

  await prisma.purchase.update({
    where: { id: purchaseId },
    data: { receivingStatus: status },
  });

  return status;
}

/**
 * Recomputes a purchase item's per-unit acquisition cost as the average landed
 * cost across its CONFIRMED received units (unitAcquisitionCost + additionalCost).
 * Falls back to the existing estimate when no confirmed units exist.
 */
export async function recomputePurchaseItemAcquisitionCost(purchaseItemId: string): Promise<void> {
  const receivedItems = await prisma.purchaseReceivedItem.findMany({
    where: { purchaseItemId, status: 'CONFIRMED' },
  });
  if (receivedItems.length === 0) return;

  const totalLanded = receivedItems.reduce(
    (sum, u) => sum + (u.unitAcquisitionCost || 0) + (u.additionalCost || 0),
    0,
  );
  const acquisitionCost = totalLanded / receivedItems.length;

  await prisma.purchaseItem.update({
    where: { id: purchaseItemId },
    data: { acquisitionCost },
  });
}