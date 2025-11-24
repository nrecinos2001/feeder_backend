import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { LogType } from '../enums';

@Entity('fill_log')
export class FillLogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'enum', enum: LogType })
  type: LogType;
}
