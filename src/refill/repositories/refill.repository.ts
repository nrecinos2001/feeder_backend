import { DataSource } from 'typeorm';

import { RefillEntity } from '../entities';

export * from './refill.repository';

export const RefillRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(RefillEntity).extend({
    async findLastNFills(n: number): Promise<RefillEntity[]> {
      return await this.find({
        order: { created_at: 'DESC' },
        take: n,
      });
    },
  });
};

export type RefillRepository = ReturnType<typeof RefillRepository>;
