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
    secondOperator = 0;
    return;
}

clearButton.addEventListener("click", clearScreens);


let firstOperand;
let secondOperand;
let operatorSymbol;
let resultOperand;
let secondOperator = 0;
function operatorButton(operator){
    if (secondOperator === 0){
        operatorSymbol = operator;
        firstOperand = parseFloat(bottomDisplay.textContent);
        bottomDisplay.textContent = "";
        topDisplay.textContent = `${firstOperand} ${operator}`;
        secondOperator = 1
        decimalAmount = 0;
    return
    }
    else if (secondOperator === 1) {
        secondOperand = parseFloat(bottomDisplay.textContent);
        resultOperand = operate(operatorSymbol, firstOperand, secondOperand);
        topDisplay.textContent = `${resultOperand} ${operator}`;
        bottomDisplay.textContent = "";
        operatorSymbol = operator;
        secondOperator = 2;
        decimalAmount = 0;
        return
    }
    else if (secondOperator === 2){
        secondOperand = parseFloat(bottomDisplay.textContent);
        firstOperand = operate(operatorSymbol, resultOperand, secondOperand);
        operatorSymbol = operator;
        topDisplay.textContent = `${firstOperand} ${operator}`;
        resultOperand = firstOperand;
        bottomDisplay.textContent = "";
        decimalAmount = 0;
        return
    }
}

function theEqualsButton(){
    if (bottomDisplay.textContent == ""){
        topDisplay.textContent = "ERROR, missing second operand";
        firstOperand = ""
        secondOperand = "";
        secondOperator = 0;
        return;
    }

    else if (secondOperator === 1){
    secondOperand = parseFloat(bottomDisplay.textContent);
    resultOperand = operate(operatorSymbol, firstOperand, secondOperand);
    topDisplay.textContent = `${firstOperand} ${operatorSymbol} ${secondOperand} = `
    bottomDisplay.textContent = resultOperand;
    operatorSymbol = ""
    secondOperator = 0;
    decimalAmount = 0;
    return
    }
    else if (secondOperator === 2){
        secondOperand = parseFloat(bottomDisplay.textContent);
        firstOperand = resultOperand;
        topDisplay.textContent = `${firstOperand} ${operatorSymbol} ${secondOperand} =`;
        resultOperand = operate(operatorSymbol, firstOperand, secondOperand);
        bottomDisplay.textContent = resultOperand;
        operatorSymbol = "";
        secondOperator = 0;
        decimalAmount = 0;
    }
}

let decimalAmount = 0;
function addDecimal(){
    if (decimalAmount == 0){
        bottomDisplay.textContent = `${bottomDisplay.textContent}.`;
        decimalAmount = 1;
    }
    else return;
}

divideButton.addEventListener("click", () => operatorButton(divideButton.textContent));
multiplyButton.addEventListener("click", () => operatorButton(multiplyButton.textContent));
substractButton.addEventListener("click", () => operatorButton(substractButton.textContent));
sumButton.addEventListener("click", () => operatorButton(sumButton.textContent));

equalsButton.addEventListener("click", () => theEqualsButton());
decimalButton.addEventListener("click", () => addDecimal())

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
    return sum(a, b).toFixed(3).replace(/\.000$/, '');
}
else if (operator == substractButton.textContent){
    return substract(a, b).toFixed(3).replace(/\.000$/, '');
}
else if (operator == divideButton.textContent){
    if (b === 0) return "You cannot divide by Zero.";
    else return divide(a, b).toFixed(3);
}
else if (operator == multiplyButton.textContent)
    return multiply(a, b).toFixed(3).replace(/\.000$/, '');
}