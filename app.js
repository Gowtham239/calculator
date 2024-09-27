// function add(a,b) {
//     return a+b;
// }

// function subtract(a,b) {
//     return a-b;
// }

// function mul(a,b) {
//     return a*b;
// }

// function divide(a,b) {
//     return a/b;
// }

let operator = "";
let previousValue = "";
let currentValue = "";
let inputValues = "";
let expression = document.querySelector(".num-op");

// get the operators
const getOperator = function(ope) {
    operator = ope;
    previousValue = inputValues;
    inputValues = "";
    expression.textContent = `${previousValue} ${operator}`;
}

// calculate the final result
const calculate = function() {
    previousValue = parseInt(previousValue)
    currentValue = parseInt(inputValues)
    let result;
    switch(operator) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        default:
            return;
    }
    userInput.textContent = result;
    previousValue = result.toString();
    inputValues = "";
}


let userInput = document.getElementById('user-input');

// display the numbers
const displayNumbers = function(nums) {
    inputValues += nums;
    // previousValue = inputValues;
    userInput.textContent = inputValues;
}

const numberBtns = document.querySelectorAll(".numbers");

// numbers button
numberBtns.forEach((numbers) => {
    numbers.addEventListener("click", (e) => {
        displayNumbers(e.target.textContent);
    });
});

// operators button
const operatorBtns = document.querySelectorAll(".operators");
operatorBtns.forEach((op) => {
    op.addEventListener("click", (e) => {
        getOperator(e.target.textContent);
    });
});

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
    calculate();
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    previousValue = "";
    currentValue = "";
    operator = "";
    expression.textContent = "";
    userInput.textContent = "";
    inputValues = "";    
})