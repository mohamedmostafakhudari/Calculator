const MAXIMUM_NUMBER_LENGTH = 20;
let state = getInitialState();

const operators = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

function calculateResult() {
  if (!state.firstOperand || !state.secondOperand) return;

  const { operator, firstOperand, secondOperand } = state;
  try {
    const result = operators[operator](+firstOperand, +secondOperand); 
    return result;
  } catch (error) {
    clearState();
    throw error;
  }
}

export function appendDigit(digit) {
  // adding digit immediately after hitting equal should clear state
  // then append digit to the first operand
  if (state.operator === "=") clearState();
  
  if (state.operator) {
    state.secondOperand = applyNumberShapeRules(state.secondOperand + digit);
  } else {
    state.firstOperand = applyNumberShapeRules(state.firstOperand + digit);
  }
}

export function setOperator(operatorSign) {
  if (!state.firstOperand) return;
  
  if (state.firstOperand && !state.secondOperand) {
    state.operator = operatorSign;
  }

  if (state.firstOperand && state.secondOperand) {
    state.firstOperand = calculateResult().toString();
    state.secondOperand = '';
    state.operator = operatorSign;
  }
} 

export function clearState() {
  state = getInitialState();
}

export function getCurrentState() {
  return {...state};
}

function applyNumberShapeRules(number) {
  // number is maximum 12 character length
  number = number.slice(0, MAXIMUM_NUMBER_LENGTH);

  return number;
}

function add(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new Error("Invalid operands");
  }

  return x + y;
}

function subtract(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new Error("Invalid operands");
  }
  
  return x - y;
}

function multiply(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new Error("Invalid operands");
  }
  
  return x * y;
}

function divide(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new Error("Invalid operands");
  }
  if (y === 0) {
    throw new Error("Math error!");
  }
  /*
    MAXIMUM_NUMBER_LENGTH - 2 :  to subtract the 0 digit and the decimal point
  */
  return Number.parseFloat((x / y).toFixed(MAXIMUM_NUMBER_LENGTH - 2));
}

function getInitialState() {
  return (
    {
      firstOperand: '',
      secondOperand: '',
      operator: '', 
    }
);
}