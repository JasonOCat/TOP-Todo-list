import Storage from './Storage';
import { v4 as uuidv4 } from 'uuid';


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

const addTaskToProject = (task, project) => {
    project.tasks.push(task);
    Storage.saveProjectList();
}

export default Project;
export { isValidProjectName };
export { addTaskToProject };