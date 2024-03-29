import { format, parseISO, startOfToday, isSameYear } from 'date-fns';
import Task, {
  isValidTaskTitle,
  getFormattedDueDate,
  updateTaskFromAllProjects,
} from '../Task';
import * as ProjectList from '../ProjectList';
import {
  addTaskToProject,
  removeTaskFromAllProject,
  getTaskById,
} from '../Project';
import * as Storage from '../Storage';
import * as DateUtils from '../DateUtils';

const projectTitle = document.getElementById('project-title');
const projectViewDiv = document.querySelector('.project-view');

// Add task buttons elements
const btnAddTask = document.getElementById('btn-add-task');

// Form elements
const formAddTask = document.getElementById('form-add-task-container');
const btnFormAddTask = document.getElementById('btn-form-add-task');
const btnFormCancelAddTask = document.getElementById('btn-form-cancel-task');
const inputTaskTitle = document.getElementById('input-task-title');
const inputTaskDescription = document.getElementById('input-task-description');
const inputDateAddTask = document.getElementById('input-date-add-task');

const getCurrentProject = () => {
  const currentProjectId = projectTitle.getAttribute('data-project');
  return ProjectList.getProjectById(currentProjectId);
};

const initAddTaskButton = () => {
  // do not display the add task button and form if the user is on the Upcoming tasks
  if (getCurrentProject() === ProjectList.getUpcomingProject()) {
    btnAddTask.style.visibility = 'hidden';
    formAddTask.style.visibility = 'hidden';
  } else {
    btnAddTask.style.visibility = 'visible';
    formAddTask.style.visibility = 'visible';
  }

  // Button add Task
  btnAddTask.addEventListener('click', openAddTaskForm);

  // Form add Task
  inputTaskTitle.addEventListener('keyup', handleInputAddTaskTitle);
  btnFormAddTask.addEventListener('click', addTask);
  btnFormCancelAddTask.addEventListener('click', cancelAddTask);

  if (getCurrentProject() === ProjectList.getTodayProject()) {
    inputDateAddTask.value = DateUtils.getDateNow();
  } else {
    inputDateAddTask.value = '';
  }

  // initialize date task
  inputDateAddTask.min = DateUtils.getDateNow();
};

const openAddTaskForm = () => {
  saveAndCloseOpenedTask();
  displayAddTaskForm();
  hideAddTaskButton();
};

const saveAndCloseOpenedTask = () => {
  // if an update form was already open we save the update if it's valid
  const openedUpdateTaskForm = document.querySelector(
    '.form-update-task-container[active]'
  );
  if (openedUpdateTaskForm) {
    // previous element contains the button task
    const btnTask = openedUpdateTaskForm.previousElementSibling;
    updateOpenedTask(btnTask, openedUpdateTaskForm);
  }
};

const addTask = () => {
  if (!isValidTaskTitle(inputTaskTitle.value)) {
    // case when the add task form is open and the user click on another task to update it
    hideAddTaskForm();
    displayAddTaskButton();
    clearInputTaskTitle();
    clearInputTaskDescription();
    return;
  }
  // add the Task to the ProjectList and save the new ProjectList with the new task
  const newTask = Task(inputTaskTitle.value, inputTaskDescription.value);

  newTask.dueDate = inputDateAddTask.value || null;

  const currentProject = getCurrentProject();

  addTaskToProject(newTask, currentProject);

  // special case, if today project and its due date is not today
  // do not display it on today project
  if (
    getCurrentProject() !== ProjectList.getTodayProject() ||
    DateUtils.isDateToday(newTask.dueDate)
  ) {
    // display the new task
    displayTaskAndItsButtons(newTask);
  }

  hideAddTaskForm();
  displayAddTaskButton();
  clearInputTaskTitle();
  clearInputTaskDescription();
  clearInputTaskDueDate();
};

const updateOpenedTask = (btnTask, openedUpdateTaskForm) => {
  // get the closest input of the opened task
  const inputOpenedTaskTitle = btnTask.nextSibling.querySelector(
    '.input-update-task-title'
  );
  const inputOpenedTaskDescription = btnTask.nextSibling.querySelector(
    '.input-update-task-description'
  );
  if (isValidTaskTitle(inputOpenedTaskTitle.value)) {
    // save the opened task
    const taskToUpdate = getTaskById(
      btnTask.getAttribute('data-task'),
      getCurrentProject()
    );
    taskToUpdate.title = inputOpenedTaskTitle.value;
    taskToUpdate.description = inputOpenedTaskDescription.value;

    const spanTitle = btnTask.querySelector('span.task-title');
    const spanDescription = btnTask.querySelector('span.task-description');

    spanTitle.textContent = taskToUpdate.title;
    spanDescription.textContent = taskToUpdate.description;
    Storage.saveProjectList();
  }

  openedUpdateTaskForm.removeAttribute('active');
  btnTask.setAttribute('active', '');
};

const cancelAddTask = () => {
  hideAddTaskForm();
  displayAddTaskButton();
  clearInputTaskTitle();
  clearInputTaskDescription();
  inputTaskDescription.setAttribute('style', '');
};

const clearInputTaskTitle = () => {
  inputTaskTitle.value = '';
  btnFormAddTask.setAttribute('disabled', '');
};

const clearInputTaskDescription = () => {
  inputTaskDescription.value = '';
  inputTaskDescription.style = '';
};

const clearInputTaskDueDate = () => {
  inputDateAddTask.value = '';
};

const handleInputAddTaskTitle = (e) => {
  if (isValidTaskTitle(e.target.value) && e.key === 'Enter') {
    addTask();
  } else if (isValidTaskTitle(e.target.value)) {
    btnFormAddTask.removeAttribute('disabled');
  } else {
    btnFormAddTask.setAttribute('disabled', '');
  }
};

/* START HELPERS to display or not button add task, or the form to add a task */

const displayAddTaskForm = () => {
  formAddTask.setAttribute('active', '');
};

const hideAddTaskForm = () => {
  formAddTask.removeAttribute('active');
};

const hideAddTaskButton = () => {
  btnAddTask.removeAttribute('active');
};

const displayAddTaskButton = () => {
  btnAddTask.setAttribute('active', '');
};

const hideProjectTitle = () => {
  projectTitle.innerHTML = '';
};

/* END HELPERS to display or not button add task, or the form to add a task */

const setCurrentProjectId = (project) => {
  projectTitle.setAttribute('data-project', project.id);
  formAddTask.setAttribute('data-project', project.id);
};

const openProject = (project) => {
  setCurrentProjectId(project);

  projectTitle.innerHTML = `
        <h2>${project.name}</h2>
        `;
  initProjectTasksAndTheirButtons();
};

const cleanProjectView = () => {
  projectViewDiv.innerHTML = '';
};

const initProjectTasksAndTheirButtons = () => {
  cleanProjectView();
  getCurrentProject().tasks.forEach((task) => displayTaskAndItsButtons(task));
  initAddTaskButton();
};

const displayTaskAndItsButtons = (task) => {
  // Set the task button attributes and class
  const newTaskButtonDiv = document.createElement('div');
  newTaskButtonDiv.classList.add('task-div-container');
  newTaskButtonDiv.setAttribute('active', '');
  const newTaskButton = document.createElement('button');
  newTaskButton.classList.add('btn-task');
  newTaskButton.setAttribute('active', '');
  newTaskButton.setAttribute('data-task', task.id);

  // display the task button to the list of tasks

  newTaskButton.innerHTML = `
            <div class="task-button-container">


                <div class="task-button-sub-container">
                    <input class="checkbox-task-done rounded-checkbox" type="checkbox">
                    <span class="task-title">${task.title}</span>
                </div>


                <span class="task-description">
                    ${task.description ? task.description : ''} 
                </span>
                <div class="task-description-and-project">
                    <span class="task-date">

                        ${
                          task.dueDate
                            ? DateUtils.isDateToday(task.dueDate)
                              ? '<p style="color: green;">Today</p>'
                              : format(parseISO(task.dueDate), 'd LLL') +
                                (isSameYear(
                                  parseISO(task.dueDate),
                                  startOfToday()
                                )
                                  ? ''
                                  : ` ${format(
                                      parseISO(task.dueDate),
                                      'yyyy'
                                    )}`)
                            : ''
                        }
                    </span>
                    <div>
                        ${ProjectList.findProjectOfTask(task).name}
                    </div>
                </div>
            </div>
            
        `;

  newTaskButtonDiv.appendChild(newTaskButton);

  const divUpdateTaskForm = document.createElement('div');
  divUpdateTaskForm.classList.add('form-update-task-container');
  divUpdateTaskForm.innerHTML = `
            <div class="form-update-task">
                <input class="input-update-task-title" type="text" placeholder="Name of the task">
                <textarea class="input-update-task-description" rows="3" placeholder="Description"></textarea>

                <div class="duedate-and-project">
                <input class="input-update-task-date" type="date" 
                value=${task.dueDate ? getFormattedDueDate(task) : null}
                min=${DateUtils.getDateNow()}>

                <div class="task-project-display">${
                  ProjectList.findProjectOfTask(task).name
                }</div>
                </div>

            </div>
            <div class="update-task-buttons">
                <button class="btn-form-cancel-update-task">Cancel</button>
                <button class="btn-form-update-task">Save</button>
            </div>
        `;

  // when clicking on the task
  newTaskButton.addEventListener('click', () => {
    // hide the Task button
    newTaskButton.removeAttribute('active');

    // hide the add task form if it was open and save the new task if it's valid
    addTask();

    // if an update form was already open we save the update if it's valid
    saveAndCloseOpenedTask();

    // display the form to update the Task
    divUpdateTaskForm.setAttribute('active', '');

    // in the update form, fill the title and description of the task
    const inputUpdateTitle = divUpdateTaskForm.querySelector(
      '.input-update-task-title'
    );
    const inputUpdateDescription = divUpdateTaskForm.querySelector(
      '.input-update-task-description'
    );

    inputUpdateTitle.value = task.title;
    inputUpdateDescription.value = task.description;
    inputUpdateTitle.focus();
  });

  // add and cancel update task buttons
  initCancelAndSaveTaskButtons(divUpdateTaskForm, newTaskButton, task);

  // checkbox
  initCheckboxTaskDone(newTaskButtonDiv, task);

  newTaskButton.insertAdjacentElement('afterend', divUpdateTaskForm);
  projectViewDiv.appendChild(newTaskButtonDiv);
};

const initCheckboxTaskDone = (newTaskButtonDiv, task) => {
  const checkboxTaskDone = newTaskButtonDiv.querySelector(
    '.checkbox-task-done'
  );

  checkboxTaskDone.addEventListener('click', (e) => {
    e.stopPropagation();
    removeTaskFromAllProject(task);
    newTaskButtonDiv.remove();
    Storage.saveProjectList();
  });
};

const initCancelAndSaveTaskButtons = (divUpdateTaskForm, taskButton, task) => {
  const inputUpdateTitle = divUpdateTaskForm.querySelector(
    '.input-update-task-title'
  );
  const inputUpdateDate = divUpdateTaskForm.querySelector(
    '.input-update-task-date'
  );
  const inputUpdateDescription = divUpdateTaskForm.querySelector(
    '.input-update-task-description'
  );
  const cancelUpdateButton = divUpdateTaskForm.querySelector(
    '.btn-form-cancel-update-task'
  );
  const saveUpdateButton = divUpdateTaskForm.querySelector(
    '.btn-form-update-task'
  );
  const spanTaskTitle = taskButton.querySelector('span.task-title');
  const spanTaskDescription = taskButton.querySelector('span.task-description');
  const spanTaskDate = taskButton.querySelector('span.task-date');

  // Cancel update
  cancelUpdateButton.addEventListener('click', () => {
    divUpdateTaskForm.removeAttribute('active', '');
    taskButton.setAttribute('active', '');
    saveUpdateButton.removeAttribute('disabled');
  });

  // Listener when updating title or the description

  const updateTask = () => {
    // case when it's today project and the date is not today
    if (
      getCurrentProject() === ProjectList.getTodayProject() &&
      !DateUtils.isDateToday(inputUpdateDate.value)
    ) {
      // remove the task from Today project
      // removeTaskFromOneProject(task, ProjectList.getTodayProject());

      // do not display the task in project anymore
      taskButton.parentElement.remove();

      // update the task in the real project
      task.title = inputUpdateTitle.value;
      task.description = inputUpdateDescription.value;
      task.dueDate = inputUpdateDate.value;
      updateTaskFromAllProjects(task);
      return;
    }

    task.title = inputUpdateTitle.value;
    task.description = inputUpdateDescription.value;
    task.dueDate = inputUpdateDate.value;
    divUpdateTaskForm.removeAttribute('active');
    taskButton.setAttribute('active', '');
    spanTaskTitle.textContent = task.title;
    spanTaskDescription.textContent = task.description;
    spanTaskDate.innerHTML = `${
      task.dueDate
        ? DateUtils.isDateToday(task.dueDate)
          ? '<p style="color: green;">Today</p>'
          : format(parseISO(task.dueDate), 'd LLL') +
            (isSameYear(parseISO(task.dueDate), startOfToday())
              ? ''
              : ` ${format(parseISO(task.dueDate), 'yyyy')}`)
        : ''
    }`;
    inputUpdateDate.value = task.dueDate;
    updateTaskFromAllProjects(task);
    Storage.saveProjectList();
  };

  inputUpdateTitle.addEventListener('keyup', (e) => {
    if (isValidTaskTitle(e.target.value) && e.key === 'Enter') {
      updateTask();
    } else if (isValidTaskTitle(e.target.value)) {
      saveUpdateButton.removeAttribute('disabled');
    } else {
      saveUpdateButton.setAttribute('disabled', '');
    }
  });

  // Save update
  saveUpdateButton.addEventListener('click', () => {
    updateTask();
  });
};

export {
  openProject,
  cleanProjectView,
  initAddTaskButton,
  displayTaskAndItsButtons,
  initProjectTasksAndTheirButtons,
  displayAddTaskForm,
  hideAddTaskForm,
  displayAddTaskButton,
  clearInputTaskTitle,
  clearInputTaskDescription,
  hideAddTaskButton,
  hideProjectTitle,
};
