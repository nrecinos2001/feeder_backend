import { Inject, Injectable } from '@nestjs/common';

import { serializeDocClass } from '@Commons/utils';

import { FillLogRepository } from '../repositories';
import { FillLogEntity } from '../entities';
import { FillLogDoc } from '../docs';

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

  async getLastNFills(n: number): Promise<FillLogEntity[]> {
    const fillLogs = await this.fillLogRepository.findLastNFills(n);
    return fillLogs;
  }
}
