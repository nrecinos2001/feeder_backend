import { IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class IdParamDto {
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  id: number;
}
