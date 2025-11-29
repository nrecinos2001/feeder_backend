import { Inject, Injectable } from '@nestjs/common';
import dayjs from 'dayjs';

import { serializeDocClass } from '@Commons/utils';

import { FeedScheduleRepository } from '../repositories';
import { CreateFeedScheduleDto } from '../dtos';
import { FeedSchedulerDoc } from '../docs';

@Injectable()
export class FeedScheduleService {
  constructor(
    @Inject('FEED_SCHEDULE_REPOSITORY')
    private readonly feedScheduleRepository: FeedScheduleRepository,
  ) {}
  async getFeedSchedules(): Promise<FeedSchedulerDoc[]> {
    const feedSchedules = await this.feedScheduleRepository.findOrderByHourAndMinute();
    return serializeDocClass<FeedSchedulerDoc[]>(
      FeedSchedulerDoc,
      feedSchedules,
    );
  }

  async createFeedSchedules(
    createFeedScheduleDto: CreateFeedScheduleDto,
  ): Promise<FeedSchedulerDoc> {
    const { hour, minute } = createFeedScheduleDto;

    const newFeedSchedule = this.feedScheduleRepository.create({
      hour,
      minute,
    });
    const savedFeedSchedule =
      await this.feedScheduleRepository.save(newFeedSchedule);
    return serializeDocClass<FeedSchedulerDoc>(
      FeedSchedulerDoc,
      savedFeedSchedule,
    );
  }
}
