import * as calculator from "./calculator.js";

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/', '='];
const separator = '.';

const controls = {
  ...Object.fromEntries(digits.map(d => [d, () => calculator.appendDigit(d)])),
  ...Object.fromEntries(operators.map(o => [o, () => calculator.setOperator(o)])),
  [separator]: () => calculator.appendSeparator(separator),
  "Enter": () => calculator.setOperator('='),
  "Backspace": () => calculator.undo(),
  "Delete": () => calculator.clearState(),
}

export function getControls() {
  return { ...controls };
}