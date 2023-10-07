import { v4 as uuidv4 } from 'uuid';
import * as Storage from './Storage';
import * as ProjectList from './ProjectList';
import * as DateUtils from './DateUtils';

const Project = (projectName, special = false) => {
  const _uuid = uuidv4();
  let _name = projectName;
  const _tasks = [];
  const _special = special; // to know if it's a Inbox, Today or Upcoming initial project

  if (projectName !== null && isValidProjectName(projectName)) {
    _name = projectName;
  }

  return {
    get id() {
      return _uuid;
    },

    get name() {
      return _name;
    },

    set name(projectName) {
      if (!isValidProjectName(projectName)) {
        throw new Error('Project name is invalid');
      }

      _name = projectName;
    },

    get special() {
      return _special;
    },

    get tasks() {
      return _tasks;
    },

    set tasks(newTasks) {
      _tasks.splice(0, _tasks.length, ...newTasks);
    },

  };
};

const isValidProjectName = (projectName) => projectName && projectName.trim().length > 0;

const addTaskToProject = (newTask, currentProject) => {
  // add the task in Inbox project if the task is created in the Inbox, Today
  if (
    currentProject === ProjectList.getInboxProject()
    || currentProject === ProjectList.getTodayProject()
  ) {
    pushTaskToProjectIfNotPresent(newTask, ProjectList.getInboxProject());
  } else {
    pushTaskToProjectIfNotPresent(newTask, currentProject);
  }

  // add the task in Today project if the duedate is today
  if (DateUtils.isDateToday(newTask.dueDate)) {
    ProjectList.addTaskToProjectToday(newTask);
  }

  // add the task in Upcoming project if the duedate is in the futur
  if (DateUtils.isPresentOrFutureDate(newTask.dueDate)) {
    ProjectList.addTaskToProjectUpcoming(newTask);
  }
  Storage.saveProjectList();
};

function pushTaskToProjectIfNotPresent(newTask, project) {
  if (
    project
      .tasks
      .find((task) => task.id === newTask.id)
    === undefined
  ) {
    project
      .tasks
      .push(newTask);
  }
}

const removeTaskFromAllProject = (taskToRemove) => {
  // retrieve all the projects that contains the task, cause Today and upcoming project can have the task
  ProjectList.getProjects()
    .forEach((project) => {
      project.tasks = project.tasks
        .filter((task) => task.id !== taskToRemove.id);
    });

  Storage.saveProjectList();
};

const getTaskById = (taskId, project) => project.tasks.find((task) => task.id === taskId);

function getTaskFromProject(project, taskToFind) {
  return project.tasks.find((task) => task.id === taskToFind.id);
}

function getIndexTaskFromProject(project, taskToFind) {
  return project.tasks.findIndex((task) => task.id === taskToFind.id);
}

export default Project;
export {
  removeTaskFromAllProject, isValidProjectName, getTaskById, addTaskToProject, getTaskFromProject, getIndexTaskFromProject,
};
