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

console.log("2 x 8 + 10 - 6 =");
console.log(substract(add(multiply(2, 8), 10), 6));
console.log("---");

console.log("16 x (4 + 6) : 40 + 27 =");
console.log(add(divide(multiply(16, add(4, 6)), 40), 27));
console.log("---");

console.log("2 + 100 : 5 x 4 - 48 =");
console.log(substract(add(2, multiply(divide(100, 5), 4)), 48));
console.log("---");