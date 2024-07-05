import { DateValue } from "@nextui-org/react";

export function dateValueToDate(date: DateValue | string | null): string | null {
    if (!date) {
      return null;
    }
    const dateObj = date instanceof Date ? date : new Date(date.toString());
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }