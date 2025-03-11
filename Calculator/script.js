

// add , subtract , multiply , divide

let number1 = 0;
let number2 = 0;
let operator = '';



function operate (n1 , n2, operator) {
    if (operator === '+') {
        return addNumbers(n1,n2);
    } else if (operator === '-') {
        return subtractNumbers(n1,n2);
    } else if (operator === '*') {
        return multiplyNumbers(n1,n2);
    } else if (operator === '/') {
        return divideNumbers(n1,n2);
    } 
}

function addNumbers(number1 , number2) {
    return number1 + number2;
}

function subtractNumbers(number1 , number2) {
    return number1 - number2;
}   

function multiplyNumbers(number1 , number2) {
    return number1 * number2;
}

function divideNumbers (number1 , number2) {
    return number1 / number2;
}


const displayer = document.querySelector('#displayText');
displayer.textContent = '';



// Numbers
const numberOne = document.querySelector('#number1');
const numberTwo = document.querySelector('#number2');
const numberThree = document.querySelector('#number3');

// Operators

const add = document.querySelector('#add');

numberOne.addEventListener('click', () => {
    displayer.textContent += 1;
})
