import { Registry, collectDefaultMetrics, Counter, Histogram, Gauge, Summary } from 'prom-client';

// Create a registry for metrics
export const metricsRegistry = new Registry();

// Collect default Node.js metrics (CPU, memory, etc.)
collectDefaultMetrics({ register: metricsRegistry });

// Custom metrics for the electronic shop application

// HTTP request duration histogram
export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  registers: [metricsRegistry],
});

// HTTP request counter
export const httpRequestCounter = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
  registers: [metricsRegistry],
});

// Command execution duration histogram
export const commandExecutionDuration = new Histogram({
  name: 'command_execution_duration_seconds',
  help: 'Duration of command execution in seconds',
  labelNames: ['command', 'service', 'status'],
  registers: [metricsRegistry],
});

// Command execution counter
export const commandExecutionCounter = new Counter({
  name: 'command_executions_total',
  help: 'Total number of command executions',
  labelNames: ['command', 'service', 'status'],
  registers: [metricsRegistry],
});

// Database query duration histogram
export const dbQueryDuration = new Histogram({
  name: 'db_query_duration_seconds',
  help: 'Duration of database queries in seconds',
  labelNames: ['operation', 'table', 'status'],
  registers: [metricsRegistry],
});

// Database query counter
export const dbQueryCounter = new Counter({
  name: 'db_queries_total',
  help: 'Total number of database queries',
  labelNames: ['operation', 'table', 'status'],
  registers: [metricsRegistry],
});

// Active connections gauge
export const activeConnections = new Gauge({
  name: 'active_connections',
  help: 'Number of active connections',
  labelNames: ['type'],
  registers: [metricsRegistry],
});

// Message queue size gauge
export const messageQueueSize = new Gauge({
  name: 'message_queue_size',
  help: 'Number of messages in queue',
  labelNames: ['queue_name'],
  registers: [metricsRegistry],
});

// Business metrics
export const salesTotal = new Counter({
  name: 'sales_total',
  help: 'Total sales amount',
  labelNames: ['shop_id', 'payment_method'],
  registers: [metricsRegistry],
});

export const inventoryItemsCount = new Gauge({
  name: 'inventory_items_count',
  help: 'Number of inventory items',
  labelNames: ['shop_id', 'status'],
  registers: [metricsRegistry],
});

export const customersCount = new Gauge({
  name: 'customers_count',
  help: 'Number of customers',
  labelNames: ['shop_id'],
  registers: [metricsRegistry],
});

// Error counter
export const errorCounter = new Counter({
  name: 'errors_total',
  help: 'Total number of errors',
  labelNames: ['service', 'error_type'],
  registers: [metricsRegistry],
});

// Helper function to get metrics in Prometheus format
export async function getMetrics(): Promise<string> {
  return await metricsRegistry.metrics();
}

// Helper function to increment HTTP request metrics
export function recordHttpRequest(method: string, route: string, statusCode: number, duration: number) {
  const labels = {
    method,
    route,
    status_code: statusCode.toString(),
  };

  httpRequestCounter.inc(labels);
  httpRequestDuration.observe(labels, duration);
}

// Helper function to increment command execution metrics
export function recordCommandExecution(command: string, service: string, status: string, duration: number) {
  const labels = {
    command,
    service,
    status,
  };

  commandExecutionCounter.inc(labels);
  commandExecutionDuration.observe(labels, duration);
}

// Helper function to increment database query metrics
export function recordDbQuery(operation: string, table: string, status: string, duration: number) {
  const labels = {
    operation,
    table,
    status,
  };

  dbQueryCounter.inc(labels);
  dbQueryDuration.observe(labels, duration);
}

// Helper function to increment error counter
export function recordError(service: string, errorType: string) {
  errorCounter.inc({ service, error_type: errorType });
}
