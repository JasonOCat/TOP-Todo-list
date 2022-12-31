import ProjectList from "./ProjectList";


const Storage = (() => {
    
    const saveProjectList = () => {
        localStorage.setItem('projectList', JSON.stringify(ProjectList.projects));
    }

    const retrieveProjectList = () => {
        if (localStorage.getItem('projectList') !== null) {
            ProjectList.setProjects(JSON.parse(localStorage.getItem('projectList')));
        }
    }


    return {
        saveProjectList,
        retrieveProjectList,
    }


})();

export default Storage;