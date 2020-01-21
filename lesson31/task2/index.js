export const asyncCalculator = numbr => new Promise((resolve) => {
    setTimeout(() => {
        console.log(`Initial value: ${numbr}`);
        resolve(numbr);
    }, 500);
})
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const squaredNumber = value * value;
            console.log(`Squared value: ${squaredNumber}`);
            resolve(squaredNumber);
        }, 500);
    }))
    .then(value => {
        const squaredNumber = value * 2;
        console.log(`Doubled value: ${squaredNumber}`);
        return squaredNumber;
    });

asyncCalculator(5);