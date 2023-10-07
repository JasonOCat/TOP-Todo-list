import * as ProjectViewUI from './ProjectViewUI';
import Project, { isValidProjectName } from '../Project';
import * as ProjectList from '../ProjectList';
import ImgList from '../../img/list.png';
import ImgClose from '../../img/close.png';

const SideBarProjectUI = (() => {
  // Inbox, Today and upcoming buttons
  const inboxProjectButton = document.getElementById('btn-inbox-project');
  const todayProjectButton = document.getElementById('btn-today-project');
  const upcomingProjectButton = document.getElementById('btn-upcoming-project');

  // Add project form and buttons
  const btnAddProject = document.getElementById('btn-add-project');
  const btnFormAddProject = document.querySelector('#add-project-buttons .btn-add');
  const btnFormCancelProject = document.querySelector('#add-project-buttons .btn-cancel');
  const inputAddProject = document.querySelector('.input-project');

  // Div with all the projects
  const projectListDiv = document.querySelector('#list-projects');

  const initNavLinkButtons = () => {
    inboxProjectButton.addEventListener('click', () => {
      ProjectViewUI.openProject(ProjectList.getInboxProject());
      setActiveProject(inboxProjectButton);
    });

    todayProjectButton.addEventListener('click', () => {
      ProjectViewUI.openProject(ProjectList.getTodayProject());
      setActiveProject(todayProjectButton);
    });

    upcomingProjectButton.addEventListener('click', () => {
      ProjectViewUI.openProject(ProjectList.getUpcomingProject());
      setActiveProject(upcomingProjectButton);
    });
  };

  const setActiveProject = (buttonElement) => {
    const projectButtons = document.querySelectorAll('.btn-project');

    // Converting NodeList to array to use filter on it
    [...projectButtons]
      .filter((button) => button.getAttribute('id') !== 'btn-add-project')
      .forEach((button) => button.removeAttribute('active'));

    buttonElement.setAttribute('active', '');
  };

  const initAddProjectButtons = () => {
    // Add project button
    btnAddProject.addEventListener('click', openAddProjectForm);

    // Add project form
    inputAddProject.addEventListener('keyup', handleInputAddProject);
    btnFormAddProject.addEventListener('click', addProject);
    btnFormCancelProject.addEventListener('click', cancelAddProject);
  };

  // Add project button
  const openAddProjectForm = () => {
    displayAddProjectForm();
    hideAddProjectButton();
  };

  // Add project form
  const addProject = () => {
    const inputProject = document.querySelector('.input-project');

    // add the project to ProjectList and save it in the local storage
    const newProject = Project(inputProject.value);
    ProjectList.addProject(newProject);

    // Add
    addProjectButtons(newProject);

    hideAddProjectForm();
    displayAddProjectButton();
    clearAddProjectInput();
  };

  const cancelAddProject = () => {
    hideAddProjectForm();
    displayAddProjectButton();
    clearAddProjectInput();
  };

  const handleInputAddProject = (e) => {
    const addProjectButtonForm = document.querySelector('#add-project-buttons .btn-add');

    if (isValidProjectName(e.target.value) && e.key === 'Enter') {
      addProject();
    } else
      if (isValidProjectName(e.target.value)) {
        addProjectButtonForm.removeAttribute('disabled');
      } else {
        addProjectButtonForm.setAttribute('disabled', '');
      }
  };

  /** ***** START HELPERS to display or hide the add project button or add project form *********** */

  const clearAddProjectInput = () => {
    const inputProject = document.querySelector('.input-project');
    inputProject.value = '';
  };

  const displayAddProjectForm = () => {
    const addProjectForm = document.getElementById('add-project-form');
    addProjectForm.setAttribute('active', '');
  };

  const hideAddProjectForm = () => {
    const addProjectForm = document.getElementById('add-project-form');
    const addProjectFormButton = document.querySelector('#add-project-buttons .btn-add');
    addProjectForm.removeAttribute('active');
    addProjectFormButton.setAttribute('disabled', '');
  };

  const displayAddProjectButton = () => {
    const addProjectButton = document.getElementById('btn-add-project');
    addProjectButton.setAttribute('active', '');
  };

  const hideAddProjectButton = () => {
    const addProjectButton = document.getElementById('btn-add-project');
    addProjectButton.removeAttribute('active');
  };

  /** ***** END HELPERS to display or hide the add project button, the add project form, or the list of projects *********** */

  const deleteProject = (event, projectButton) => {
    event.stopPropagation();
    const projectId = projectButton.getAttribute('data-project');

    if (projectButton.hasAttribute('active')) {
      ProjectViewUI.cleanProjectView();
      ProjectViewUI.hideAddTaskButton();
      ProjectViewUI.hideProjectTitle();
    }

    ProjectList.deleteProject(projectId);
    projectButton.remove();
  };

  const displayProjectsAndTheirButtons = () => {
    ProjectList.getProjects()
      .filter((project) => !project.special)
      .forEach((project) => addProjectButtons(project));
  };

  const addProjectButtons = (project) => {
    // Set the new project button attributes and class
    const newProjectButton = document.createElement('button');
    newProjectButton.classList.add('btn-project');
    newProjectButton.setAttribute('id', `btn-${project.name}-project`);
    newProjectButton.setAttribute('data-project', `${project.id}`);

    // Add the new project button to the list of projects
    newProjectButton.innerHTML = `
            <div class="project-button-container">
                <div class="project-button-sub-container">
                    <img src="${ImgList}" alt="${project.name}"> <span class="project-name">${project.name}</span>
                </div>

            </div>
        `;

    // add event listener when clicking on the project
    newProjectButton.addEventListener('click', () => {
      ProjectViewUI.openProject(project);
      ProjectViewUI.hideAddTaskForm();
      ProjectViewUI.displayAddTaskButton();
      ProjectViewUI.clearInputTaskTitle();
      ProjectViewUI.clearInputTaskDescription();
      SideBarProjectUI.setActiveProject(newProjectButton);
    });

    projectListDiv.appendChild(newProjectButton);

    // add cross image to delete project
    const btnDeleteProject = document.createElement('div');
    btnDeleteProject.innerHTML = `<img class="btn-delete-project" src="${ImgClose}" alt="Delete project ${project.name}"></img>`;
    newProjectButton.appendChild(btnDeleteProject);

    // add event listener when clicking on delete project img
    btnDeleteProject.addEventListener('click', (e) => deleteProject(e, newProjectButton));
  };

  return {
    initNavLinkButtons,
    setActiveProject,
    initAddProjectButtons,
    addProjectButtons,
    displayProjectsAndTheirButtons,
  };
})();

export default SideBarProjectUI;
