import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { DatabaseModule } from '@Database/database.module';

import { FeedScheduleRepository } from './repositories';
import { FeedScheduleController } from './controllers';
import { FeedScheduleService } from './services';

@Module({
  imports: [DatabaseModule],
  controllers: [FeedScheduleController],
  providers: [
    FeedScheduleService,
    {
      provide: 'FEED_SCHEDULE_REPOSITORY',
      inject: ['DATA_SOURCE'],
      useFactory: (dataSource: DataSource) =>
        FeedScheduleRepository(dataSource),
    },
  ],
  exports: ['FEED_SCHEDULE_REPOSITORY', FeedScheduleService],
})
export class FeedScheduleModule {}
