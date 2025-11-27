import { Module } from '@nestjs/common';

import { FeedScheduleController } from './controllers';
import { FeedScheduleService } from './services';

@Module({
  controllers: [FeedScheduleController],
  providers: [FeedScheduleService]
})
export class FeedScheduleModule {}
