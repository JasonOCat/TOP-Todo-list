import Project, { addTaskToProject, getTaskFromProject } from './Project'
import Storage from './Storage';
import Task from './Task';


// one instance of Project list so I use module pattern
const ProjectList = (() => {
    let _projects = [];
    _projects.push(Project("Inbox", true));
    _projects.push(Project("Today", true));
    _projects.push(Project("Upcoming", true));

    const addProject = (newProject) => {
        _projects.push(newProject);
        Storage.saveProjectList();
    }

    const deleteProject = (projectId) => {
        const indexProjectToDelete = _projects.findIndex(project => project.id === projectId);
        if (indexProjectToDelete === -1) {
            throw Error(`The project id ${projectId} doesn't exist`);
        }

        _projects.splice(indexProjectToDelete, 1);
        Storage.saveProjectList();

    }

    function findProjectOfTask(taskToFind) {
        let indexProjectOfTask = _projects.findIndex(project => 
                    project !== getTodayProject() &&
                    project !== getUpcomingProject() &&
                    project.tasks.find(task => 
                        task.id === taskToFind.id
                    )!== undefined            
        )

        if (indexProjectOfTask === -1) {
            throw Error(`The task id ${taskToFind.id} doesn't exist`);
        } 

        else {
            return _projects[indexProjectOfTask];
        }
    }


    function addTaskToProjectToday(taskToAdd) {
        // don't add the project if its duedate is already today
        if (getTodayProject().tasks.find(task => task.id === taskToAdd.id) === undefined) {
            getTodayProject().tasks.push(taskToAdd);
        }
        
    }

    const setProjects = (arrProjects) => {
        _projects = arrProjects;
    }

    const getProjectById = (projectId) => {
        return _projects.find(project => project.id === projectId);
    }

    const getTodayProject = () => {
        return _projects.find(project => project.special && project.name === 'Today')
    }

    const getInboxProject = () => {
        return _projects.find(project => project.special && project.name === 'Inbox')
    }

    const getUpcomingProject = () => {
        return _projects.find(project => project.special && project.name === 'Upcoming')
    }



    return {
        get projects() {
            return _projects;
        },

        addProject,
        deleteProject,
        setProjects,
        getProjectById,
        getTodayProject,
        getInboxProject,
        getUpcomingProject,
        findProjectOfTask,
        addTaskToProjectToday
    }

})();

export default ProjectList;

