import { Controller, Get, HttpStatus } from '@nestjs/common'
import { Redis } from 'ioredis'
import pool from 'src/lib/postgres'

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

  @Get('/health-postgres')
  async checkIfPostgresIsConnected() {
    try {
      // Attempt to get a value from Redis (e.g., a health check key)
      await pool.query('SELECT NOW()')
      return HttpStatus.OK
    } catch (error) {
      // If there is an error communicating with Redis, return SERVICE UNAVAILABLE
      return HttpStatus.SERVICE_UNAVAILABLE
    }
  }

  @Get('/deep-health')
  async checkCombinedHealth() {
    try {
      const redisResult = await this.checkIfRedisIsConnected()
      const postgresResult = await this.checkIfPostgresIsConnected()

      // If both checks return HttpStatus.OK, return HttpStatus.OK, else return SERVICE UNAVAILABLE
      return redisResult === HttpStatus.OK && postgresResult === HttpStatus.OK
        ? HttpStatus.OK
        : HttpStatus.SERVICE_UNAVAILABLE
    } catch (error) {
      // Handle errors if necessary
      return HttpStatus.SERVICE_UNAVAILABLE
    }
  }
}
