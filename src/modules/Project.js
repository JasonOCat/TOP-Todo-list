import { v4 as uuidv4 } from 'uuid';
import * as Storage from './Storage';
import * as ProjectList from './ProjectList';
import * as DateUtils from './DateUtils';

class Project {
  #name;

  #uuid = uuidv4();

  #tasks = [];

  #special;

  constructor(name, special = false) {
    this.#name = name;
    this.#special = special;
  }

  toJSON() {
    // Inclure des propriétés et des fonctions dans l'objet sérialisé
    return {
      name: this.#name,
      id: this.#uuid,
      tasks: this.#tasks,
      special: this.#special,
    };
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (newName === null || !isValidProjectName(newName)) {
      throw new Error('Project name is invalid');
    } else {
      this.#name = newName;
    }
  }

  get id() {
    return this.#uuid;
  }

  get special() {
    return this.#special;
  }

  get tasks() {
    return this.#tasks;
  }

  set tasks(newTasks) {
    this.#tasks.splice(0, this.#tasks.length, ...newTasks);
  }
}

const isValidProjectName = (projectName) =>
  projectName && projectName.trim().length > 0;

const addTaskToProject = (newTask, currentProject) => {
  // add the task in Inbox project if the task is created in the Inbox, Today
  if (
    currentProject === ProjectList.getInboxProject() ||
    currentProject === ProjectList.getTodayProject()
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
  if (project.tasks.find((task) => task.id === newTask.id) === undefined) {
    project.tasks.push(newTask);
  }
}

const removeTaskFromAllProject = (taskToRemove) => {
  // retrieve all the projects that contains the task,
  // cause Today and upcoming project can have the task
  ProjectList.getProjects().forEach((project) => {
    project.tasks = project.tasks.filter((task) => task.id !== taskToRemove.id);
  });

  Storage.saveProjectList();
};

const getTaskById = (taskId, project) =>
  project.tasks.find((task) => task.id === taskId);

function getTaskFromProject(project, taskToFind) {
  return project.tasks.find((task) => task.id === taskToFind.id);
}

function getIndexTaskFromProject(project, taskToFind) {
  return project.tasks.findIndex((task) => task.id === taskToFind.id);
}

export default Project;
export {
  removeTaskFromAllProject,
  isValidProjectName,
  getTaskById,
  addTaskToProject,
  getTaskFromProject,
  getIndexTaskFromProject,
};
