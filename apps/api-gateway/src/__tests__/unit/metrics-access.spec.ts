import { canAccessMetrics, extractMetricsToken } from '../../common/auth/metrics-access.js';

describe('metrics access', () => {
  it('extracts Bearer and X-Metrics-Token', () => {
    expect(extractMetricsToken({ authorization: 'Bearer abc' })).toBe('abc');
    expect(extractMetricsToken({ 'x-metrics-token': 'xyz' })).toBe('xyz');
    expect(extractMetricsToken({})).toBe('');
  });

  it('requires a matching token when METRICS_TOKEN is set', () => {
    expect(
      canAccessMetrics({ nodeEnv: 'production', metricsToken: 'secret', providedToken: 'secret' }),
    ).toBe(true);
    expect(
      canAccessMetrics({ nodeEnv: 'production', metricsToken: 'secret', providedToken: 'wrong' }),
    ).toBe(false);
    expect(
      canAccessMetrics({ nodeEnv: 'production', metricsToken: 'secret', providedToken: '' }),
    ).toBe(false);
  });

  it('denies unauthenticated metrics in production when no token is configured', () => {
    expect(
      canAccessMetrics({ nodeEnv: 'production', metricsToken: '', providedToken: '' }),
    ).toBe(false);
  });

  it('allows unauthenticated metrics in development when no token is configured', () => {
    expect(
      canAccessMetrics({ nodeEnv: 'development', metricsToken: '', providedToken: '' }),
    ).toBe(true);
  });
});
