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
let bottomDisplay = document.querySelector(".bottom-display");
let topDisplay = document.querySelector(".top-display");

/* I know this next method would have been easier if I had just put the same class
to all digits and then querySelected by class, but I couldn't figure out how to
then assign the value each digit had to have*/
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");

zero.addEventListener("click", () => {
    if (bottomDisplay.textContent != `${/^00/}`){
    bottomDisplay.textContent = `${bottomDisplay.textContent}${zero.textContent}`}})
one.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${one.textContent}`)
two.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${two.textContent}`)
three.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${three.textContent}`)
four.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${four.textContent}`)
five.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${five.textContent}`)
six.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${six.textContent}`)
seven.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${seven.textContent}`)
eight.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${eight.textContent}`)
nine.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${nine.textContent}`)

function clearScreens(){
    topDisplay.textContent = "";
    bottomDisplay.textContent = "";
    return;
}
clearButton.addEventListener("click", clearScreens);


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