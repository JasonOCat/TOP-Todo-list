import {
  format, compareAsc, parseISO, startOfDay, startOfToday,
} from 'date-fns';

function getDateNow() {
  return format(new Date(), 'yyyy-MM-dd');
}

function isDateToday(date) {
  return compareAsc(startOfDay(new Date()), startOfDay(parseISO(date))) === 0;
}

function isPresentOrFutureDate(date) {
  return date !== null && compareAsc(parseISO(date), startOfToday()) !== -1; // check if the due date is not in the past
}

export {
  getDateNow,
  isDateToday,
  isPresentOrFutureDate,
};
