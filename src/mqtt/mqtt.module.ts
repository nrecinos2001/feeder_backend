import { Module } from '@nestjs/common';

import { MqttService } from './services';

@Module({
  providers: [MqttService],
  exports: [MqttService],
})
export class MqttModule {}
