import './css/style.css';
import './css/header.css';
import './css/footer.css';
import './css/middle-content.css';
import './css/sidebar.css';

import taskFactory from './modules/task';
import { format, parse, compareAsc } from 'date-fns'

const task = taskFactory("title", "description", new Date(2022,11,31));
console.log(new Date(2022,11,30));
console.log(task.completed);
task.completed = true;
console.log(task.completed);



console.log(task.isPresentOrFutureDate(task.dueDate));











