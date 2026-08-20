/** Paths Nest owns — never forward these to a local Vite/dev UI proxy. */
export function isGatewayOwnedPath(url: string): boolean {
  return (
    url.startsWith('/api') ||
    url.startsWith('/health') ||
    url.startsWith('/ready') ||
    url.startsWith('/metrics') ||
    url.startsWith('/docs')
  );
}
