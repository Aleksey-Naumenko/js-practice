import { getItem } from './storage.js';
export { renderTasksList };

const renderTasksList = () => {
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