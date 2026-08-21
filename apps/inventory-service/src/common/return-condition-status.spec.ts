import { inventoryStatusForReturnCondition } from './return-condition-status.js';

describe('return-condition-status', () => {
  it('maps SELLABLE to AVAILABLE and DAMAGED to DAMAGED', () => {
    expect(inventoryStatusForReturnCondition('SELLABLE')).toBe('AVAILABLE');
    expect(inventoryStatusForReturnCondition('DAMAGED')).toBe('DAMAGED');
  });

  it('keeps non-sellable conditions out of AVAILABLE', () => {
    expect(inventoryStatusForReturnCondition('REQUIRES_REPAIR')).toBe('RETURNED');
    expect(inventoryStatusForReturnCondition('DEFECTIVE')).toBe('RETURNED');
    expect(inventoryStatusForReturnCondition('UNKNOWN')).toBe('RETURNED');
  });
});
