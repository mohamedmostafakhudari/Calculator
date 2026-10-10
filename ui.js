const displayContent = document.querySelector(".display-content");
const operators = Array.from(document.querySelectorAll("button[data-type=operator]"));
const separatorBtn = document.querySelector("button[data-type=separator]");

function applyVisualHints(state) {
  operators.forEach(op => {
    op.classList.toggle("active", op.dataset.value === state.operator);
  });
}

function renderValue(state) {
  if (state.hasError) {
    displayContent.textContent = "Math Error";
    return;
  }
  const value = state.secondOperand !== '' ? state.secondOperand : state.firstOperand;
  displayContent.textContent = value || '0';
}

function applyRestrictions(state) {
  if (state.operator) {
    separatorBtn.disabled = state.secondOperandHasSeparator;
  } else {
    separatorBtn.disabled = state.firstOperandHasSeparator;
  } 
}

export function renderDisplay(state) {
  applyVisualHints(state);
  applyRestrictions(state);
  renderValue(state);
  displayContent.classList.toggle("error", state.hasError);
}