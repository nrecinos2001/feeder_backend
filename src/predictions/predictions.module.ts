import { Module } from '@nestjs/common';

import { FeedScheduleModule } from '@FeedSchedule/feed-schedule.module';
import { FillLogModule } from '@FillLog/fill-log.module';

import { PredictionsController } from './controllers';
import { PredictionsService } from './services';

@Module({
  imports: [FillLogModule, FeedScheduleModule],
  providers: [PredictionsService],
  controllers: [PredictionsController],
})
export class PredictionsModule {}
