import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HealthController } from './health/health.controller'

@Module({
  providers: [AppService],
  controllers: [AppController, HealthController]
})
export class AppModule {}
