import {
  allowOversizedJsonBody,
  parseByteLimit,
  peekJsonCommand,
  LARGE_BODY_COMMANDS,
} from '../../common/json-body-limit.js';

describe('json body limit', () => {
  it('parses kb/mb limits', () => {
    expect(parseByteLimit('1mb')).toBe(1024 * 1024);
    expect(parseByteLimit('25mb')).toBe(25 * 1024 * 1024);
    expect(parseByteLimit('100kb')).toBe(100 * 1024);
  });

  it('peeks command from a JSON prefix', () => {
    const buf = Buffer.from('{"command":"CreatePurchase","payload":{}}');
    expect(peekJsonCommand(buf)).toBe('CreatePurchase');
  });

  it('allows large bodies only for photo commands', () => {
    const defaultLimit = 1024 * 1024;
    expect(
      allowOversizedJsonBody({ bodyBytes: 500, defaultLimitBytes: defaultLimit, command: 'GetStockUnits' }),
    ).toBe(true);
    expect(
      allowOversizedJsonBody({
        bodyBytes: defaultLimit + 1,
        defaultLimitBytes: defaultLimit,
        command: 'GetStockUnits',
      }),
    ).toBe(false);
    expect(
      allowOversizedJsonBody({
        bodyBytes: defaultLimit + 1,
        defaultLimitBytes: defaultLimit,
        command: 'CreatePurchase',
      }),
    ).toBe(true);
    expect(LARGE_BODY_COMMANDS.has('AddPurchaseDocument')).toBe(true);
  });
});
