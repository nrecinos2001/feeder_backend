import { Module } from '@nestjs/common';

import { FeedScheduleModule } from '@FeedSchedule/feed-schedule.module';
import { FillCronjobModule } from '@FillCronjob/fill-cronjob.module';
import { PredictionsModule } from '@Predictions/predictions.module';
import { DatabaseModule } from '@Database/database.module';
import { ConfigModuleOptions } from '@Config/config.module';
import { FillLogModule } from '@FillLog/fill-log.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModuleOptions,
    DatabaseModule,
    FillLogModule,
    FeedScheduleModule,
    FillCronjobModule,
    PredictionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
