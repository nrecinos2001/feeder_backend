import { IsDate } from 'class-validator';

export class CreateFeedScheduleDto {
  @IsDate()
  date: Date;
}
