import { EnvConfig } from '../types';

export const envVariables = (): EnvConfig => ({
  port: parseInt(process?.env?.PORT ?? '3000'),
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process?.env?.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  mqttServer: process.env.MQTT_SERVER as string,
});
