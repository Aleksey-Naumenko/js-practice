const tasks = [
    { text: 'Buy milk', done: false, date: new Date(), },
    { text: 'Pick up Tom from airport', done: false, date: new Date(), },
    { text: 'Visit party', done: false, date: new Date(), },
    { text: 'Visit doctor', done: true, date: new Date(), },
    { text: 'Buy meat', done: true, date: new Date(), },
];

const renderListItems = listItems => {
    const list = document.querySelector('.list');
    list.innerHTML = '';

    const listElements = listItems
        .sort((a, b) => a.done - b.done)
        .map( ({ text, done }) => {
            const listElement = document.createElement('li');
            listElement.classList.add('list__item');
            if (done) {
                listElement.classList.add('list__item_done');
            }
            const checkboxElement = document.createElement('input');
            checkboxElement.setAttribute('type', 'checkbox');
            checkboxElement.checked = done;
            checkboxElement.classList.add('list__item-checkbox');
            listElement.append(checkboxElement, text);

            return listElement;
        });

        list.append(...listElements);
}
renderListItems(tasks);

// const updatingList = (elem) => {
//     if (elem.onchange) {
//         tasks[i].done == true;
//     } else {
//         tasks[i].done == false;
//     }
//     renderListItems(tasks);
// }

// ------------------DON'T UNDERSTAND HERE --------------------------------

let list = Array.from(document.querySelectorAll('.list__item-checkbox'));
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('change', () => {
        for (let i = 0; i < tasks.length; i++) {
            if (list[i].chacked) {
                tasks[i].done == true;
            } else {
                tasks[i].done == false;
            }
            console.log(tasks);
        }
    });
    renderListItems(tasks);
}

//------------------------------------------------------------------------

const creteBtn = document.querySelector('.create-btn');
const addNewTask = () => {
    const input = document.querySelector('.task-input');
    if (!input.value) return;
    tasks.unshift({text: `${input.value}`, done: false, date: new Date(),});
    console.log(tasks);
    input.value = '';
    renderListItems(tasks);
}
const addNewTaskHandler = creteBtn.addEventListener('click', addNewTask);

//   При клике на чекбокс статус дела должен переключаться между 
//   выполнено / не выполнено. Соответственно список должен отобразить 
//   новое состояние дел


//       Элементы списка должны быть отсортированы по 
//       дате создания внутри своих категорий (не выполненные сверху,
//          выполненные внизу)
