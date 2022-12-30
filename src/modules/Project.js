import task from './Task'

const Project = (projectName) => {
    let _name = projectName;
    let _tasks = [];

    const isValidName = (projectName) => {
        return projectName && projectName.trim().length > 0;
    }

    if (projectName !== null && isValidName(projectName)) {
        _name = projectName;
    }

    const addTask = (task) => {
        _tasks.push(task);
    }

    return {

        addTask,

        get name() {
            return _name;
        },

        set name(projectName) {
            if (!isValidName(projectName)) {
                throw new Error('Project name is invalid');
            }
        },

        get tasks() {
            return _tasks;
        }

    }

}

export default Project;