import { setItem, getItem } from './storage.js';
import { renderTasksList } from './render-tasks.js';

export { addNewTask };


const creteBtn = document.querySelector('.create-btn');
const addNewTask = () => {
    const input = document.querySelector('.task-input');

    const tasks = getItem('tasks') || 0;

    if (!input.value) return;
    tasks.unshift({
        text: `${input.value}`,
        done: false,
        dateCreated: new Date(),
        id: Math.floor(Math.random() * 10000),
        dateDone: null
    });
    input.value = '';
    
    setItem('tasks', tasks);

    renderTasksList();

}
const addNewTaskHandler = creteBtn.addEventListener('click', addNewTask);