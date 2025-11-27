import { Inject, Injectable } from '@nestjs/common';

import { FeedScheduleRepository } from '../repositories';

@Injectable()
export class FeedScheduleService {
  constructor(
    @Inject('FEED_SCHEDULE_REPOSITORY')
    private readonly feedScheduleRepository: FeedScheduleRepository,
  ) { }
  async getFeedSchedules() {
    const feedSchedules = await this.feedScheduleRepository.find();
  }
}
