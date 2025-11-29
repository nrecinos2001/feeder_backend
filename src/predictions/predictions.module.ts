import { Module } from '@nestjs/common';

import { PredictionsController } from './controllers';
import { PredictionsService } from './services';

@Module({
  providers: [PredictionsService],
  controllers: [PredictionsController],
})
export class PredictionsModule {}
