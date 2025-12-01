import { Module } from '@nestjs/common';

import { FeedScheduleModule } from '@FeedSchedule/feed-schedule.module';
import { FillCronjobModule } from '@FillCronjob/fill-cronjob.module';
import { PredictionsModule } from '@Predictions/predictions.module';
import { ConfigModuleOptions } from '@Config/config.module';
import { DatabaseModule } from '@Database/database.module';
import { SendgridModule } from '@Sendgrid/sendgrid.module';
import { FillLogModule } from '@FillLog/fill-log.module';
import { RefillModule } from '@Refill/refill.module';
import { MqttModule } from '@MQTT/mqtt.module';

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
    MqttModule,
    SendgridModule,
    RefillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
