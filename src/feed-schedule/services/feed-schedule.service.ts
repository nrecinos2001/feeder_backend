import { Inject, Injectable } from '@nestjs/common';

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
    const feedSchedules =
      await this.feedScheduleRepository.findOrderByHourAndMinute();

    const sorted = feedSchedules.sort((a, b) => {
      if (a.hour === b.hour) {
        return parseInt(a.minute) - parseInt(b.minute);
      }
      return parseInt(a.hour) - parseInt(b.hour);
    });

    return serializeDocClass<FeedSchedulerDoc[]>(FeedSchedulerDoc, sorted);
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

  async deleteFeedSchedule(id: number): Promise<void> {
    await this.feedScheduleRepository.deleteById(id);
  }
}
