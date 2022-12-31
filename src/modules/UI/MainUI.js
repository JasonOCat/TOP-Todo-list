import ProjectList from '../ProjectList';
import Storage from '../Storage';
import SideBarProjectUI from './SideBarProjectUI';

// one instance of Main UI so I use module pattern
const MainUI = (() => {
    const projectView = document.querySelector(".project-view");

    const initHomePage = () => {
        loadProjects();
        SideBarProjectUI.initNavLinkButtons();
        SideBarProjectUI.initAddProjectButtons();
        openProject('Inbox');
    }

    const loadProjects = () => {
        Storage.retrieveProjectList();
        ProjectList.projects.forEach( project => {
            if (!project.special) {
                SideBarProjectUI.initProjectButtons(project);
            }
        });
    }

    const openProject = (projectName) => {
        projectView.innerHTML = 
        `
        <h2>${projectName}</h2>
        `;
    };

    const cleanProjectView = () => {
        projectView.innerHTML = '';
    }


    initHomePage();
    
    return {
        loadProjects,
        openProject,
        cleanProjectView,
    }
})();


export default MainUI;