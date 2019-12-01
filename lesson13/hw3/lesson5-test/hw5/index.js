export function findDivCount(a, b, n) {
    if (typeof n !== 'number') return null;
    let counter = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            counter++;
        }
    }
    if (counter === 0) return null;
    return counter;
}