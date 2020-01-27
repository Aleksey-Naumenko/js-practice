import { onSendData, userFormElem } from './createGateway.js';

export {
    userNameElem,
    userEmailElem,
    userPasswordElem,
    errorFieldElem
};

const userEmailElem = document.querySelector('#email');
const userNameElem = document.querySelector('#name');
const userPasswordElem = document.querySelector('#password');
const submitBtnElem = document.querySelector('.submit-button');
const errorFieldElem = document.querySelector('.error-text');



const reportValidity = () => {

    if (!userEmailElem.value.includes('@') ||
        userNameElem.value.length < 3 ||
        !userPasswordElem.value.includes(5)) {   // pay attention to this condition if you wanna pass

        submitBtnElem.setAttribute('disabled', 'disabled');
    } else {
        submitBtnElem.removeAttribute('disabled');
    }

    errorFieldElem.textContent = '';
}

userFormElem.addEventListener('input', reportValidity);