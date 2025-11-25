import { Controller, Get } from '@nestjs/common';

import { FillLogService } from '@FillLog/services/fill-log.service';

@Controller('fill-log')
export class FillLogController {
  constructor(private readonly fillLogService: FillLogService) {}
  @Get()
  async getFillLogs() {
    return await this.fillLogService.getFillLogs();
  }
}
