import Redis from 'ioredis';

/**
 * Cache configuration
 */
export interface CacheConfig {
  host: string;
  port: number;
  password?: string;
  db?: number;
  keyPrefix?: string;
  ttl?: number;
}

/**
 * Cache service for Redis operations
 */
export class CacheService {
  private client: Redis | null = null;
  private config: CacheConfig;
  private defaultTTL: number;

  constructor(config: CacheConfig) {
    this.config = config;
    this.defaultTTL = config.ttl || 3600; // Default 1 hour
  }

  /**
   * Connect to Redis
   */
  async connect(): Promise<void> {
    try {
      this.client = new Redis({
        host: this.config.host,
        port: this.config.port,
        password: this.config.password,
        db: this.config.db || 0,
        retryStrategy: (times: number) => {
          const delay = Math.min(times * 50, 2000);
          return delay;
        }
      });

      this.client.on('connect', () => {
        console.log('Cache service connected to Redis');
      });

      this.client.on('error', (error: any) => {
        console.error('Redis connection error:', error);
      });

      // Test connection
      await this.client.ping();
    } catch (error) {
      console.error('Failed to connect to Redis:', error);
      throw error;
    }
  }

  /**
   * Set a value in cache
   */
  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const fullKey = this.getFullKey(key);
    const serialized = JSON.stringify(value);
    const expiry = ttl || this.defaultTTL;

    await this.client.setex(fullKey, expiry, serialized);
  }

  /**
   * Get a value from cache
   */
  async get<T>(key: string): Promise<T | null> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const fullKey = this.getFullKey(key);
    const value = await this.client.get(fullKey);

    if (!value) {
      return null;
    }

    try {
      return JSON.parse(value) as T;
    } catch (error) {
      console.error('Failed to parse cached value:', error);
      return null;
    }
  }

  /**
   * Delete a value from cache
   */
  async delete(key: string): Promise<void> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const fullKey = this.getFullKey(key);
    await this.client.del(fullKey);
  }

  /**
   * Delete multiple values from cache
   */
  async deleteMany(keys: string[]): Promise<void> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const fullKeys = keys.map(key => this.getFullKey(key));
    await this.client.del(...fullKeys);
  }

  /**
   * Check if a key exists in cache
   */
  async exists(key: string): Promise<boolean> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const fullKey = this.getFullKey(key);
    const result = await this.client.exists(fullKey);
    return result === 1;
  }

  /**
   * Set a value with expiration only if key doesn't exist
   */
  async setNX<T>(key: string, value: T, ttl?: number): Promise<boolean> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const fullKey = this.getFullKey(key);
    const serialized = JSON.stringify(value);
    const expiry = ttl || this.defaultTTL;

    const result = await this.client.set(fullKey, serialized, 'EX', expiry, 'NX');
    return result === 'OK';
  }

  /**
   * Increment a numeric value
   */
  async increment(key: string, amount: number = 1): Promise<number> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const fullKey = this.getFullKey(key);
    return await this.client.incrby(fullKey, amount);
  }

  /**
   * Decrement a numeric value
   */
  async decrement(key: string, amount: number = 1): Promise<number> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const fullKey = this.getFullKey(key);
    return await this.client.decrby(fullKey, amount);
  }

  /**
   * Get or set pattern - fetch from cache or set with factory function
   */
  async getOrSet<T>(key: string, factory: () => Promise<T>, ttl?: number): Promise<T> {
    const cached = await this.get<T>(key);
    
    if (cached !== null) {
      return cached;
    }

    const value = await factory();
    await this.set(key, value, ttl);
    return value;
  }

  /**
   * Clear all keys with the prefix
   */
  async clearPrefix(): Promise<void> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    const pattern = `${this.config.keyPrefix || ''}*`;
    const keys = await this.client.keys(pattern);

    if (keys.length > 0) {
      await this.client.del(...keys);
    }
  }

  /**
   * Flush all keys in current database
   */
  async flush(): Promise<void> {
    if (!this.client) {
      throw new Error('Cache service not connected');
    }

    await this.client.flushdb();
  }

  /**
   * Close connection
   */
  async close(): Promise<void> {
    if (this.client) {
      await this.client.quit();
      this.client = null;
      console.log('Cache service closed');
    }
  }

  /**
   * Check if connected
   */
  isConnected(): boolean {
    return this.client !== null && this.client.status === 'ready';
  }

  /**
   * Get full key with prefix
   */
  private getFullKey(key: string): string {
    const prefix = this.config.keyPrefix || '';
    return prefix ? `${prefix}:${key}` : key;
  }
}
