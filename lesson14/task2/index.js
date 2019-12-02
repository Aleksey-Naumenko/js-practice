// 'use strict';
export default () => {
    let sender = 'Gromecode';
    let message = 'Hello';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text.bold();
    }

    function setSender(newSender) {
        sender = newSender.bold();
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}