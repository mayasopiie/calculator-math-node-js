var colors = require('colors/safe');

//--- 1. Function of addition
function add(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

//--- 2. Function of substraction
function substract(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous - current;
    });
}

//--- 3. Function of multiplication
function multiply(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous * current;
    });
}

//--- 4. Function of division
function divide(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous / current;
    });
}

//--- 5. Function of modulation
function modulo(number, divider) {
    return number % divider;
}

//--- 6. Function of square
function square(number) {
    return number * number;
}


const number1 = substract(add(multiply(2, 8), 10), 6);
const number2 = add(divide(multiply(16, add(4, 6)), 40), 27);
const number3 = substract(add(2, multiply(divide(100, 5), 4)), 48)

console.log(colors.grey.bgWhite("2 x 8 + 10 - 6 =")); //--- Question number 1
console.log(colors.blue.bold.underline(number1));
console.log(colors.rainbow("---------------------"));

console.log(colors.grey.bgWhite("16 x (4 + 6) : 40 + 27 =")); //--- Question number 2
console.log(colors.blue.bold.underline(number2));
console.log(colors.america("---------------------"));

console.log(colors.grey.bgWhite("2 + 100 : 5 x 4 - 48 =")); //--- Question number 3
console.log(colors.blue.bold.underline(number3));
console.log(colors.america("---------------------"));