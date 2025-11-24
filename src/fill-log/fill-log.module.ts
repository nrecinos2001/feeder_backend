import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { FillLogRepository } from '@FillLog/repositories/fill-log.repository';
import { DatabaseModule } from '@Database/database.module';

import { FillLogService } from './services';
import { FillLogController } from './controllers';

@Module({
  imports: [DatabaseModule],
  providers: [
    FillLogService,
    {
      provide: 'FILL_LOG_REPOSITORY',
      inject: ['DATA_SOURCE'],
      useFactory: (dataSource: DataSource) => FillLogRepository(dataSource),
    },
  ],
  controllers: [FillLogController],
  exports: ['FILL_LOG_REPOSITORY'],
})
export class FillLogModule {}
