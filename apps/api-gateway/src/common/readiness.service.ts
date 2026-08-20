import { Injectable } from '@nestjs/common';
import net from 'net';

export interface DependencyTarget {
  name: string;
  host: string;
  port: number;
}

export interface DependencyStatus extends DependencyTarget {
  ok: boolean;
  latencyMs: number;
  error?: string;
}

export interface ReadinessResult {
  status: 'ok' | 'degraded';
  timestamp: string;
  checks: DependencyStatus[];
}

export function summarizeReadiness(checks: DependencyStatus[]): ReadinessResult {
  const healthy = checks.every((c) => c.ok);
  return {
    status: healthy ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    checks,
  };
}

@Injectable()
export class ReadinessService {
  private readonly timeoutMs = Number(process.env.READY_TIMEOUT_MS || 1200);

  private getTargets(): DependencyTarget[] {
    return [
      { name: 'identity', host: '127.0.0.1', port: Number(process.env.IDENTITY_SERVICE_PORT || 3002) },
      { name: 'accounting', host: '127.0.0.1', port: Number(process.env.ACCOUNTING_SERVICE_PORT || 3003) },
      { name: 'inventory', host: '127.0.0.1', port: Number(process.env.INVENTORY_SERVICE_PORT || 3004) },
      { name: 'sales', host: '127.0.0.1', port: Number(process.env.SALES_SERVICE_PORT || 3005) },
      { name: 'treasury', host: '127.0.0.1', port: Number(process.env.TREASURY_SERVICE_PORT || 3006) },
      { name: 'purchase', host: '127.0.0.1', port: Number(process.env.PURCHASE_SERVICE_PORT || 3007) },
      { name: 'tenant', host: '127.0.0.1', port: Number(process.env.TENANT_SERVICE_PORT || 3008) },
      { name: 'supplier', host: '127.0.0.1', port: Number(process.env.SUPPLIER_SERVICE_PORT || 3012) },
      { name: 'customer', host: '127.0.0.1', port: Number(process.env.CUSTOMER_SERVICE_PORT || 3011) },
      { name: 'notification', host: '127.0.0.1', port: Number(process.env.NOTIFICATION_SERVICE_PORT || 3013) },
    ];
  }

  private probe(target: DependencyTarget): Promise<DependencyStatus> {
    return new Promise((resolve) => {
      const started = Date.now();
      const socket = new net.Socket();
      let settled = false;

      const finish = (ok: boolean, error?: string) => {
        if (settled) return;
        settled = true;
        socket.destroy();
        resolve({
          ...target,
          ok,
          latencyMs: Date.now() - started,
          ...(error ? { error } : {}),
        });
      };

      socket.setTimeout(this.timeoutMs);
      socket.once('connect', () => finish(true));
      socket.once('timeout', () => finish(false, `timeout>${this.timeoutMs}ms`));
      socket.once('error', (err: Error) => finish(false, err.message));
      socket.connect(target.port, target.host);
    });
  }

  async check(): Promise<ReadinessResult> {
    const checks = await Promise.all(this.getTargets().map((t) => this.probe(t)));
    return summarizeReadiness(checks);
  }
}
