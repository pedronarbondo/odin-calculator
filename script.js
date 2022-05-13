let firstOperand;
let secondOperand;
let operatorSymbol;

let clearButton = document.getElementById("clear-button"); 
let deleteButton = document.getElementById("delete-button");
let divideButton = document.getElementById("divide");
let multiplyButton = document.getElementById("multiply");
let substractButton = document.getElementById("substract")
let sumButton = document.getElementById("sums");
let equalsButton = document.getElementById("equals")
let decimalButton = document.getElementById("decimal"); 
let digits = document.getElementsByClassName("numberData");

function sum(a, b){
    return a + b
}

function substract(a, b){
    return a - b

}
function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(operator, a, b){
if (operator == sum) {
    return sum(a, b);
}
else if (operator == substract){
    return substract(a, b);
}
else if (operator == divide){
    if (b === 0) return null;
    else return divide(a, b);
}
else if (operator == multiply)
    return multiply(a, b);
}