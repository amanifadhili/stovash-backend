import { timingSafeEqual } from 'crypto';

export function extractMetricsToken(headers: Record<string, unknown>): string {
  const metricsHeader = headers['x-metrics-token'] || headers['X-Metrics-Token'];
  if (typeof metricsHeader === 'string' && metricsHeader.trim()) {
    return metricsHeader.trim();
  }
  const auth = headers.authorization || headers.Authorization;
  if (typeof auth === 'string' && auth.startsWith('Bearer ')) {
    return auth.slice('Bearer '.length).trim();
  }
  return '';
}

function tokensMatch(provided: string, expected: string): boolean {
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

/**
 * /metrics is public today and leaks process stats. Fail closed in production:
 * require METRICS_TOKEN. Local/dev with no token stays open so `npm run dev` works.
 *
 * Do not allow "localhost" bypass: nginx on the same VPS makes every public
 * request look like 127.0.0.1 to the Node process.
 */
export function canAccessMetrics(opts: {
  nodeEnv: string;
  metricsToken: string;
  providedToken: string;
}): boolean {
  const expected = opts.metricsToken.trim();
  if (expected) {
    return tokensMatch(opts.providedToken, expected);
  }
  return opts.nodeEnv !== 'production';
}
