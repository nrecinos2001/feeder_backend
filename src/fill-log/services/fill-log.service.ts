import { FillLogDoc } from '@FillLog/docs/index.ts/fill-log.doc';
import { FillLogRepository } from '@FillLog/repositories/fill-log.repository';
import { Inject, Injectable } from '@nestjs/common';
import { serializeDocClass } from 'src/commons/utils';

@Injectable()
export class FillLogService {
  constructor(
    @Inject('FILL_LOG_REPOSITORY')
    private readonly fillLogRepository: FillLogRepository,
  ) {}

  async getFillLogs(): Promise<FillLogDoc[]> {
    const fillLogs = await this.fillLogRepository.findOrderByCreatedAtDesc();
    return serializeDocClass<FillLogDoc[]>(FillLogDoc, fillLogs);
  }
}
