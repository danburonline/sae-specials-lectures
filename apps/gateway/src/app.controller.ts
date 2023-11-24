import { Body, Controller, Get } from '@nestjs/common'

import { AppService } from './app.service'

@Controller()
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly appService: AppService) { }

  @Get('/example')
  async getHello(@Body() data: { color: string }): Promise<string> {
    return this.appService.getColor(data)
  }
}
