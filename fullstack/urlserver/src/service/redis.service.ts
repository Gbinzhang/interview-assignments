import { Provide, Inject } from '@midwayjs/decorator';
import { RedisService } from '@midwayjs/redis';


@Provide()
export class LocalRedisService {
  @Inject()
  redisService: RedisService;

  /**
   *
   * @param key
   * @param timeout 默认100ms
   * @returns
   */
  async get(key: string, timeout = 100): Promise<string> {
    const self = this
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('redis get timeout'))
      }, timeout);
      self.redisService.get(key).then((data) => resolve(data));
    })
  }

  /**
   *
   * @param key
   * @param value
   * @param timeout 默认100ms
   * @returns
   */
  async set(key: string, value: string, timeout = 100): Promise<string> {
    const self = this
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('redis set timeout'))
      }, timeout);
      self.redisService.set(key, value).then((data) => resolve(data));
    })
  }
}
