import { Module } from '@nestjs/common';

import { RefillModule } from '@Refill/refill.module';

import { SendgridService } from './services/sendgrid.service';

@Module({
  imports: [RefillModule],
  providers: [SendgridService],
  exports: [SendgridService],
})
export class SendgridModule {}
