import { Module } from '@nestjs/common';

import { ConfigModuleOptions } from '@Config/config.module';
import { DatabaseModule } from '@Database/database.module';
import { FillLogModule } from '@FillLog/fill-log.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModuleOptions, DatabaseModule, FillLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
