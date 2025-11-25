import { FillLogRepository } from '@FillLog/repositories/fill-log.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FillLogService {
  constructor(
    @Inject('FILL_LOG_REPOSITORY')
    private readonly fillLogRepository: FillLogRepository,
  ) {}

  async getFillLogs() {
    return await this.fillLogRepository.findOrderByCreatedAtDesc();
  }
}
