import { Module } from '@nestjs/common';

import { FeedScheduleModule } from '@FeedSchedule/feed-schedule.module';
import { FillLogModule } from '@FillLog/fill-log.module';
import { RefillModule } from '@Refill/refill.module';

import { PredictionsController } from './controllers';
import { PredictionsService } from './services';

@Module({
  imports: [FillLogModule, FeedScheduleModule, RefillModule],
  providers: [PredictionsService],
  controllers: [PredictionsController],
})
export class PredictionsModule {}
