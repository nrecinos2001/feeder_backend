import { Injectable } from '@nestjs/common';
import { connect, MqttClient } from 'mqtt';

import { envVariables } from '@Config/env-variables';

const vars = envVariables();
@Injectable()
export class MqttService {
  private client: MqttClient;

  onModuleInit() {
    this.client = connect(vars.mqttServer);

    this.client.on('connect', () => {
      console.log('MQTT conectado');

      this.client.subscribe('petfeeder/servo/status');
      this.client.subscribe('petfeeder/distance');
    });

    this.client.on('message', (topic, message) => {
      const msg = message.toString();

      if (topic === 'petfeeder/servo/status') {
        console.log('Servo status:', msg);
      }

      if (topic === 'petfeeder/distance') {
        console.log('Alerta de distancia:', msg);
      }
    });
  }

  sendOpenServo() {
    this.client.publish('petfeeder/servo/open', 'open');
    console.log('Published: open to petfeeder/servo/open');
  }
}
