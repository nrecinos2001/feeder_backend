export interface EnvConfig {
  port: number;
  database: {
    host: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
  };
  mqttServer: string;
}
