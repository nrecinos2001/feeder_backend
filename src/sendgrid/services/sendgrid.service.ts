import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';

import { envVariables } from '@Config/env-variables';

const envs = envVariables();

@Injectable()
export class SendgridService {
  async sendAlertEmail(): Promise<void> {
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
