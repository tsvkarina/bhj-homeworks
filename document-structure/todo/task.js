document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task__input');
    const taskAddButton = document.getElementById('tasks__add');
    const taskList = document.getElementById('tasks__list');
    const taskForm = document.getElementById('tasks__form');

    function addTask(taskTitle) {
        if (taskTitle.trim() === '') return;

        taskList.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">
                    ${taskTitle}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);

        const taskRemoveButton = taskList.querySelector('.task:first-child .task__remove');
        taskRemoveButton.addEventListener('click', (event) => {
            event.preventDefault();
            taskRemoveButton.closest('.task').remove();
        });

        taskInput.value = '';
        taskInput.focus();
    }

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(taskInput.value);
    });
});
