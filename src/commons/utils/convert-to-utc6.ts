import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export function convertToUTC6(date: Date): Date {
  return dayjs(date).tz('America/El_Salvador').toDate();
}
