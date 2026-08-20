import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE = __ENV.API_BASE || 'http://127.0.0.1:3001';
const TOKEN = __ENV.API_TOKEN || '';
const SHOP_ID = __ENV.SHOP_ID || '';
const TENANT_ID = __ENV.TENANT_ID || '';

/** Stress until breaking point — run locally only. */
export const options = {
  scenarios: {
    stress: {
      executor: 'ramping-arrival-rate',
      startRate: 20,
      timeUnit: '1s',
      preAllocatedVUs: 50,
      maxVUs: 500,
      stages: [
        { target: 50, duration: '1m' },
        { target: 100, duration: '2m' },
        { target: 200, duration: '2m' },
        { target: 400, duration: '2m' },
      ],
    },
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

export default function () {
  const res = http.post(
    `${BASE}/api`,
    JSON.stringify({ command: 'GetStockUnits', payload: { limit: 10 }, traceId: `stress-${__VU}` }),
    { headers: headers() },
  );
  check(res, { 'not 5xx': (r) => r.status < 500 });
  sleep(0.05);
}

export function handleSummary(data) {
  return { 'load-tests/results/stress-summary.json': JSON.stringify(data, null, 2) };
}
