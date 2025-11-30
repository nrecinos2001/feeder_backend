import { DataSource } from 'typeorm';

import { FillLogEntity } from '../entities/fill-log.entity';

export const FillLogRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(FillLogEntity).extend({
    async findOrderByCreatedAtDesc(): Promise<FillLogEntity[]> {
      return await this.find({
        order: { created_at: 'DESC' },
      });
    },

    async findLastNFills(n: number): Promise<FillLogEntity[]> {
      return await this.find({
        order: { created_at: 'DESC' },
        take: n,
      });
    },
  });
};

export type FillLogRepository = ReturnType<typeof FillLogRepository>;
