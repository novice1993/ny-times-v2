import { redis } from './redis';

class RedisService {
  async get(key: string): Promise<string | null> {
    return await redis.get(key);
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    await redis.set(key, value, 'EX', ttl ?? 3600);
  }

  async delete(key: string): Promise<number> {
    return await redis.del(key);
  }

  async flushAll(): Promise<string> {
    return await redis.flushall();
  }
}

export const redisService = new RedisService();
