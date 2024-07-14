import { createClient } from 'redis';
import config from "../../lib/config";
class RedisService {
  constructor() {
    //database:REDIS
    this.client = createClient({url:config.get("database").REDIS});
    this.client.on('error', (err) => console.log('Redis Client Error', err));
    this.client.connect().catch(console.error);
  }

  async get(key) {
    try {
      return await this.client.get(key);
    } catch (error) {
      console.error(`Error getting key ${key}: `, error);
      throw error;
    }
  }

  async set(key, value) {
    try {
      await this.client.set(key, value);
    } catch (error) {
      console.error(`Error setting key ${key} with value ${value}: `, error);
      throw error;
    }
  }
}

export default new RedisService();
