let currentInput = '';
let previousInput = '';
let currentOperation = '';

// Append numbers & decimal
function appendNumber(number) {
    // prevent multiple dots
    if (number === '.' && currentInput.includes('.')) return;

    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Append operations (+, -, *, /)
function appendOperation(operation) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculate();
    }

    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';

    document.getElementById('display').value =
        previousInput + ' ' + currentOperation;
}

// Calculate result
function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
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
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';

    document.getElementById('display').value = currentInput;
}

// Clear display (AC & X)
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}
