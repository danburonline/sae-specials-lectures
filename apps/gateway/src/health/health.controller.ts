import { Controller, Get, HttpStatus } from '@nestjs/common'

@Controller()
export class HealthController {
  @Get('/health')
  getMicroserviceHealth() {
    // Very simple health check, no service needed
    return HttpStatus.OK
  }
}
