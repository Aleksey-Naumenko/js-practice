let factorial = 0;

for (let i = 1; i <= 1000; i++) {
    factorial += i;
}

let num = Math.floor(factorial / 1234);
let withoutRest = num * 1234;
let result =  factorial - withoutRest;
num > result ? console.log(true) : console.log(false);