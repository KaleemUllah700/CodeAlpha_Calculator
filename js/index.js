let currentOperand = '';
let previousOperand = '';
let operation = null;

const displayElement = document.getElementById('display');

function appendNumber(number) {
    if (currentOperand.includes('.') && number === '.') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = currentOperand || '0';
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        computeResult();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function computeResult() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}
