export function spy(func) {
	let calls = [];
    let t =  function spied(...args) {
        calls.push(Array.from(args));
        t.bind(func, args);
	}
    t.calls = calls;
    return t;
}

// function test(a, b) {
//     return Math.sqrt(a * a + b * b);
// }

// const spyTest = spy(test);
// spyTest(4, 2);
// spyTest(9, 1);

// spyTest.calls // [ [4, 2], [9, 1] ]


// // Поддержка функций с контекстом

// const user = {
//     name: 'John',
//     sayHi() {
//         return this.name;
//     }
// };

// const spyMethod = spy(user.sayHi);

// spyMethod.apply({ name: 'Tom' }); // 'Tom'

// spyMethod.calls // [ [] ]