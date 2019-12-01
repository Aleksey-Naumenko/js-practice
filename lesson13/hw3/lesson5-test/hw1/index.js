export function getSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return null;

    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}