export const DEFAULT_JSON_LIMIT = process.env.GATEWAY_BODY_LIMIT || '1mb';
export const UPLOAD_JSON_LIMIT = process.env.GATEWAY_UPLOAD_BODY_LIMIT || '25mb';

/** Commands that may carry purchase photos as data URLs. */
export const LARGE_BODY_COMMANDS = new Set([
  'CreatePurchase',
  'AddPurchaseDocument',
  'AddPurchaseItem',
  'UpdatePurchaseItem',
  'AddReceivedItems',
  'ReceivePurchaseUnit',
]);

export function parseByteLimit(limit: string): number {
  const trimmed = limit.trim().toLowerCase();
  const match = trimmed.match(/^(\d+(?:\.\d+)?)(b|kb|mb|gb)?$/);
  if (!match) return 1024 * 1024;
  const n = Number(match[1]);
  const unit = match[2] || 'b';
  const mul = unit === 'gb' ? 1024 ** 3 : unit === 'mb' ? 1024 ** 2 : unit === 'kb' ? 1024 : 1;
  return Math.floor(n * mul);
}

export function peekJsonCommand(buf: Buffer): string {
  const slice = buf.subarray(0, Math.min(buf.length, 4096)).toString('utf8');
  const match = slice.match(/"command"\s*:\s*"([A-Za-z0-9_]+)"/);
  return match?.[1] || '';
}

export function allowOversizedJsonBody(opts: {
  bodyBytes: number;
  defaultLimitBytes: number;
  command: string;
}): boolean {
  if (opts.bodyBytes <= opts.defaultLimitBytes) return true;
  return LARGE_BODY_COMMANDS.has(opts.command);
}
