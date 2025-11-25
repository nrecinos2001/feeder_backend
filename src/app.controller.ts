import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { FillLogRepository } from '@FillLog/repositories/fill-log.repository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('FILL_LOG_REPOSITORY')
    private readonly fillLogRepository: FillLogRepository,
  ) {}

  @Get()
  async getHello() {
    return await this.fillLogRepository.findOrderByCreatedAtDesc();
    return this.appService.getHello();
  }
}
