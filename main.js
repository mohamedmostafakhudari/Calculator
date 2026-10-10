import * as calculator from "./calculator.js";
import * as ui from "./ui.js";

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
  ui.renderDisplay(currentState);
});

const clearBtn = document.querySelector("button[data-type=function][data-value=clear]");
clearBtn.addEventListener("click", () => {
  calculator.clearState();

  const currentState = calculator.getCurrentState();
  ui.renderDisplay(currentState);
});

