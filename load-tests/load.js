import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

const BASE = __ENV.API_BASE || 'http://127.0.0.1:3001';
const TOKEN = __ENV.API_TOKEN || '';
const SHOP_ID = __ENV.SHOP_ID || '';
const TENANT_ID = __ENV.TENANT_ID || '';

const readLatency = new Trend('read_latency_ms');
const writeLatency = new Trend('write_latency_ms');
const errorRate = new Rate('errors');

export const options = {
  scenarios: {
    load: {
      executor: 'ramping-arrival-rate',
      startRate: 5,
      timeUnit: '1s',
      preAllocatedVUs: 20,
      maxVUs: 100,
      stages: [
        { target: 10, duration: '1m' },
        { target: 25, duration: '2m' },
        { target: 50, duration: '2m' },
        { target: 75, duration: '2m' },
      ],
    },
  },
  thresholds: {
    read_latency_ms: ['p(95)<400'],
    errors: ['rate<0.001'],
  },
};

function headers() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
    'X-Tenant-ID': TENANT_ID,
    'X-Shop-ID': SHOP_ID,
  };
}

function post(command, payload) {
  const res = http.post(
    `${BASE}/api`,
    JSON.stringify({ command, payload, traceId: `k6-${Date.now()}` }),
    { headers: headers(), tags: { command } },
  );
  const ok = check(res, {
    'status 200': (r) => r.status === 200,
    'envelope success': (r) => {
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

export default function () {
  const t0 = Date.now();
  const read = post('GetStockUnits', { limit: 20 });
  readLatency.add(Date.now() - t0);

  const t1 = Date.now();
  post('GetFinancialOverview', {});
  readLatency.add(Date.now() - t1);

  sleep(0.1);
}

export function handleSummary(data) {
  return {
    'load-tests/results/load-summary.json': JSON.stringify(data, null, 2),
    stdout: textSummary(data),
  };
}

function textSummary(data) {
  const p95 = data.metrics?.read_latency_ms?.values?.['p(95)'] ?? 'n/a';
  const errs = data.metrics?.errors?.values?.rate ?? 'n/a';
  return `Load test complete. read p95=${p95}ms error_rate=${errs}\n`;
}
