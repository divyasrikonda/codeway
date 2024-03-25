let currentInput = '0';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendToDisplay(value) {
  if (value === '.' && currentInput.includes('.')) return;
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  document.getElementById('display').innerText = currentInput;
}

function setOperator(op) {
  operator = op;
  operand1 = currentInput;
  currentInput = '0';
}

function clearDisplay() {
  currentInput = '0';
  document.getElementById('display').innerText = currentInput;
}

function calculate() {
  operand2 = currentInput;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      break;
  }
  currentInput = result.toString();
  document.getElementById('display').innerText = currentInput;
}