/// <reference types="jest" />

/**
 * CBE Phase 1 baseline: name the 30 ratified scenarios.
 * Implementation is later phases. Skip is the agreed Phase 1 state.
 */
const SCENARIOS: Array<{ n: number; name: string; phase: number }> = [
  { n: 1, name: 'full cash sale', phase: 3 },
  { n: 2, name: 'full MoMo sale', phase: 3 },
  { n: 3, name: 'full bank sale', phase: 3 },
  { n: 4, name: 'mixed 200k Cash + 150k MoMo + 150k Bank on 500k sale', phase: 3 },
  { n: 5, name: 'partial payment', phase: 3 },
  { n: 6, name: 'later payment', phase: 3 },
  { n: 7, name: 'credit sale — economics without requiring cash', phase: 2 },
  { n: 8, name: 'unpaid purchase: stock in, AP > 0, treasury unchanged', phase: 4 },
  { n: 9, name: 'partial/full supplier payment', phase: 4 },
  { n: 10, name: 'general expense (two-step cash PR Bank → Operational → payee)', phase: 7 },
  { n: 11, name: 'petty cash worker advance (not expense)', phase: 7 },
  { n: 12, name: 'worker repayment', phase: 7 },
  { n: 13, name: 'petty minor expense', phase: 7 },
  { n: 14, name: 'profit transfer (manager-confirmed)', phase: 7 },
  { n: 15, name: 'profit transfer cap / insufficient Operational cash', phase: 7 },
  { n: 16, name: 'profit → Operational loan', phase: 7 },
  { n: 17, name: 'capital → Operational loan', phase: 7 },
  { n: 18, name: 'loan repayment', phase: 7 },
  { n: 19, name: 'external loan received', phase: 7 },
  { n: 20, name: 'external repayment (principal vs interest)', phase: 7 },
  { n: 21, name: 'profit → capital growth (no liability)', phase: 7 },
  { n: 22, name: 'refund with stock return', phase: 8 },
  { n: 23, name: 'goodwill refund', phase: 8 },
  { n: 24, name: 'same-day posted correction (new row; original 100k +20k → effective 120k)', phase: 8 },
  { n: 25, name: 'previous-day correction', phase: 8 },
  { n: 26, name: 'recon shortage', phase: 9 },
  { n: 27, name: 'recon surplus', phase: 9 },
  { n: 28, name: 'duplicate payment request → one movement', phase: 3 },
  { n: 29, name: 'timeout retry → one movement', phase: 3 },
  { n: 30, name: 'partial failure during ConfirmSale (retry; no double stock/journal)', phase: 8 },
];

describe('CBE scenarios 1–30 (Phase 1 baseline — skipped until owning phase)', () => {
  it('registers all thirty scenario names', () => {
    expect(SCENARIOS).toHaveLength(30);
    expect(SCENARIOS.map((s) => s.n)).toEqual([...Array(30)].map((_, i) => i + 1));
  });

  for (const scenario of SCENARIOS) {
    it.skip(`scenario ${scenario.n}: ${scenario.name} (CBE phase ${scenario.phase})`, () => {
      throw new Error(`Not implemented until CBE phase ${scenario.phase}`);
    });
  }
});
