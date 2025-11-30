import { Module } from '@nestjs/common';

import { FeedScheduleModule } from '@FeedSchedule/feed-schedule.module';
import { FillLogModule } from '@FillLog/fill-log.module';
import { MqttModule } from '@MQTT/mqtt.module';

import { FillCronjobService } from './services';

@Module({
  imports: [FeedScheduleModule, MqttModule, FillLogModule],
  providers: [FillCronjobService],
  exports: [FillCronjobService],
})
export class FillCronjobModule {}
