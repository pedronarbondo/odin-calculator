let firstOperand;
let secondOperand;
let operatorSymbol;

let clearButton = document.querySelector(".clear-button"); 
let deleteButton = document.querySelector(".delete-button");
let divideButton = document.querySelector(".divide");
let multiplyButton = document.querySelector(".multiply");
let substractButton = document.querySelector(".substract")
let sumButton = document.querySelector(".sums");
let equalsButton = document.querySelector(".equals")
let decimalButton = document.querySelector(".decimal"); 
let digits = document.querySelectorAll(".numberData");

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
