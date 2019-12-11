const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
]

const renderListItems = listItems => {
    const list = document.querySelector('.list');

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
