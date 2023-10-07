import './css/style.css';
import './css/header.css';
import './css/footer.css';
import './css/middle-content.css';
import './css/sidebar.css';

import * as ProjectList from './modules/ProjectList';
import initHomePageUI from './modules/UI/MainUI';

ProjectList.initProjects();
initHomePageUI();

// ProjectList.projects.forEach(project => {
//     console.log(project.name);
//     project.tasks.forEach((task) => console.log(task));
// });
