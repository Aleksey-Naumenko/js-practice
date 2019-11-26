let m = 40;
let n = 51;

let result = 1;

for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
        result *= i;
    }
    m++;
}

console.log(result);