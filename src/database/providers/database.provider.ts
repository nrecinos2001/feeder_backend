import { DataSource } from 'typeorm';
import { envVariables } from '@Config/env-variables';
import { FillLogEntity } from '@FillLog/entities/fill-log.entity';

const { database } = envVariables();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: database.host,
        port: database.port,
        username: database.username,
        password: database.password,
        database: database.database,
        entities: [FillLogEntity],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
