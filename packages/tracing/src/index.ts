import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

// Initialize OpenTelemetry tracing with Jaeger exporter
export function initializeTracing(serviceName: string) {
  const resource = Resource.default().merge(
    new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
      [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
    })
  );

  const provider = new NodeTracerProvider({
    resource,
  });

  // Configure Jaeger exporter
  const exporter = new JaegerExporter({
    endpoint: process.env.JAEGER_ENDPOINT || 'http://localhost:14268/api/traces',
  });

  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  // Register the provider globally
  provider.register();

  // Register instrumentations
  registerInstrumentations({
    instrumentations: [
      new HttpInstrumentation(),
    ],
  });

  console.log(`Tracing initialized for ${serviceName} with Jaeger exporter`);
}

// Helper function to create a span context for manual tracing
export interface SpanContext {
  traceId: string;
  spanId: string;
  sampled: boolean;
}

export function extractSpanContext(headers: Record<string, string>): SpanContext | null {
  // Extract trace context from headers (e.g., from incoming HTTP requests)
  const traceParent = headers['traceparent'];
  if (!traceParent) return null;

  const parts = traceParent.split('-');
  if (parts.length < 3) return null;

  return {
    traceId: parts[1],
    spanId: parts[2],
    sampled: parts[0] === '01',
  };
}

export function injectSpanContext(spanContext: SpanContext): Record<string, string> {
  // Inject trace context into headers (e.g., for outgoing HTTP requests)
  const sampled = spanContext.sampled ? '01' : '00';
  return {
    traceparent: `00-${spanContext.traceId}-${spanContext.spanId}-${sampled}`,
  };
}

// Helper to get trace ID from context
export function getTraceId(context: any): string {
  return context?.traceId || 'unknown';
}
