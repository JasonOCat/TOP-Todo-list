import './css/style.css';
import './css/header.css';
import './css/footer.css';
import './css/middle-content.css';
import './css/sidebar.css';

import Task from './modules/Task';
import Project from './modules/Project';
import TodoList from './modules/TodoList';
import UI from './modules/UI';
import { format, parse, compareAsc } from 'date-fns'

const task = Task("title", "description", new Date(2022,11,31));
const project = Project("Project");

console.log(TodoList.projects);

project.addTask(task);
console.log(project.tasks);











