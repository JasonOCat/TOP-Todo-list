import Storage from './Storage';
import ProjectList from './ProjectList';
import DateUtils from './DateUtils';
import { v4 as uuidv4 } from 'uuid';
import { it } from 'date-fns/locale';


const Project = (projectName, special = false) => {
    let _uuid = uuidv4(); 
    let _name = projectName;
    let _tasks = [];
    let _special = special; // to know if it's a Inbox, Today or Upcoming initial project


    if (projectName !== null && isValidProjectName(projectName)) {
        _name = projectName;
    }

    const addTask = (task) => {
        _tasks.push(task);
        Storage.saveProjectList();
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

        addTask,

    }

}

const isValidProjectName = (projectName) => {
    return projectName && projectName.trim().length > 0;
}


const addTaskToProject = (newTask, currentProject) => {
    // add the task in Inbox project if the task is created in the Inbox, Today, Upcoming project
    if (currentProject === ProjectList.getInboxProject() || currentProject === ProjectList.getTodayProject() || currentProject === ProjectList.getUpcomingProject()) {
        if (ProjectList.getInboxProject().tasks.find(task => task.id === newTask.id) === undefined) {
            ProjectList.getInboxProject().tasks.push(newTask);
        }
    } 

    else {
        if (currentProject.tasks.find(task => task.id === newTask.id) === undefined) {
            currentProject.tasks.push(newTask);
        }
    }

    // add the task in Today project if the duedate is today
    if (DateUtils.isDateToday(newTask.dueDate)) {
        ProjectList.addTaskToProjectToday(newTask);
    }
    Storage.saveProjectList();
}

const removeTaskFromProject = (taskToRemove, projectToFind) => {
    // retrieve all the projects that contains the task, cause Today and upcoming project can have the task
    let projectsHavingTaskToDelete = ProjectList.projects
                                            .filter(project =>
                                                project.tasks.find(task =>
                                                    task.id === taskToRemove.id
                                                ) !== undefined
                                            );

    projectsHavingTaskToDelete.forEach(project => project.tasks.splice(project.tasks.findIndex(task => task.id === taskToRemove.id), 1));

    Storage.saveProjectList();
}

const getTaskById = (taskId, project) => {
    return project.tasks.find(task => task.id === taskId);
}

export default Project;
export { removeTaskFromProject, isValidProjectName, getTaskById, addTaskToProject };