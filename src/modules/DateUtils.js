import { format,compareAsc, parseISO } from 'date-fns';


const DateUtils = (() => {


    function getDateNow() {
        return dateNow = format(new Date(), 'yyyy-MM-dd')
    }

    function isDateToday(date) {
        return compareAsc(new Date(), parseISO(date))=== 0;
    }

    return {
        getDateNow,
        isDateToday
    }

})();

export default DateUtils;