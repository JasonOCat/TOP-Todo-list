import {
  compareAsc, format, parseISO,
} from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import Storage from './Storage';
import DateUtils from './DateUtils';
import ProjectList from './ProjectList';
import { getTaskFromProject, getIndexTaskFromProject } from './Project';

const Task = (title, description = null, dueDate = null) => {
  const _uuid = uuidv4();
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _completed = false;

  const isPresentOrFutureDate = (date) => {
    const dateNow = parseISO(format(new Date(), 'dd/MM/yyyy'));
    return date !== null && compareAsc(date, dateNow) !== -1; // check if the due date is not in the past
  };

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
        throw Error('Please provide a valid string for the title.');
      }
      _title = title;
    },

    get description() {
      return _description;
    },

    set description(description) {
      _description = description;
    },

    get completed() {
      return _completed;
    },

    set completed(completed) {
      if (completed == !true && completed == !false) {
        throw 'Please provide a valid boolean to know if the task is completed.';
      }
      _completed = completed;
    },

    get dueDate() {
      return _dueDate;
    },

    set dueDate(dueDateString) {
      if (dueDateString === null) {
        console.log('ll');
        return;
      }

      if (isPresentOrFutureDate(parseISO(dueDateString))) {
        _dueDate = format(parseISO(dueDateString), 'yyyy-MM-dd');
      } else {
        alert('Please provide a valid date');
      }
    },

  };
};

const isValidTaskTitle = (title) => title && title.trim().length > 0;

const isValidDescription = (description) => description && description.trim().length > 0;

function getFormattedDueDate(task) {
  if (task.dueDate) {
    return format(parseISO(task.dueDate), 'yyyy-MM-dd'); // parseISO to have a Date to work with
  }
  return null;
}

function updateTaskFromAllProjects(updatedTask) {
  console.log(updatedTask.dueDate);
  const realProject = ProjectList.findProjectOfTask(updatedTask);
  realProject.tasks
    .filter((task) => task.id === updatedTask.id)
    .forEach((task) => {
      task.title = updatedTask.title;
      task.description = updatedTask.description;
      task.dueDate = updatedTask.dueDate;
    });

  // delete or add from Today project
  if (DateUtils.isDateToday(updatedTask.dueDate)) {
    const taskToUdpate = getTaskFromProject(ProjectList.getTodayProject(), updatedTask);
    if (!taskToUdpate) {
      ProjectList.getTodayProject().tasks.push(updatedTask);
    } else {
      taskToUdpate.title = updatedTask.title;
      taskToUdpate.description = updatedTask.description;
      taskToUdpate.dueDate = updatedTask.dueDate;
    }
  }

  // due date of task is not today
  else {
    const taskIndexToRemove = getIndexTaskFromProject(ProjectList.getTodayProject(), updatedTask);
    if (taskIndexToRemove !== -1) {
      ProjectList.getTodayProject().tasks.splice(taskIndexToRemove, 1);
    }
  }

  // delete or add from Upcoming project
  if (DateUtils.isPresentOrFutureDate(updatedTask.dueDate)) {
    const taskInFuture = getTaskFromProject(ProjectList.getUpcomingProject(), updatedTask);
    if (!taskInFuture) {
      ProjectList.getUpcomingProject().tasks.push(updatedTask);
    } else {
      taskInFuture.title = updatedTask.title;
      taskInFuture.description = updatedTask.description;
      taskInFuture.dueDate = updatedTask.dueDate;
    }
  }

  Storage.saveProjectList();
}

export default Task;
export {
  isValidTaskTitle, isValidDescription, getFormattedDueDate, updateTaskFromAllProjects,
};
