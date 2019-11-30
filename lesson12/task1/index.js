function calc(str) {
    let data = str.split(' ');
    let [a, operand, b] = data;
    let result;

    switch (operand) {
        case '+': 
            result = Number(a) + Number(b);
            break;

        case '-':
            result = a - b;
            break;

        case '*':
            result = a * b;
            break;

        case '/':
            result = a / b;
            break;
    }

    return `${str} = ${result}`;
}