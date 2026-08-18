/**
 * Demo catalog photos served from the Next app (`stovash/public/demo`).
 * Paths are site-root relative so <img src> resolves on the frontend origin.
 */
const JPEG_SHORTS = new Set(['ACC-MOUSE', 'ACC-BAG', 'ACC-SSD-1TB']);

export function demoImageUrl(sku: string): string {
  const short = sku.replace(/^STOVASH-DEMO-/, '');
  const ext = JPEG_SHORTS.has(short) ? 'jpg' : 'webp';
  return `/demo/${short}.${ext}`;
}
