import { IsNotEmpty, IsNumber } from "class-validator";

export class IdParamDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
