const divRect = document.querySelector('.rect_div');
const pRect = document.querySelector('.rect_p');
const spanRect = document.querySelector('.rect_span');

const clearBtn = document.querySelector('.clear-btn');
const remoteHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const textField = document.querySelector('.events-list');

const logTarget = (text, color) => {
    textField.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// divRect.addEventListener('click', logGreyDiv, true);
// pRect.addEventListener('click', logGreyP, true);
// spanRect.addEventListener('click', logGreySpan, true);

// divRect.addEventListener('click', logGreenDiv);
// pRect.addEventListener('click', logGreenP);
// spanRect.addEventListener('click', logGreenSpan);

clearBtn.addEventListener('click', () => {
    textField.innerHTML = ``;
});

remoteHandlersBtn.addEventListener('click', () => {
    divRect.removeEventListener('click', logGreyDiv, true);
    divRect.removeEventListener('click', logGreenDiv);

    pRect.removeEventListener('click', logGreyP, true);
    pRect.removeEventListener('click', logGreenP);

    spanRect.removeEventListener('click', logGreySpan, true);
    spanRect.removeEventListener('click', logGreenSpan);
});

attachHandlersBtn.addEventListener('click', () => {
    divRect.addEventListener('click', logGreyDiv, true);
    divRect.addEventListener('click', logGreenDiv);

    pRect.addEventListener('click', logGreyP, true);
    pRect.addEventListener('click', logGreenP);

    spanRect.addEventListener('click', logGreySpan, true);
    spanRect.addEventListener('click', logGreenSpan);
});

