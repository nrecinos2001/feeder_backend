import { Module } from '@nestjs/common';

import { RefillService } from './services';

@Module({
  providers: [RefillService],
})
export class RefillModule {}
