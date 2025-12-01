import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';

import { FeedScheduleService } from '@FeedSchedule/services';
import { FillLogService } from '@FillLog/services';
import { RefillService } from '@Refill/services';
import { RefillEntity } from '@Refill/entities';
import { convertToUTC6 } from '@Commons/utils';

import { IFeedPrediction, IPrediction } from '../types';

@Injectable()
export class PredictionsService {
  constructor(
    private readonly fillLogsService: FillLogService,
    private readonly feedScheduleService: FeedScheduleService,
    private readonly refillService: RefillService,
  ) {}
  async getPredictions(): Promise<IPrediction> {
    const last20Fills = await this.refillService.getLastNRefills(20);
    const lastFillsByDates: Record<string, RefillEntity[]> = last20Fills.reduce(
      (acc, current) => {
        const fillDate = dayjs(current.created_at).format('MM-DD');
        if (!acc[fillDate]) {
          acc[fillDate] = [] as RefillEntity[];
        }
        acc[fillDate].push(current);
        return acc;
      },
      {} as Record<string, RefillEntity[]>,
    );

    if (last20Fills.length === 0) {
      return {
        averagesPerDay: 0,
        nextFillPrediction: 'N/A',
        nextFillPredictionDays: -1,
      };
    }

    const lastCreated = dayjs(new Date()).diff(
      last20Fills[0].created_at,
      'hours',
    );
    const nextFillPredictionRaw = dayjs().add(lastCreated, 'hours').toDate();
    const nextFillPredictionDiff = dayjs(nextFillPredictionRaw).diff(
      new Date(),
      'days',
    );
    const nextFillPrediction =
      nextFillPredictionDiff === 0
        ? 'Hoy'
        : nextFillPredictionDiff === 1
          ? 'Mañana'
          : dayjs(convertToUTC6(nextFillPredictionRaw)).format('YYYY-MM-DD');

    const averagePredictions = parseInt(
      (last20Fills.length / Object.keys(lastFillsByDates).length).toString(),
    );
    const body = {
      averagesPerDay: averagePredictions,
      nextFillPrediction,
      nextFillPredictionDays: nextFillPredictionDiff,
    };
    return body;
  }

  async getFeedPredictions(): Promise<IFeedPrediction> {
    const times = await this.feedScheduleService.getFeedSchedules();
    const now = new Date();
    if (!times.length) {
      return {
        hourAndMinute: '--:--',
        date: dayjs(now).format('YYYY-MM-DD'),
        isToday: true,
      };
    }
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const timesInMinutes = times.map((t) => ({
      ...t,
      total: parseInt(t.hour) * 60 + parseInt(t.minute),
    }));

    const next = timesInMinutes.find((t) => t.total > currentMinutes);

    if (next) {
      return {
        hourAndMinute: `${next.hour}:${next.minute}`,
        date: dayjs(now).format('YYYY-MM-DD'),
        isToday: true,
      };
    }

    const first = timesInMinutes[0];
    return {
      hourAndMinute: `${first.hour}:${first.minute}`,
      date: dayjs(now).format('YYYY-MM-DD'),
      isToday: false,
    };
  }

  async getBucketPercentage() {
    const lastRefillArr = await this.refillService.getLastNRefills(1);
    if (!lastRefillArr.length) {
      return 0;
    }

    const lastRefill = lastRefillArr[0];

    const maxDistance = 25;
    const percentage = lastRefill.distance > maxDistance ? 1 : lastRefill.distance / 25;
    const percentageAvailable = 1 - percentage;

    return percentageAvailable;
  }
}
