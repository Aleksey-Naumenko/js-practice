const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getItem = (key) => JSON.parse(localStorage.getItem(key));


document.addEventListener('DOMContentLoaded', () => {
    renderListItems();
});

function onStorageChange(event) {
    if (event.key === 'tasks') {
        renderListItems();
    }
}
window.addEventListener('storage', onStorageChange);


const renderListItems = () => {
    const list = document.querySelector('.list');
    list.innerHTML = '';

    const tasks = getItem('tasks') || 0;

    const listElements = tasks
        .sort((a, b) => b.dateCreated - a.dateCreated)
        .sort((a, b) => b.dateDone - a.dateDone)
        .sort((a, b) => a.done - b.done)
        .map( ({ text, done, id = Math.floor(Math.random() * 10000) }) => {
            const listElement = document.createElement('li');
            listElement.classList.add('list__item');
            if (done) {
                listElement.classList.add('list__item_done');
            }
            const checkboxElement = document.createElement('input');
            checkboxElement.setAttribute('type', 'checkbox');
            checkboxElement.setAttribute('data-id', id);
            checkboxElement.checked = done;
            checkboxElement.classList.add('list__item-checkbox');
            listElement.append(checkboxElement, text);

            return listElement;
        });
        list.append(...listElements);
}


const listWithTasks = document.querySelector('.list');
const updateTasksList = event => {        
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

        renderListItems();
}
const updateTasksListHandler = listWithTasks.addEventListener('click', updateTasksList);


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

    renderListItems();

}
const addNewTaskHandler = creteBtn.addEventListener('click', addNewTask);