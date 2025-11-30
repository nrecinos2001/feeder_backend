import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';

import { FillLogService } from '@FillLog/services';
import { FillLogEntity } from '@FillLog/entities';
import { convertToUTC6 } from '@Commons/utils';

import { IPrediction } from '../types';

@Injectable()
export class PredictionsService {
  constructor(private readonly fillLogsService: FillLogService) { }
  async getPredictions(): Promise<IPrediction> {
    const last20Fills = await this.fillLogsService.getLastNFills(20);
    const lastFillsByDates: Record<string, FillLogEntity[]> =
      last20Fills.reduce(
        (acc, current) => {
          const fillDate = dayjs(current.created_at).format('MM-DD');
          if (!acc[fillDate]) {
            acc[fillDate] = [] as FillLogEntity[];
          }
          acc[fillDate].push(current);
          return acc;
        },
        {} as Record<string, FillLogEntity[]>,
      );

    const lastCreated = dayjs(last20Fills[0].created_at).diff(new Date(), 'hours');
    const nextFillPredictionRaw = dayjs().add(lastCreated, 'hours').toDate();
    const nextFillPredictionDiff = dayjs(nextFillPredictionRaw).diff(new Date(), 'days');
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
}
