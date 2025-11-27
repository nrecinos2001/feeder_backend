// eslint-disable-next-line @typescript-eslint/no-unsafe-call
require('dotenv').config();
import { DataSource } from 'typeorm';
import { FillLogEntity } from '../../fill-log/entities/fill-log.entity';
import { FeedScheduleEntity } from '../../feed-schedule/entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  migrations: ['src/database/migrations/*.ts'],
  entities: [FillLogEntity, FeedScheduleEntity],
});
