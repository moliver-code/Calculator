let firstOperand  ;
let secondOperand  ;
let operator;
let startingScreen; 

var compute ={
    '+': function(firstOperand, secondOperand) {return firstOperand + secondOperand},
    '-': function(firstOperand, secondOperand) {return firstOperand - secondOperand},
    '*': function(firstOperand, secondOperand) {return firstOperand * secondOperand},
    '/': function(firstOperand, secondOperand) {return firstOperand / secondOperand},
};

// console.log(compute['/'](2,3));

let screenText = document.getElementsByClassName('screen')[0]
// console.log(screenText)
screenText.textContent = startingScreen

const numbersList = [...document.querySelectorAll('.number')]
// console.log(numbersList)

numbersList.forEach(element => {
    element.addEventListener('click', e => {
        if (!firstOperand) {
            firstOperand = element.innerText;
            screenText.textContent = firstOperand
            return
        } ;
        if (!secondOperand) {
            secondOperand = element.innerText;
            screenText.textContent = secondOperand
            return;
        };
    })
});

const operatorsList = [...document.querySelectorAll('.operator')]

operatorsList.forEach(element => {
    element.addEventListener('click', e => {
        operator = element.getAttribute('action');
        screenText.textContent = element.textContent;
    })
})

