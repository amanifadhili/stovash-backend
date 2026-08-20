import { isGatewayOwnedPath } from '../../common/gateway-owned-path.js';

describe('isGatewayOwnedPath', () => {
  it('keeps Nest routes off the Vite proxy', () => {
    expect(isGatewayOwnedPath('/api')).toBe(true);
    expect(isGatewayOwnedPath('/api/foo')).toBe(true);
    expect(isGatewayOwnedPath('/health')).toBe(true);
    expect(isGatewayOwnedPath('/metrics')).toBe(true);
    expect(isGatewayOwnedPath('/docs')).toBe(true);
    expect(isGatewayOwnedPath('/docs/swagger-ui')).toBe(true);
  });

  it('does not treat UI paths as gateway-owned', () => {
    expect(isGatewayOwnedPath('/')).toBe(false);
    expect(isGatewayOwnedPath('/robots.txt')).toBe(false);
    expect(isGatewayOwnedPath('/dashboard')).toBe(false);
  });
});
