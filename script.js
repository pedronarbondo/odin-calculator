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

zero.addEventListener("click", () => bottomDisplay.textContent = 
`${bottomDisplay.textContent}${zero.textContent}`)
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
    secondOperator = false;
    return;
}

clearButton.addEventListener("click", clearScreens);


let firstOperand;
let secondOperand;
let secondOperator = false;
function operatorButton(operator){
    if (secondOperator == false){
        firstOperand = parseInt(bottomDisplay.textContent);
        bottomDisplay.textContent = "";
        topDisplay.textContent = `${firstOperand} ${operator}`;
        secondOperator = true;
    return
    }
    else {
        secondOperand = parseInt(bottomDisplay.textContent);
        topDisplay.textContent = `${operate(operator, firstOperand, secondOperand)} ${operator}`;
        bottomDisplay.textContent = `${operate(operator, firstOperand, secondOperand)}`;
    }
}

function theEqualsButton(operator){
    topDisplay.textContent = `${firstOperand} ${operator} ${secondOperand} = 
    ${operate(operator, firstOperand, secondOperand)}`;
    bottomDisplay.textContent = `${operate(operator, firstOperand, secondOperand)}`;
}


divideButton.addEventListener("click", () => operatorButton(divideButton.textContent));
multiplyButton.addEventListener("click", () => operatorButton(multiplyButton.textContent));
substractButton.addEventListener("click", () => operatorButton(substractButton.textContent));
sumButton.addEventListener("click", () => operatorButton(sumButton.textContent));

equalsButton.addEventListener("click", () => theEqualsButton());



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
if (operator == sumButton.textContent) {
    return sum(a, b);
}
else if (operator == substractButton.textContent){
    return substract(a, b);
}
else if (operator == divideButton.textContent){
    if (b === 0) return null;
    else return divide(a, b);
}
else if (operator == multiplyButton.textContent)
    return multiply(a, b);
}