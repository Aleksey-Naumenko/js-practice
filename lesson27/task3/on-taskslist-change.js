import { setItem, getItem } from './storage.js';
import { renderTasksList } from './render-tasks.js';

export { onTasksListChange };


const listWithTasks = document.querySelector('.list');
const onTasksListChange = event => {        
        const isCheckbox = event.target.classList.contains('list__item-checkbox');
        if (!isCheckbox) {
            return;
        }

        const tasks = getItem('tasks');

        const taskData = tasks.find(task => task.id == event.target.dataset.id);

        Object.assign(taskData, { done: event.target.checked });
        if (taskData.dateDone == null) {
            taskData.dateDone = new Date();
        } else {
            taskData.dateDone = null;
        }

        setItem('tasks', tasks);

        renderTasksList();
}
const updateTasksListHandler = listWithTasks.addEventListener('click', onTasksListChange);
