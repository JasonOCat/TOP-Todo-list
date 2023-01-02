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
        ProjectViewUI.initAddTaskButton();

        //Open the Inbox window when first loading the website
        let inboxProject = ProjectList.getInboxProject()
        ProjectViewUI.openProject(inboxProject);

        // Load the tasks of the Inbox project
        ProjectViewUI.displayProjectTasksAndTheirButtons();
    }

    const loadProjects = () => {
        Storage.retrieveProjectList();
        SideBarProjectUI.displayProjectsAndTheirButtons();
    }

    initHomePage();
    
    return {
        loadProjects,
    }
})();


export default MainUI;