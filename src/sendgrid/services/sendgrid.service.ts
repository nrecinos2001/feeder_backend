import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';

import { envVariables } from '@Config/env-variables';
import { RefillService } from '@Refill/services';
import { RefillType } from '@Refill/enums';

const envs = envVariables();

@Injectable()
export class SendgridService {
  constructor(private readonly refillService: RefillService) {}
  async sendAlertEmail(): Promise<void> {
    const lastRefill = await this.refillService.getLastNRefills(1);
    if (lastRefill?.length && lastRefill[0]?.type === RefillType.EMPTY) {
      return;
    }
    sgMail.setApiKey(envs.sendgridApiKey);
    const messageData = {
      from: 'nestor.recinos2001@gmail.com',
      to: 'esa1005.2@gmail.com',
      subject: 'Pet feeder alert',
      html: '<strong>Rellenar deposito para comida</strong>',
    };

    try {
      const sentEmail = await sgMail.send(messageData);
      console.log(sentEmail);
    } catch (error) {
      console.error(error);
    }
  }
}
