export const RETURN_CONDITION_TO_STATUS: Record<string, string> = {
  SELLABLE: 'AVAILABLE',
  DAMAGED: 'DAMAGED',
  REQUIRES_REPAIR: 'RETURNED',
  DEFECTIVE: 'RETURNED',
  QUARANTINED: 'RETURNED',
  RETURN_TO_SUPPLIER: 'RETURNED',
};

export function inventoryStatusForReturnCondition(conditionState: string): string {
  return RETURN_CONDITION_TO_STATUS[conditionState] || 'RETURNED';
}
