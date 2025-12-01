import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { RefillType } from '../enums';

@Entity('refill')
export class RefillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'int' })
  distance: number;

  @Column({ type: 'boolean', default: false })
  email_sent: boolean;

  @Column({ type: 'enum', enum: RefillType })
  type: RefillType;
}
