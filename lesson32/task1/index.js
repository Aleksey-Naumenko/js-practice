const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay);
})

const asyncNum1 = getValueWithDelay(10, 1000);
const asyncNum2 = getValueWithDelay(20, 2000);
const asyncNum3 = getValueWithDelay(30, 3000);


const getSum = numbers =>
    numbers.reduce((acc, num) => acc + num, 0);

export const asyncSum = (...asyncNumbers) => {
    Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers));
}