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
}
