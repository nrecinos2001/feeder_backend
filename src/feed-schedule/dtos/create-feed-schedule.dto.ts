import { IsString } from 'class-validator';

export class CreateFeedScheduleDto {
  @IsString()
  hour: string;

  @IsString()
  minute: string;
}
