import { Controller, Get, HttpStatus } from '@nestjs/common'

@Controller()
export class HealthController {
  @Get('/health')
  getMicroserviceHealth() {
    // Very simple health check, no side effects needed
    return HttpStatus.OK
  }
}
