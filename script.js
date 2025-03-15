let number1 = 0;
let number2 = 0;
let operator = '';
let resultIsDisplayed = false;


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
    let result = parseFloat(number1) + parseFloat(number2);
    if (result % 2 === 0) {
        return parseFloat(result.toFixed(0));
    } else {
        return parseFloat(result.toFixed(2));
    }
}

function subtractNumbers(number1, number2) {
    let result = number1 - number2;
    
    if (result % 2 === 0) {
        return parseFloat(result.toFixed(0));
    } else {
        return parseFloat(result.toFixed(2));
    }
}     

function multiplyNumbers(number1, number2) {
    let result = number1 * number2;
    
    if (result % 2 === 0) {
        return parseFloat(result.toFixed(0));
    } else {
        return parseFloat(result.toFixed(2));
    }
}  

function divideNumbers(number1, number2) {
    if (number2 === 0) {
        displayer.textContent = "Error"; // Prevent division by zero
    }

    let result = number1 / number2;
    
    if (Number.isInteger(result)) {
        return parseFloat(result.toFixed(0));
    } else {
        return parseFloat(result.toFixed(2));
    }
}

const displayer = document.querySelector('#displayText');
displayer.textContent = '';

// Numbers
const numberZero = document.querySelector('#number0');
const numberOne = document.querySelector('#number1');
const numberTwo = document.querySelector('#number2');
const numberThree = document.querySelector('#number3');
const numberFour = document.querySelector('#number4');
const numberFive = document.querySelector('#number5');
const numberSix = document.querySelector('#number6');
const numberSeven = document.querySelector('#number7');
const numberEight = document.querySelector('#number8');
const numberNine = document.querySelector('#number9');

// Operators

const add = document.querySelector('#add');
const substract = document.querySelector('#substract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');

add.addEventListener('click' , function () {
    if (number1 !== 0 && number1 !== '') {
        if (operator) {
            number2 = parseFloat(displayer.textContent);
            number1 = operate(number1, number2, operator);

            displayer.textContent = number1;
            number2 = '';
        }
    } else {
        number1 = parseFloat(displayer.textContent);
    }
        operator = '+';
        displayer.textContent = '';
}) 

substract.addEventListener('click' , function () {
    if (number1 !== 0 && number1 !== '') {
        if (operator) {
            number2 = parseFloat(displayer.textContent);
            number1 = operate(number1, number2, operator);

            displayer.textContent = number1;
            number2 = '';
        }
    } else {
        number1 = parseFloat(displayer.textContent);
    }
        operator = '-';
        displayer.textContent = '';
})      

multiply.addEventListener('click' , function () {
    if (number1 !== 0 && number1 !== '') {
        if (operator) {
            number2 = parseFloat(displayer.textContent);
            number1 = operate(number1, number2, operator);

            displayer.textContent = number1;
            number2 = '';
        }
    } else {
        number1 = parseFloat(displayer.textContent);
    }
        operator = '*';
        displayer.textContent = '';
})   


divide.addEventListener('click' , function () {
    if (number1 !== 0 && number1 !== '') {
        if (operator) {
            number2 = parseFloat(displayer.textContent);
            number1 = operate(number1, number2, operator);

            displayer.textContent = number1;
            number2 = '';
        }
    } else {
        number1 = parseFloat(displayer.textContent);
    }
        operator = '/';
        displayer.textContent = '';
}) 

// 

equal.addEventListener('click' , function () {
    number2 = parseFloat(displayer.textContent);

    const result = operate(number1, number2, operator);
    displayer.textContent = result;
    number1 = 0;
    number2 = 0;
    operator = '';
    resultIsDisplayed = true;
})


numberZero.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 0;
    } else {
        displayer.textContent += '';
    }
}); 

numberOne.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 1;
    } else {
        displayer.textContent += '';
    }
});

numberTwo.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 2;
    } else {
        displayer.textContent += '';
    }
});

numberThree.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 3;
    } else {
        displayer.textContent += '';
    }
});

numberFour.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 4;
    } else {
        displayer.textContent += '';
    }
});

numberFive.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 5;
    } else {
        displayer.textContent += '';
    }
});

numberSix.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 6;
    } else {
        displayer.textContent += '';
    }
});

numberSeven.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 7;
    } else {
        displayer.textContent += '';
    }
});

numberEight.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 8;
    } else {
        displayer.textContent += '';
    }
});

numberNine.addEventListener('click', () => {
    if (resultIsDisplayed === true) {
        displayer.textContent = '';
        resultIsDisplayed = false;
    }
    
    if (displayer.textContent.length < 14) {
        displayer.textContent += 9;
    } else {
        displayer.textContent += '';
    }
});


clear.addEventListener('click', () => {
    displayer.textContent = "";
    number1 = 0;
    number2 = 0;
    operator = '';
}); 

