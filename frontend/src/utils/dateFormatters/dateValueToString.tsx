import { DateValue } from '@nextui-org/react';

export function dateValueToString(dateValue: DateValue | null): string {
  if (!dateValue) {
    return 'Invalid Date';
  }
  const date = new Date(dateValue.toString());
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date.toISOString().split('T')[0];
}
