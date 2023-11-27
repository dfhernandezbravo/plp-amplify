import { DatesInNumber, TimeProps } from './types';

const checkDates = (dates: DatesInNumber) => {
  const { now, start, end } = dates;
  if (start && end) return now >= start && now < end;
  if (start) return now >= start;
  if (end) return now < end;
  return true;
};

const convertDatetimeToNumber = (current?: string | Date) => {
  if (!current) return undefined;
  const date = new Date(current);
  const currentOffset = -240;
  const localOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - (localOffset - currentOffset));
  return date.getTime();
};

const cmsDateValidator = (values: TimeProps): boolean => {
  const { startDate, endDate, isActive } = values;
  const now = convertDatetimeToNumber(new Date());
  const start = convertDatetimeToNumber(startDate);
  const end = convertDatetimeToNumber(endDate);
  if (isActive && now) return checkDates({ now, start, end });
  return false;
};

export default cmsDateValidator;
