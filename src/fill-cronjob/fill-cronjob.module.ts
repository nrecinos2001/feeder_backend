import { Module } from '@nestjs/common';

import { FillCronjobService } from './services';

@Module({
  providers: [FillCronjobService],
  exports: [FillCronjobService],
})
export class FillCronjobModule {}
