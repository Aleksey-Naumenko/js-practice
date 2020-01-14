import { renderTasksList } from './render-tasks.js';

export {
    setItem,
    getItem,
    onStorageChange
}


const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getItem = (key) => JSON.parse(localStorage.getItem(key));


document.addEventListener('DOMContentLoaded', () => {
    renderTasksList();
});

function onStorageChange(event) {
    if (event.key === 'tasks') {
        renderTasksList();
    }
}
window.addEventListener('storage', onStorageChange);