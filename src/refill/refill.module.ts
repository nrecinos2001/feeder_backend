import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { DatabaseModule } from '@Database/database.module';

import { RefillRepository } from './repositories';
import { RefillService } from './services';

@Module({
  imports: [DatabaseModule],
  providers: [
    RefillService,
    {
      provide: 'REFILL_REPOSITORY',
      inject: ['DATA_SOURCE'],
      useFactory: (dataSource: DataSource) => RefillRepository(dataSource),
    },
  ],
  exports: ['REFILL_REPOSITORY', RefillService],
})
export class RefillModule {}
