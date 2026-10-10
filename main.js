import * as calculator from "./calculator.js";

const calculatorBody = document.querySelector("#calculator-body");

calculatorBody.addEventListener("click", (e) => {
  const button = e.target.closest(".calculator-body .btn");
  if (!button) return;
  
  const { type, value } = button.dataset;
  try {
    if (type === 'digit') {
      calculator.appendDigit(value);
    } else if (type === 'operator') {
      calculator.setOperator(value);
    }
  } catch (error) {
    console.log(error.message);
  }
  
  const currentState = calculator.getCurrentState();
  console.log(currentState);
})