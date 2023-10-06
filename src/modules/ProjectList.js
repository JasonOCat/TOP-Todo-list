import Project from './Project';

// one instance of Project list so I use module pattern

let projects = [];

const initProjects = () => {
  projects.push(Project('Inbox', true));
  projects.push(Project('Today', true));
  projects.push(Project('Upcoming', true));
};

const addProject = (newProject) => {
  projects.push(newProject);
  Storage.saveProjectList();
};

const deleteProject = (projectId) => {
  const indexProjectToDelete = projects.findIndex((project) => project.id === projectId);
  if (indexProjectToDelete === -1) {
    throw Error(`The project id ${projectId} doesn't exist`);
  }

  projects.splice(indexProjectToDelete, 1);
  Storage.saveProjectList();
};

const getProjectById = (projectId) => projects.find((project) => project.id === projectId);

const getTodayProject = () => projects.find((project) => project.special && project.name === 'Today');

const getInboxProject = () => projects.find((project) => project.special && project.name === 'Inbox');

const getUpcomingProject = () => projects.find((project) => project.special && project.name === 'Upcoming');

const getProjects = () => projects;

function findProjectOfTask(taskToFind) {
  const indexProjectOfTask = projects.findIndex((project) => project !== getTodayProject()
                && project !== getUpcomingProject()
                && project.tasks.find((task) => task.id === taskToFind.id) !== undefined);

  if (indexProjectOfTask === -1) {
    throw Error(`The task id ${taskToFind.id} doesn't exist`);
  } else {
    return projects[indexProjectOfTask];
  }
}

function addTaskToProjectToday(taskToAdd) {
  // don't add the project if its duedate is already today
  if (getTodayProject().tasks.find((task) => task.id === taskToAdd.id) === undefined) {
    getTodayProject().tasks.push(taskToAdd);
  }
}

function addTaskToProjectUpcoming(taskToAdd) {
  // don't add the project if its duedate is already today
  if (getUpcomingProject().tasks.find((task) => task.id === taskToAdd.id) === undefined) {
    getUpcomingProject().tasks.push(taskToAdd);
  }
}

// function removeTaskFromTodayProject(taskToRemovee) {
//   const indexTask = getUpcomingProject().tasks.findIndex((task) => task.id === taskToRemovee.id);
//   if (indexTask !== -1) {
//     getUpcomingProject().tasks.splice(indexTask, 1);
//   }
// }

const setProjects = (arrProjects) => {
  projects = arrProjects;
};

export {
  initProjects,
  addProject,
  deleteProject,
  setProjects,
  getProjectById,
  getTodayProject,
  getInboxProject,
  getUpcomingProject,
  findProjectOfTask,
  addTaskToProjectToday,
  addTaskToProjectUpcoming,
  getProjects,
};
