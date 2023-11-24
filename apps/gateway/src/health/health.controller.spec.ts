import { HttpStatus } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'

import { HealthController } from './health.controller'

describe('HealthController', () => {
  let controller: HealthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController]
    }).compile()

    controller = module.get<HealthController>(HealthController)
  })

  it('should return HttpStatus.OK', () => {
    expect(controller.getMicroserviceHealth()).toBe(HttpStatus.OK)
  })
})
