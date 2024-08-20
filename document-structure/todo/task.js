document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task__input');
    const taskAddButton = document.getElementById('tasks__add');
    const taskList = document.getElementById('tasks__list');
    const taskForm = document.getElementById('tasks__form');

    function createTaskElement(taskTitle) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';

        const taskTitleElement = document.createElement('div');
        taskTitleElement.className = 'task__title';
        taskTitleElement.textContent = taskTitle;

        const taskRemoveButton = document.createElement('a');
        taskRemoveButton.href = '#';
        taskRemoveButton.className = 'task__remove';
        taskRemoveButton.textContent = '×';

        taskRemoveButton.addEventListener('click', (event) => {
            event.preventDefault();
            taskElement.remove();
        });

        taskElement.appendChild(taskTitleElement);
        taskElement.appendChild(taskRemoveButton);

        return taskElement;
    }

    function addTask(taskTitle) {
        if (taskTitle.trim() === '') return; 
        const taskElement = createTaskElement(taskTitle);
        taskList.appendChild(taskElement);
        taskInput.value = '';
        taskInput.focus();
    }

    taskAddButton.addEventListener('click', (event) => {
        event.preventDefault();
        addTask(taskInput.value);
    });

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(taskInput.value);
    });
});
