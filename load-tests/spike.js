import http from 'k6/http';
import { sleep } from 'k6';

const BASE = __ENV.API_BASE || 'http://127.0.0.1:3001';
const TOKEN = __ENV.API_TOKEN || '';
const SHOP_ID = __ENV.SHOP_ID || '';
const TENANT_ID = __ENV.TENANT_ID || '';
const BASELINE_RPS = Number(__ENV.SUSTAINABLE_RPS || 25);

/** 10× spike for 30s then recovery observation. */
export const options = {
  scenarios: {
    spike: {
      executor: 'constant-arrival-rate',
      rate: BASELINE_RPS * 10,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 100,
      maxVUs: 300,
    },
    recovery: {
      executor: 'constant-arrival-rate',
      rate: BASELINE_RPS,
      timeUnit: '1s',
      duration: '2m',
      startTime: '30s',
      preAllocatedVUs: 20,
      maxVUs: 50,
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
    JSON.stringify({ command: 'GetFinancialOverview', payload: {}, traceId: `spike-${__VU}` }),
    { headers: headers() },
  );
  sleep(0.02);
}

export function handleSummary(data) {
  return { 'load-tests/results/spike-summary.json': JSON.stringify(data, null, 2) };
}
