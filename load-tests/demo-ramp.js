import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

const BASE = __ENV.API_BASE || 'https://api.stovash.com';
const EMAIL = __ENV.K6_EMAIL || 'admin@stovash.local';
const PASSWORD = __ENV.K6_PASSWORD || 'admin123';
const TOKEN = __ENV.API_TOKEN || '';
const SHOP_ID = __ENV.SHOP_ID || '';
const TENANT_ID = __ENV.TENANT_ID || '';

const readLatency = new Trend('read_latency_ms', true);
const errorRate = new Rate('errors');
const rateLimited = new Counter('rate_limited');

export const options = {
  scenarios: {
    ramp_reads: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '1m', target: 20 },
        { duration: '2m', target: 20 },
        { duration: '1m', target: 50 },
        { duration: '2m', target: 50 },
        { duration: '1m', target: 100 },
        { duration: '2m', target: 100 },
        { duration: '1m', target: 0 },
      ],
      gracefulRampDown: '30s',
    },
  },
  thresholds: {
    errors: ['rate<0.10'],
    http_req_failed: ['rate<0.10'],
  },
};

function apiHeaders(token, tenantId, shopId) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    'X-Tenant-ID': tenantId,
    'X-Shop-ID': shopId,
  };
}

function post(path, body, headers, tag) {
  const res = http.post(`${BASE}${path}`, JSON.stringify(body), {
    headers,
    tags: { name: tag },
    timeout: '60s',
  });
  if (res.status === 429) rateLimited.add(1);
  const ok = check(res, {
    [`${tag} ok`]: (r) => r.status === 200,
    [`${tag} success`]: (r) => {
      try {
        return JSON.parse(r.body).status === 'success';
      } catch {
        return false;
      }
    },
  });
  errorRate.add(!ok);
  return res;
}

export function setup() {
  const health = http.get(`${BASE}/health`, { timeout: '30s' });
  check(health, { 'health ok': (r) => r.status === 200 });

  let token = TOKEN;
  let tenantId = TENANT_ID;
  let shopId = SHOP_ID;

  if (!token) {
    const login = post(
      '/api',
      { command: 'LoginUser', payload: { email: EMAIL, password: PASSWORD } },
      { 'Content-Type': 'application/json' },
      'LoginUser-setup',
    );
    const body = login.json();
    token = body?.data?.accessToken;
    tenantId = body?.data?.user?.tenantId;
  }

  if (!shopId && token) {
    const shops = post(
      '/api',
      { command: 'GetTenantShops', payload: {} },
      apiHeaders(token, tenantId, shopId),
      'GetTenantShops-setup',
    );
    shopId = shops.json()?.data?.[0]?.id;
  }

  if (!token || !tenantId || !shopId) {
    throw new Error('setup failed: missing token, tenant, or shop');
  }

  return { token, tenantId, shopId };
}

export default function (data) {
  const headers = apiHeaders(data.token, data.tenantId, data.shopId);

  const t0 = Date.now();
  post('/api', { command: 'GetStockUnits', payload: { limit: 20 } }, headers, 'GetStockUnits');
  readLatency.add(Date.now() - t0);

  const t1 = Date.now();
  post('/api', { command: 'GetTenantShops', payload: {} }, headers, 'GetTenantShops');
  readLatency.add(Date.now() - t1);

  sleep(0.15);
}

export function handleSummary(data) {
  const p95 = data.metrics?.read_latency_ms?.values?.['p(95)'] ?? 'n/a';
  const p99 = data.metrics?.read_latency_ms?.values?.['p(99)'] ?? 'n/a';
  const errs = data.metrics?.errors?.values?.rate ?? 'n/a';
  const rps = data.metrics?.http_reqs?.values?.rate ?? 'n/a';
  const failed = data.metrics?.http_req_failed?.values?.rate ?? 'n/a';
  const rl = data.metrics?.rate_limited?.values?.count ?? 0;
  const maxVus = data.metrics?.vus_max?.values?.max ?? 'n/a';

  const summary = {
    capturedAt: new Date().toISOString(),
    apiBase: BASE,
    maxVus,
    read_p95_ms: p95,
    read_p99_ms: p99,
    error_rate: errs,
    http_failed_rate: failed,
    rps,
    rate_limited_429: rl,
    stages: '0→20 (3m) →50 (3m) →100 (3m) →0',
  };

  return {
    'results/demo-ramp-summary.json': JSON.stringify({ ...data, summary }, null, 2),
    stdout: [
      '=== Demo k6 ramp (20 → 50 → 100 VUs) ===',
      `max_vus=${maxVus} rps=${rps}`,
      `read p95=${p95}ms p99=${p99}ms`,
      `error_rate=${errs} http_failed=${failed} rate_limited_429=${rl}`,
      'Full metrics: load-tests/results/demo-ramp-summary.json',
      '',
    ].join('\n'),
  };
}
