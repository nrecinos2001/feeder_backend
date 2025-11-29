import { FeedScheduleEntity } from '@FeedSchedule/entities';
import { DataSource } from 'typeorm';

export const FeedScheduleRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(FeedScheduleEntity).extend({
    async findOrderByHourAndMinute(): Promise<FeedScheduleEntity[]> {
      return await this.find({
        order: { hour: 'ASC', minute: 'ASC' },
      });
    },

    async deleteById(id: number): Promise<void> {
      await this.delete({ id });
    },
  });
};

export type FeedScheduleRepository = ReturnType<typeof FeedScheduleRepository>;
