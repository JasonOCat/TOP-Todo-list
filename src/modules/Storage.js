import * as ProjectList from './ProjectList';
import * as DateUtils from './DateUtils';

const saveProjectList = () => {
  console.log(JSON.stringify(ProjectList.getProjects()));
  localStorage.setItem('projectList', JSON.stringify(ProjectList.getProjects()));
};

const retrieveProjectList = () => {
  if (localStorage.getItem('projectList') !== null) {
    ProjectList.setProjects(JSON.parse(localStorage.getItem('projectList')));
    // remove from today and upcoming project, tasks that don't belong to them anymore
    let tasksToDelete = ProjectList.getTodayProject().tasks
      .flatMap((task) => task)
      .filter((task) => !DateUtils.isDateToday(task.dueDate));

    tasksToDelete.forEach((taskToDelete) => {
      ProjectList.getTodayProject().tasks.splice(ProjectList.getTodayProject().tasks.findIndex((taskIndex) => taskIndex.id === taskToDelete.id), 1);
    });

    tasksToDelete = ProjectList.getUpcomingProject().tasks
      .flatMap((task) => task)
      .filter((task) => !DateUtils.isPresentOrFutureDate(task.dueDate));

    tasksToDelete.forEach((taskToDelete) => {
      ProjectList.getUpcomingProject().tasks.splice(ProjectList.getUpcomingProject().tasks.findIndex((taskIndex) => taskIndex.id === taskToDelete.id), 1);
    });
  }
};

export {
  saveProjectList,
  retrieveProjectList,
};
