import { format } from 'date-fns';


const DateUtils = (() => {


    function getDateNow() {
        return dateNow = format(new Date(), 'yyyy-MM-dd')
    }

})();

export default DateUtils;