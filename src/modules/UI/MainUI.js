import * as ProjectList from '../ProjectList';
import * as Storage from '../Storage';
import SideBarProjectUI from './SideBarProjectUI';
import * as ProjectViewUI from './ProjectViewUI';

// one instance of Main UI so I use module pattern
const initHomePage = () => {
  loadProjects();
  SideBarProjectUI.initNavLinkButtons();
  SideBarProjectUI.initAddProjectButtons();
  ProjectViewUI.initAddTaskButton();

  // Open the Inbox window when first loading the website
  const inboxProject = ProjectList.getInboxProject();
  ProjectViewUI.openProject(inboxProject);

  // Load the tasks of the Inbox project
  ProjectViewUI.initProjectTasksAndTheirButtons();
};

const loadProjects = () => {
  Storage.retrieveProjectList();
  SideBarProjectUI.displayProjectsAndTheirButtons();
};

export default initHomePage;
