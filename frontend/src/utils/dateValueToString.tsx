import { DateValue } from '@nextui-org/react';

export const dateValueToString = (dateValue: DateValue | string | null): Date => {
  if (!dateValue) {
    return new Date('Invalid Date');
  }
  return new Date(dateValue.toString());
};
