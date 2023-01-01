import ProjectList from '../ProjectList';
import Storage from '../Storage';
import SideBarProjectUI from './SideBarProjectUI';
import ProjectViewUI from './ProjectViewUI';

// one instance of Main UI so I use module pattern
const MainUI = (() => {
   
    const initHomePage = () => {
        loadProjects();
        SideBarProjectUI.initNavLinkButtons();
        SideBarProjectUI.initAddProjectButtons();
        ProjectViewUI.openProject('Inbox');
    }

    const loadProjects = () => {
        Storage.retrieveProjectList();
        ProjectList.projects.forEach( project => {
            if (!project.special) {
                SideBarProjectUI.addProjectButtons(project);
            }
        });
    }

    initHomePage();
    
    return {
        loadProjects,
    }
})();


export default MainUI;