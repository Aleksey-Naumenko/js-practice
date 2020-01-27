import {
    userEmailElem,
    userNameElem,
    userPasswordElem,
    errorFieldElem
} from './index.js';

export { onSendData, userFormElem };

const userFormElem = document.querySelector('.login-form');
const baseUrl = 'https://crudcrud.com/api/20947a09a0f74506bb172c629f872bba/users';



const saveNewUser = data => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data),
    });
};



const onSendData = (e) => {
    e.preventDefault();

    const dataObj = [...new FormData(userFormElem)]
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }, {}));

    saveNewUser(dataObj)
        .then(response => {
            alert(response.json());
            userEmailElem.value = '';
            userNameElem.value = '';
            userPasswordElem.value = '';        
        })
        .catch(() => {
            errorFieldElem.textContent = 'Failed to create user';
        });
}


userFormElem.addEventListener('submit', onSendData);