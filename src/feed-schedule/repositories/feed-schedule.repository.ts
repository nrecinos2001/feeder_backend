import { FeedScheduleEntity } from '@FeedSchedule/entities';
import { DataSource } from 'typeorm';

export const FeedScheduleRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(FeedScheduleEntity).extend({
    async findOrderByHourAndMinute(): Promise<FeedScheduleEntity[]> {
      return await this.find({
        order: { hour: 'ASC', minute: 'ASC' },
      });
    },
  });
};

export type FeedScheduleRepository = ReturnType<typeof FeedScheduleRepository>;
