import { Module } from '@nestjs/common';

import { FillLogModule } from '@FillLog/fill-log.module';

import { PredictionsController } from './controllers';
import { PredictionsService } from './services';

@Module({
  imports: [FillLogModule],
  providers: [PredictionsService],
  controllers: [PredictionsController],
})
export class PredictionsModule {}
