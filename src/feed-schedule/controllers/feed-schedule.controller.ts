import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { IdParamDto } from '@Commons/dtos';

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

  @Delete(':id')
  async deleteFeedSchedule(@Param() idParamDto: IdParamDto): Promise<void> {
    await this.feedScheduleService.deleteFeedSchedule(idParamDto.id);
  }
}
