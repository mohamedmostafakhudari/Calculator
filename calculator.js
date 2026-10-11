const MAXIMUM_NUMBER_LENGTH = 20;
const MAXIMUM_HISTORY_SIZE = 5;

const history = [];
let state = getInitialState();

const operators = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

function addHistory(state) {
  history.push({...state});
  if (history.length > MAXIMUM_HISTORY_SIZE) {
    history.shift();
  }
}

function pullLatestHistory() {
  return history.pop();
}

function clearHistory() {
  history.length = 0;
}

function calculateResult() {
  if (!state.firstOperand || !state.secondOperand) return;

  const { operator, firstOperand, secondOperand } = state;
  try {
    const result = operators[operator](+firstOperand, +secondOperand); 
    return result;
  } catch (error) {
    state.hasError = true;
  }
}

function applyNumberShapeRules(number) {
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
      hasError: false,
      firstOperandHasSeparator: false,
      secondOperandHasSeparator: false,
    }
);
}

export function appendDigit(digit) {
  addHistory(state);
  
  // adding digit immediately after hitting equal should clear state
  // then append digit to the first operand
  if (state.operator === "=" || state.hasError) clearState();
  
  if (state.operator) {
    state.secondOperand = applyNumberShapeRules(state.secondOperand + digit);
  } else {
    state.firstOperand = applyNumberShapeRules(state.firstOperand + digit);
  }

}

export function appendSeparator(separator) {
  addHistory(state);

  if (state.operator === "=" || state.hasError) clearState();
  
  if (state.operator) {
    if (state.secondOperandHasSeparator) return;

    state.secondOperand = applyNumberShapeRules(state.secondOperand + separator);
    state.secondOperandHasSeparator = true;
  } else {
    if (state.firstOperandHasSeparator) return;

    state.firstOperand = applyNumberShapeRules(state.firstOperand + separator);
    state.firstOperandHasSeparator = true;
  }

}

export function setOperator(operatorSign) {
  if (!state.firstOperand || state.hasError) return;
  
  addHistory(state);

  if (state.firstOperand && !state.secondOperand) {
    state.operator = operatorSign;
  }

  if (state.firstOperand && state.secondOperand) {
    state.firstOperand = calculateResult()?.toString();
    state.secondOperand = '';
    state.operator = operatorSign;

    /* Separator may come in two cases, either user input or the result of
    calculation, here we cover the calculation result case*/
    state.firstOperandHasSeparator = !Number.isInteger(+state.firstOperand);
    state.secondOperandHasSeparator = false;
  }
} 

export function undo() {
  const previousState = pullLatestHistory();
  if (previousState) {
    state = previousState;
  }
}

export function clearState() {
  state = getInitialState();
  clearHistory();
}

export function getCurrentState() {
  return {...state};
}