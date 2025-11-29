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
    const feedSchedules = await this.feedScheduleRepository.find();
    return serializeDocClass<FeedSchedulerDoc[]>(
      FeedSchedulerDoc,
      feedSchedules,
    );
  }

  async createFeedSchedules(
    createFeedScheduleDto: CreateFeedScheduleDto,
  ): Promise<FeedSchedulerDoc> {
    const utcDate = new Date(createFeedScheduleDto.date.toISOString());
    const hour = dayjs(utcDate).hour().toString();
    const minute = dayjs(utcDate).minute().toString();

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
