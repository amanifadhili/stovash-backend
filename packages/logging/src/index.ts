import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';
import DailyRotateFile from 'winston-daily-rotate-file';

// Log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Log colors
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

// Log format
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json()
);

// Console format for development
const consoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// Transports
const transports: winston.transport[] = [];

// Console transport (always enabled)
transports.push(
  new winston.transports.Console({
    format: process.env.NODE_ENV === 'production' ? format : consoleFormat,
  })
);

// File transport with daily rotation
if (process.env.LOG_FILE_ENABLED === 'true') {
  transports.push(
    new DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      format,
    })
  );

  transports.push(
    new DailyRotateFile({
      level: 'error',
      filename: 'logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
      format,
    })
  );
}

// Elasticsearch transport for ELK stack
if (process.env.ELK_ENABLED === 'true') {
  const esTransport = new ElasticsearchTransport({
    level: 'info',
    clientOpts: {
      node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
      auth: process.env.ELASTICSEARCH_AUTH
        ? {
            username: process.env.ELASTICSEARCH_USERNAME || '',
            password: process.env.ELASTICSEARCH_PASSWORD || '',
          }
        : undefined,
    },
    index: 'electronic-shop-logs',
    dataStream: true,
  });

  transports.push(esTransport);
}

// Create logger
export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  levels,
  format,
  transports,
  exitOnError: false,
});

// Helper functions for structured logging
export interface LogContext {
  service: string;
  tenantId?: string;
  shopId?: string;
  userId?: string;
  traceId?: string;
  spanId?: string;
  [key: string]: any;
}

export function logInfo(message: string, context?: LogContext) {
  logger.info(message, context);
}

export function logError(message: string, error?: Error, context?: LogContext) {
  logger.error(message, {
    ...context,
    error: error ? {
      message: error.message,
      stack: error.stack,
      name: error.name,
    } : undefined,
  });
}

export function logWarn(message: string, context?: LogContext) {
  logger.warn(message, context);
}

export function logDebug(message: string, context?: LogContext) {
  logger.debug(message, context);
}

export function logHttp(message: string, context?: LogContext) {
  logger.http(message, context);
}

// Create a child logger with additional context
export function createChildLogger(context: LogContext) {
  return logger.child(context);
}

// Stream for Morgan HTTP logger
export const stream = {
  write: (message: string) => {
    logger.http(message.trim());
  },
};

export default logger;
