let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 2 === 1) {
        console.log('Found');
        sum += i;
    }
}

if (sum * 5 > 5000) {
    console.log('Bigger');
} else if (sum * 5 > 5000) {
    console.log('Equal');
} else {
    console.log('Smaller');
}