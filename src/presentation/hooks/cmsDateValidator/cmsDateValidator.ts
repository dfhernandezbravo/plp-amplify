import { DatesInNumber, TimeProps } from './types';

function useCMSDateValidator() {
  const checkDates = (dates: DatesInNumber) => {
    const { now, start, end } = dates;
    if (start && end) return now >= start && now < end;
    if (!start && end) return now < end;
    if (start) return now >= start;
    return true;
  };

  const convertTimezoneToNumber = (current?: string | Date) => {
    if (!current) return undefined;
    const date = new Date(current);
    const currentOffset = -240;
    const localOffset = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() - (localOffset - currentOffset));
    return date.getTime();
  };

  const cmsDateValidator = (values: TimeProps): boolean => {
    const { startDate, endDate, isActive } = values;
    const now = convertTimezoneToNumber(new Date());
    const start = convertTimezoneToNumber(startDate);
    const end = convertTimezoneToNumber(endDate);
    if (isActive && now) return checkDates({ now, start, end });
    else return false;
  };

  return {
    cmsDateValidator,
  };
}

export default useCMSDateValidator;
