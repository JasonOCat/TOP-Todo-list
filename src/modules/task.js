import { compareAsc, format, parse } from 'date-fns'
import { v4 as uuidv4 } from 'uuid';
import Storage from './Storage';

const Task = (title, description = null, dueDate = null) => {
    let _uuid = uuidv4(); 
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _completed = false;



    const isPresentOrFutureDate = (date) => {
        let dateNow = parse(format(new Date(),"dd/MM/yyyy"), "dd/MM/yyyy", new Date());
        return date !== null && compareAsc(date, dateNow) !== -1 // check if the due date is not in the past
    }

    if (!isValidTaskTitle(title)) {
        throw new Error('Title is invalid');
    }

    if (description && !isValidDescription(description)) {
        console.log(description);
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

const isValidTaskTitle = (title) => {
    return title && title.trim().length > 0;
}

const isValidDescription = (description) => {
    return description && description.trim().length > 0;
}

export default Task;
export { isValidTaskTitle, isValidDescription };