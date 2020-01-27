import { onSendData, userFormElem } from './createGateway.js';

export {
    userNameElem,
    userEmailElem,
    userPasswordElem,
    submitBtnElem,
    errorFieldElem
};

const userEmailElem = document.querySelector('#email');
const userNameElem = document.querySelector('#name');
const userPasswordElem = document.querySelector('#password');
const submitBtnElem = document.querySelector('.submit-button');
const errorFieldElem = document.querySelector('.error-text');



const reportValidity = () => {

    if (!userEmailElem.value.includes('@') ||
        userNameElem.value.length < 1 ||
        userPasswordElem.value.length < 1) {

        submitBtnElem.setAttribute('disabled', 'disabled');
    } else {
        submitBtnElem.removeAttribute('disabled');
        submitBtnElem.setAttribute('enabled', 'enabled');
    }

    errorFieldElem.textContent = '';
}

userFormElem.addEventListener('input', reportValidity);