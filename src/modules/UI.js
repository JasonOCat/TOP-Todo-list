
// one instance of UI so I use module pattern
const UI = (() => {
    const projectView = document.querySelector(".project-view");

    const initHomePage = () => {
        initProjectButtons();
        displayProject('Inbox');
    }

    const displayProject = (projectName) => {
        projectView.innerHTML = 
        `
        <h2>${projectName}</h2>

        `
    };

    const setActiveProject = (buttonElement) => {

        const projectButtons = document.querySelectorAll('.btn-project');
        projectButtons.forEach(button => button.removeAttribute('active'));

        buttonElement.setAttribute('active','');

    }

    const initProjectButtons = () => {
        const inboxProjectButton = document.getElementById('btn-inbox-project');
        const todayProjectButton = document.getElementById('btn-today-project');
        const upcomingProjectButton = document.getElementById('btn-upcoming-project');
    
        inboxProjectButton.addEventListener('click', (event) => {
            let buttonElement = event.target.closest(".btn-project"); // get the closest data-project attribute that contains the name of the Project
            displayProject('Inbox');
            setActiveProject(buttonElement);
        });

        todayProjectButton.addEventListener('click', (event) => {
            let buttonElement = event.target.closest(".btn-project");
            displayProject('Today');
            setActiveProject(buttonElement);
        });

        upcomingProjectButton.addEventListener('click', (event) => {
            let buttonElement = event.target.closest(".btn-project");
            displayProject('Upcoming');
            setActiveProject(buttonElement);
        });


    };

    initHomePage();
    
    return {
        
    }
})();


export default UI;