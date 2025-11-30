import { Expose, Transform } from 'class-transformer';
import dayjs from 'dayjs';

import { LogType } from '../enums';

import { FillLogEntity } from '../entities';

interface IObj {
  obj: FillLogEntity;
}

export class FillLogDoc {
  @Expose()
  id: number;

  @Expose()
  @Transform(({ obj }: IObj) => {
    return dayjs(obj.created_at).format('YYYY-MM-DD');
  })
  date: string;

  @Expose()
  @Transform(({ obj }: IObj) => {
    return dayjs(obj.created_at).startOf('hour').format('HH:mm');
  })
  time: string;

  @Expose()
  type: LogType;
}
