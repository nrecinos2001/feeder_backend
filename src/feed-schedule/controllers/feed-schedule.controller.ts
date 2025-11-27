import { FeedScheduleService } from '../services';
import { Controller, Get } from '@nestjs/common';

@Controller('feed-schedule')
export class FeedScheduleController {
  constructor(private readonly feedScheduleService: FeedScheduleService) {}
  @Get()
  async getFeedSchedules() {
    return await this.feedScheduleService.getFeedSchedules();
  }
}
