export function sum(from, to) {
    return from + to;
}

export function compareSums(a, b, c, d) {
    let firstSum = sum(a, b);
    let secondSum = sum(c, d);
    if (firstSum === secondSum) return 'They are equal';
    if ((firstSum + firstSum) < secondSum) return 'Bigger twice';
    return firstSum > secondSum ? true : false;
}