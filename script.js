let firstOperand = '' ;
let secondOperand = '' ;
let operator;
// let startingScreen; 
let result;
let focusOnSecondOperand;
let currentResult = ''

var compute ={
    '+': function(firstOperand, secondOperand) {return firstOperand + secondOperand},
    '-': function(firstOperand, secondOperand) {return firstOperand - secondOperand},
    '*': function(firstOperand, secondOperand) {return firstOperand * secondOperand},
    '/': function(firstOperand, secondOperand) {
        if (secondOperand === 0) {return "Universe Imploding..."}
        return firstOperand / secondOperand},
};

// console.log(compute['/'](2,3));

let screenText = document.getElementsByClassName('screen')[0]
// console.log(screenText)
// screenText.textContent = startingScreen

const numbersList = [...document.querySelectorAll('.number')]
// console.log(numbersList)

numbersList.forEach(element => {
    element.addEventListener('click', e => {
        if (!focusOnSecondOperand) {
            firstOperand += element.innerText;
            screenText.textContent = firstOperand
            return
        } ;
        if (focusOnSecondOperand) {
            secondOperand += element.innerText;
            screenText.textContent = secondOperand
            return;
        };
    })
});

const operatorsList = [...document.querySelectorAll('.operator')]

operatorsList.forEach(element => {
    element.addEventListener('click', e => {
        focusOnSecondOperand = 1;
        operator = element.getAttribute('action');
        screenText.textContent = element.textContent;
    })
})

const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click', e => {
    // result = parseFloat((compute[operator](Number(firstOperand),Number(secondOperand))).toFixed(9));
    result = ((compute[operator](Number(firstOperand),Number(secondOperand))).toPrecision(9));
    firstOperand = result;
    secondOperand = '';
    screenText.textContent = result;
})

const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', e => {
    screenText.textContent = '';
    firstOperand = '' ;
    secondOperand = '' ;
    operator = '';
    focusOnSecondOperand = '';
})

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', e => {
    let trimmedScreenText = screenText.innerText.slice(0, -1)
    screenText.innerText = trimmedScreenText;
    secondOperand = secondOperand.slice(0, -1);
})