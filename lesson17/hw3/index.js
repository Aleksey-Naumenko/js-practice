export function bind(func, context, ...arguments) {
    return function(...thisArgs) {
        return func.call(context, ...thisArgs, ...arguments);
    }
}

// function showFullName(street) {
//     console.log(`My full name is ${this.name} ${this.lastName}.
//         I live on ${street}`);
// }

// let user = {
//     name: 'Bob',
//     lastName: 'Marley',
// }

// let firstUser = bind(showFullName, user);
// console.log(firstUser('MainRoad, 26'));