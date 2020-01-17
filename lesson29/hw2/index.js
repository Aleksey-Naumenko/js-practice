const objContext = {
    name: 'John',
    age: '19',
}


function greeting(id) {
    console.log(`Hello!
        My name is ${this.name}!
        I'm ${this.age} years old!
        My ID is ${id}`);
}


export function delay(delay, callback, context, ...args) {
    setTimeout(() => {
        const fnCallBack = callback.bind(context, ...args);
        fnCallBack();
    }, delay * 1000);
}

// delay(3, greeting, objContext, '123');