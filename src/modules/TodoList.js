import Project from './Project'


// one instance of TODO list so I use module pattern
const TodoList = (() => {
    let _projects = [];
    _projects.push(Project("Inbox"));
    _projects.push(Project("Today"));
    _projects.push(Project("Upcoming"));

    return {
        get projects() {
            return _projects;
        }
    }

})();


export default TodoList;

