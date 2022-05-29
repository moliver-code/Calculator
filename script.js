let firstOperand = '' ;
let secondOperand = '' ;
let operator;
let result;
let focusOnSecondOperand;

var compute ={
    '+': function(firstOperand, secondOperand) {return firstOperand + secondOperand},
    '-': function(firstOperand, secondOperand) {return firstOperand - secondOperand},
    '*': function(firstOperand, secondOperand) {return firstOperand * secondOperand},
    '/': function(firstOperand, secondOperand) {
        if (secondOperand == 0) {
            secondOperand = '' ;
            screenText.textContent = "Universe Imploding...";
            result = '';
            operator = '';
            focusOnSecondOperand = '';
            firstOperand = '' ;
            return "Universe Imploding...";    
        }
        return firstOperand / secondOperand},
};

let screenText = document.getElementsByClassName('screen')[0]

const numbersList = [...document.querySelectorAll('.number')]

numbersList.forEach(element => {
    element.addEventListener('click', e => {
        if (screenText.textContent == "Universe Imploding...") {
            firstOperand = '';
            secondOperand = '';
            screenText.textContent = result;
        }
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
    if (screenText.textContent != "Universe Imploding...") {
        result = parseFloat(((compute[operator](Number(firstOperand),Number(secondOperand))).toPrecision(9)));
        firstOperand = result;
        secondOperand = '';
        screenText.textContent = result;
    }
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
    if (!focusOnSecondOperand) {firstOperand = firstOperand.slice(0, -1);
    }
    if (focusOnSecondOperand) {secondOperand = secondOperand.slice(0, -1);
    }
})