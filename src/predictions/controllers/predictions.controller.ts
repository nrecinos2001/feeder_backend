import { Controller, Get } from '@nestjs/common';

import { PredictionsService } from '../services';
import { IPrediction } from '../types';

@Controller('predictions')
export class PredictionsController {
  constructor(private readonly predictionsService: PredictionsService) {}
  @Get()
  async getPredictions(): Promise<IPrediction> {
    return await this.predictionsService.getPredictions();
  }

  @Get('feed')
  async getFeedPredictions() {
    return await this.predictionsService.getFeedPredictions();
  }

  @Get('percentage')
  async getBucketPercentage() {
    return await this.predictionsService.getBucketPercentage();
  }
}
