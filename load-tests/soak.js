import http from 'k6/http';
import { sleep } from 'k6';

const BASE = __ENV.API_BASE || 'http://127.0.0.1:3001';
const TOKEN = __ENV.API_TOKEN || '';
const SHOP_ID = __ENV.SHOP_ID || '';
const TENANT_ID = __ENV.TENANT_ID || '';
const SOAK_RPS = Number(__ENV.SOAK_RPS || 17);

/** 30 min at ~70% of measured sustainable RPS (default 17 when sustainable=25). */
export const options = {
  scenarios: {
    soak: {
      executor: 'constant-arrival-rate',
      rate: SOAK_RPS,
      timeUnit: '1s',
      duration: __ENV.SOAK_DURATION || '30m',
      preAllocatedVUs: 30,
      maxVUs: 60,
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
  http.post(
    `${BASE}/api`,
    JSON.stringify({ command: 'GetStockUnits', payload: { limit: 15 }, traceId: `soak-${__VU}` }),
    { headers: headers() },
  );
  sleep(0.05);
}

export function handleSummary(data) {
  return { 'load-tests/results/soak-summary.json': JSON.stringify(data, null, 2) };
}
