import { format,compareAsc, parseISO, startOfDay } from 'date-fns';


const DateUtils = (() => {


    function getDateNow() {
        return format(new Date(), 'yyyy-MM-dd')
    }

    function isDateToday(date) {
        return compareAsc(startOfDay(new Date()), startOfDay(parseISO(date)))=== 0;
    }

    return {
        getDateNow,
        isDateToday
    }

})();

export default DateUtils;