import { createCalculator } from './index';

it ('get sum', () => {
    let calc = createCalculator();
    let result = calc.add(4)
    expect(result).toEqual(4);
})

it ('subtract the number from the previous action', () => {
    let calc = createCalculator();
    calc.add(4);
    let result = calc.decrease(2);
    expect(result).toEqual(2);
})

it ('reset the counter from the previous action', () => {
    let calc = createCalculator();
    calc.add(4);
    calc.decrease(2);
    let result = calc.reset();
    expect(result).toEqual(0);
})

