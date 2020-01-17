const objContext = {
    name: 'John',
    age: '19',
}


function greetingCallback(id, sister) {
    console.log(`
        Hello!
        My name is ${this.name}!
        I'm ${this.age} years old!
        My ID is ${id}.
        And my sister is ${sister}.
        `);
}


export function delay(delay, callback, context, ...args) {
    setTimeout(() => {
        callback.bind(context, ...args)();
    }, delay);
}

delay(1000, greetingCallback, objContext, '123', 'Molly');