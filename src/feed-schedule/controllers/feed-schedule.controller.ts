import { Body, Controller, Get, Post } from '@nestjs/common';

import { FeedScheduleService } from '../services';
import { CreateFeedScheduleDto } from '../dtos';
import { FeedSchedulerDoc } from '../docs';

@Controller('feed-schedule')
export class FeedScheduleController {
  constructor(private readonly feedScheduleService: FeedScheduleService) {}
  @Get()
  async getFeedSchedules(): Promise<FeedSchedulerDoc[]> {
    return await this.feedScheduleService.getFeedSchedules();
  }

  @Post()
  async createFeedSchedules(
    @Body() createFeedScheduleDto: CreateFeedScheduleDto,
  ): Promise<FeedSchedulerDoc> {
    return await this.feedScheduleService.createFeedSchedules(
      createFeedScheduleDto,
    );
  }
}
