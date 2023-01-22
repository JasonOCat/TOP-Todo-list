import { compareAsc, format, parse, parseISO } from 'date-fns'
import { v4 as uuidv4 } from 'uuid';
import Storage from './Storage';
import DateUtils from './DateUtils';

const Task = (title, description = null, dueDate = null) => {
    let _uuid = uuidv4(); 
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _completed = false;



    const isPresentOrFutureDate = (date) => {
        let dateNow = parseISO(format(new Date(),"dd/MM/yyyy"));
        return date !== null && compareAsc(date, dateNow) !== -1 // check if the due date is not in the past
    }

    if (!isValidTaskTitle(title)) {
        throw new Error('Title is invalid');
    }

    if (description && !isValidDescription(description)) {
        throw new Error('Description is invalid');
    }

    if (dueDate !== null && !isPresentOrFutureDate(dueDate)) {
        throw new Error('Due date is invalid');
    }

    return {
        isPresentOrFutureDate,

        get id() {
            return _uuid;
        },

        get title() {
            return _title;
        },

        set title(title) {
            if (!isValidTaskTitle(title)) {
                throw "Please provide a valid string for the title."
            }
            _title = title;
        },

        get description() {
            return _description;
        },

        set description(description) {
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

        set dueDate(dueDateString) {
            if (dueDateString === null) {
                return;
            }

            if (isPresentOrFutureDate(parseISO(dueDateString))) {
                _dueDate = format(parseISO(dueDateString),'yyyy-MM-dd');
            }else {
                alert("Please provide a valid date");
            }
        },

     };
};

const isValidTaskTitle = (title) => {
    return title && title.trim().length > 0;
}

const isValidDescription = (description) => {
    return description && description.trim().length > 0;
}


function getFormattedDueDate(task) {
    if (task.dueDate) {
        return format(parseISO(task.dueDate),'yyyy-MM-dd'); //parseISO to have a Date to work with
    }
    return null;
}

export default Task;
export { isValidTaskTitle, isValidDescription, getFormattedDueDate };