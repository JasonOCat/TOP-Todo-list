import { compareAsc, format, parse } from 'date-fns'

const taskFactory = (title, description, dueDate = null) => {

    let _title = title;
    let _description = description
    let _dueDate = dueDate;
    let _completed = false;

    const isValidTitle = (title) => {
        return title && title.trim().length > 0;
    }

    const isValidDescription = (description) => {
        return description && description.trim().length > 0;
    }

    const isPresentOrFutureDate = (date) => {
        let dateNow = parse(format(new Date(),"dd/MM/yyyy"), "dd/MM/yyyy", new Date());
        return date !== null && compareAsc(date, dateNow) !== -1 // check if the due date is not in the past
    }

    return {
        isPresentOrFutureDate,

        get title() {
            return _title;
        },

        set title(title) {
            if (!isValidTitle(title)) {
                throw "Please provide a valid string for the title."
            }

            _title = title;
        },

        get description() {
            return _description;
        },

        set description(description) {
            if (!isValidDescription(description)) {
                throw "Please provide a valid string for the description."
            }

            _description= description;
        },

        get completed() {
            return _completed;
        },

        set completed (completed) {
            if (completed ==! true && completed ==! false) {
                throw "Please provide a valid boolean to know if the task is completed."
            }
            _completed = completed;
        },

        get dueDate() {
            return _dueDate;
        },

        set dueDate(dueDate) {
            if (isPresentOrFutureDate(dueDate)) {
                _dueDate = dueDate;
            }
        },

        get formattedDate() {
            if (_dueDate !== null) {
                return format(_dueDate, 'dd/MM/yyyy');
            }
        }

     };
};



export default taskFactory;