import { Module } from '@nestjs/common';

import { FeedScheduleModule } from '@FeedSchedule/feed-schedule.module';

import { FillCronjobService } from './services';

@Module({
  imports: [FeedScheduleModule],
  providers: [FillCronjobService],
  exports: [FillCronjobService],
})
export class FillCronjobModule {}
