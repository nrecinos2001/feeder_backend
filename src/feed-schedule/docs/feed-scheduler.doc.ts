import { Expose } from 'class-transformer';

export class FeedSchedulerDoc {
  @Expose()
  id: number;

  @Expose()
  hour: string;

  @Expose()
  minute: string;
}
