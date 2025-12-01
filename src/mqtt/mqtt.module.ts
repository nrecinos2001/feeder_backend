import { Module } from '@nestjs/common';

import { RefillModule } from '@Refill/refill.module';

import { MqttService } from './services';

@Module({
  imports: [RefillModule],
  providers: [MqttService],
  exports: [MqttService],
})
export class MqttModule {}
