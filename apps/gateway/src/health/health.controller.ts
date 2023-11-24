import { Controller, Get, HttpStatus } from '@nestjs/common'
import { Redis } from 'ioredis'

@Controller()
export class HealthController {
  private redisClient: Redis

  constructor() {
    // Initialize the Redis client
    this.redisClient = new Redis({
      // Add your Redis configuration here
    })
  }

  @Get('/health')
  getMicroserviceHealth() {
    // Very simple health check, no side effects needed
    return HttpStatus.OK
  }

  @Get('/health-redis')
  async checkIfRedisIsConnected() {
    try {
      // Attempt to get a value from Redis (e.g., a health check key)
      const result = await this.redisClient.ping()

      // If Redis responds, return OK, else return SERVICE UNAVAILABLE
      return result === 'PONG' ? HttpStatus.OK : HttpStatus.SERVICE_UNAVAILABLE
    } catch (error) {
      // If there is an error communicating with Redis, return SERVICE UNAVAILABLE
      return HttpStatus.SERVICE_UNAVAILABLE
    }
  }
}
