import { summarizeReadiness, type DependencyStatus } from '../../common/readiness.service.js';

describe('summarizeReadiness', () => {
  it('returns ok when all dependencies are healthy', () => {
    const checks: DependencyStatus[] = [
      { name: 'identity', host: '127.0.0.1', port: 3002, ok: true, latencyMs: 5 },
      { name: 'inventory', host: '127.0.0.1', port: 3004, ok: true, latencyMs: 7 },
    ];
    const result = summarizeReadiness(checks);
    expect(result.status).toBe('ok');
    expect(result.checks).toHaveLength(2);
  });

  it('returns degraded when any dependency fails', () => {
    const checks: DependencyStatus[] = [
      { name: 'identity', host: '127.0.0.1', port: 3002, ok: true, latencyMs: 5 },
      { name: 'inventory', host: '127.0.0.1', port: 3004, ok: false, latencyMs: 1200, error: 'timeout' },
    ];
    const result = summarizeReadiness(checks);
    expect(result.status).toBe('degraded');
    expect(result.checks.find((c) => c.name === 'inventory')?.ok).toBe(false);
  });
});
