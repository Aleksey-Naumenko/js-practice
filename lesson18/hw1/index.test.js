import { spy } from './index';

it ('Get nested array of arguments', () => {
    function test(a, b) {
        return Math.sqrt(a * a + b * b);
    }
    const spyTest = spy(test);
    spyTest(12334234, 23424);
    let result = spyTest.calls;
    expect(result).toEqual([ [12334234, 23424] ]);
});

it ('Get two nested arrays of arguments', () => {
    function test(a, b) {
        return Math.sqrt(a * a + b * b);
    }
    const spyTest = spy(test);
    spyTest(4, 2);
    spyTest(9, 1);
    let result = spyTest.calls;
    expect(result).toEqual([ [4, 2], [9, 1] ]);
});

it ('Get changed context', () => {
    const user = {
        name: 'John',
        sayHi() {
            return this.name;
        }
    };
    const spyMethod = spy(user.sayHi);
    let result = spyMethod.apply({ name: 'Tom' });
    expect(result).toEqual('Tom');
});