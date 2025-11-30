import { Inject, Injectable } from '@nestjs/common';

import { serializeDocClass } from '@Commons/utils';

import { FillLogRepository } from '../repositories';
import { FillLogEntity } from '../entities';
import { FillLogDoc } from '../docs';
import { LogType } from '@FillLog/enums';

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

  async createFillLog(fillLogData: { type: LogType }): Promise<FillLogEntity> {
    const created_at = new Date();
    const newFillLog = this.fillLogRepository.create({
      ...fillLogData,
      created_at,
    });
    await this.fillLogRepository.save(newFillLog);
    return newFillLog;
  }
}
