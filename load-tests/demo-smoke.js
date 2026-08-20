import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

const BASE = __ENV.API_BASE || 'https://api.stovash.com';
const EMAIL = __ENV.K6_EMAIL || 'admin@stovash.local';
const PASSWORD = __ENV.K6_PASSWORD || 'admin123';
const TOKEN = __ENV.API_TOKEN || '';
const SHOP_ID = __ENV.SHOP_ID || '';
const TENANT_ID = __ENV.TENANT_ID || '';

const readLatency = new Trend('read_latency_ms');
const errorRate = new Rate('errors');

export const options = {
  scenarios: {
    demo_smoke: {
      executor: 'constant-vus',
      vus: 5,
      duration: '2m',
    },
  },
  thresholds: {
    read_latency_ms: ['p(95)<2000'],
    errors: ['rate<0.05'],
    http_req_failed: ['rate<0.05'],
  },
};

function apiHeaders(token) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    'X-Tenant-ID': TENANT_ID,
    'X-Shop-ID': SHOP_ID,
  };
}

function post(path, body, headers, tag) {
  const res = http.post(`${BASE}${path}`, JSON.stringify(body), {
    headers,
    tags: { name: tag },
  });
  const ok = check(res, {
    [`${tag} status`]: (r) => r.status >= 200 && r.status < 500,
  });
  errorRate.add(!ok);
  return res;
}

export function setup() {
  const health = http.get(`${BASE}/health`);
  check(health, { 'health ok': (r) => r.status === 200 });

  let token = TOKEN;
  let tenantId = TENANT_ID;
  let shopId = SHOP_ID;

  if (!token) {
    const login = post(
      '/api',
      { command: 'LoginUser', payload: { email: EMAIL, password: PASSWORD } },
      { 'Content-Type': 'application/json' },
      'LoginUser',
    );
    const body = login.json();
    token = body?.data?.accessToken;
    tenantId = body?.data?.user?.tenantId;
  }

  if (!shopId && token) {
    const shops = post(
      '/api',
      { command: 'GetTenantShops', payload: {} },
      apiHeaders(token),
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
  const headers = apiHeaders(data.token);

  const t0 = Date.now();
  post('/api', { command: 'GetStockUnits', payload: { limit: 20 } }, headers, 'GetStockUnits');
  readLatency.add(Date.now() - t0);

  const t1 = Date.now();
  post('/api', { command: 'GetTenantShops', payload: {} }, headers, 'GetTenantShops');
  readLatency.add(Date.now() - t1);

  sleep(0.2);
}

export function handleSummary(data) {
  const p95 = data.metrics?.read_latency_ms?.values?.['p(95)'] ?? 'n/a';
  const errs = data.metrics?.errors?.values?.rate ?? 'n/a';
  const rps = data.metrics?.http_reqs?.values?.rate ?? 'n/a';
  return {
    'results/demo-smoke-summary.json': JSON.stringify(data, null, 2),
    stdout: `Demo smoke load: p95=${p95}ms error_rate=${errs} rps=${rps}\n`,
  };
}
