import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { FillLogRepository } from '@FillLog/repositories/fill-log.repository';
import { LogType } from '@FillLog/enums';
import { FillLogService } from '@FillLog/services';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('FILL_LOG_REPOSITORY')
    private readonly fillLogRepository: FillLogRepository,
    private readonly fillLogService: FillLogService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
