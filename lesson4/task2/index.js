const m = 40;
const n = 191;

let result = 1;

for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
        result *= i;
    }
}

console.log(result);