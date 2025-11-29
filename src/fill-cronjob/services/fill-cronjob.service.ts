import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';
import dayjs from 'dayjs';
import { FeedScheduleService } from '@FeedSchedule/services';

@Injectable()
export class FillCronjobService {
  constructor(private readonly feedScheduleService: FeedScheduleService) {
    this.scheduleFillJob();
  }
  scheduleFillJob() {
    cron.schedule('* * * * *', async () => {
      const dayjsNow = dayjs();
      const hour = dayjsNow.format('H');
      const minute = dayjsNow.format('m');
      const schedulers = await this.feedScheduleService.getFeedSchedules();
      const existingScheduler = schedulers.find((scheduler) => {
        return scheduler.hour === hour && scheduler.minute === minute;
      });
      if (!existingScheduler) {
        return;
      }
      console.log(`Cronjob executed at ${hour}:${minute}`);
      // Add your fill logic here
    });
  }
}
