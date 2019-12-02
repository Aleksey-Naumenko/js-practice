'use strict';

export default () => {
    let sender = 'Gromcode';
    let message = 'Just learn it!';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text; // .bold();
    }

    function setSender(newSender) {
        sender = newSender; //.bold();
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}