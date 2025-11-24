import { DataSource } from 'typeorm';
import { FillLogEntity } from '../../fill-log/entities/fill-log.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  migrations: ['src/database/migrations/*.ts'],
  entities: [FillLogEntity],
});
