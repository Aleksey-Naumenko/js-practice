const loginInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const loginFieldError = document.querySelector('.error-text_email');
const passwordFieldError = document.querySelector('.error-text_password');

const isRequired = value => value ?
    undefined :
    'Required';

const isEmail = value => value.includes('@') ?
    undefined :
    'Should be an email';

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
}

const validate = (fieldName, value) => {
    const validator = validatorsByField[fieldName];
    return validator
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
}

const onEmailChange = event => {
    const errorText = validate('email', event.target.value)
    loginFieldError.textContent = errorText; 
}

const onPasswordChange = event => {
    const errorText = validate('password', event.target.value)
    passwordFieldError.textContent = errorText; 
}

loginInput.addEventListener('input', onEmailChange);
passwordInput.addEventListener('input', onPasswordChange);



const loginForm = document.querySelector('.login-form');

// const onFormSubmit = event => {
//     event.preventDefault();
//     const formData = [...new FormData(loginForm)]
//         .reduce((acc, [field, value]) => ( {...acc, [field]: value} ), {});
//     console.log(formData)
//     alert (JSON.stringify(formData));
// };

const onFormSubmit = event => {
    event.preventDefault();
    let dataObj = {};
    const formData = [...new FormData(loginForm)];
    formData.map(item => dataObj[item[0]] = item[1] );
    alert(JSON.stringify(dataObj));
};

loginForm.addEventListener('submit', onFormSubmit);