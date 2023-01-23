import { format,compareAsc, parseISO, startOfDay } from 'date-fns';


const DateUtils = (() => {


    function getDateNow() {
        return format(new Date(), 'yyyy-MM-dd')
    }

    function isDateToday(date) {
        return compareAsc(startOfDay(new Date()), startOfDay(parseISO(date)))=== 0;
    }

    function isPresentOrFutureDate(date) {
        let dateNow = parseISO(format(new Date(),"dd/MM/yyyy"));
        return date !== null && compareAsc(date, dateNow) !== -1 // check if the due date is not in the past
    }

    return {
        getDateNow,
        isDateToday,
        isPresentOrFutureDate
    }

})();

export default DateUtils;