'use strict';

export default () => {
    let sender = 'Gromcode';
    let message = 'Hello';

    function sendMessage(name) {
        console.log(`${name}, ${message}. Your ${sender}`);
    }

    function setMessage(text) {
        // text.style.fontWeight = 'bold';
        message = text; // .bold();
    }

    function setSender(newSender) {
        // newSender.style.fontWeight = 'bold';
        sender = newSender; //.bold();
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}