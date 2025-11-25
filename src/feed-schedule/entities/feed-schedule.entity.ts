import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feed_schedule')
export class FeedScheduleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type: 'varchar', length: 255 })
  hour: string;

  @Column({ type: 'varchar', length: 255 })
  minute: string;
}
