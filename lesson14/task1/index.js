let message = 'Hello';

export function sendMessage(name) {
    let sender = 'Gromcode';
    console.log(`${name}, ${message}! Your ${sender}`);
}

export function setMessage(newText) {
    message = newText;
}

