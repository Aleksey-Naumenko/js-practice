export function sumOfSquares() {
    return [...arguments]
        .map(item => item * item)
        .reduce((acc, item) => acc + item, 0);
}