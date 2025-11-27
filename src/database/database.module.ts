import { Module } from '@nestjs/common';

import { ConfigModuleOptions } from '@Config/config.module';

import { databaseProviders } from './providers';

@Module({
  imports: [ConfigModuleOptions],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
