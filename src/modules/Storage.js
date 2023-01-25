import Project from "./project";
import ProjectList from "./ProjectList";


const Storage = (() => {
    
    const saveProjectList = () => {
        localStorage.setItem('projectList', JSON.stringify(ProjectList.projects));
    }

    const retrieveProjectList = () => {
        if (localStorage.getItem('projectList') !== null) {
            ProjectList.setProjects(JSON.parse(localStorage.getItem('projectList')));
            //remove from today and upcoming project, tasks that don't belong to them anymore
            //ProjectList.projects
        }
    }


    return {
        saveProjectList,
        retrieveProjectList,
    }


})();

export default Storage;