import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';
import dayjs from 'dayjs';

import { FeedScheduleService } from '@FeedSchedule/services';
import { FillLogService } from '@FillLog/services';
import { MqttService } from '@MQTT/services';
import { LogType } from '@FillLog/enums';

@Injectable()
export class FillCronjobService {
  constructor(
    private readonly feedScheduleService: FeedScheduleService,
    private readonly mqttService: MqttService,
    private readonly fillLogService: FillLogService,
  ) {
    this.scheduleFillJob();
  }
  scheduleFillJob() {
    cron.schedule('* * * * *', async () => {
      const dayjsNow = dayjs();
      const hour = dayjsNow.format('HH');
      const minute = dayjsNow.format('mm');
      const schedulers = await this.feedScheduleService.getFeedSchedules();
      const existingScheduler = schedulers.find((scheduler) => {
        return scheduler.hour === hour && scheduler.minute === minute;
      });
      if (!existingScheduler) {
        return;
      }
      this.mqttService.sendOpenServo();
      await this.fillLogService.createFillLog({
        type: LogType.AUTOMATIC,
      });
      console.log(`Cronjob executed at ${hour}:${minute}`);
      // Add your fill logic here
    });
  }
}
