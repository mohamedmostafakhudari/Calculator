const displayContent = document.querySelector(".display-content");
const operators = Array.from(document.querySelectorAll("button[data-type=operator]"));

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
export function renderDisplay(state) {
  applyVisualHints(state);
  renderValue(state);
  displayContent.classList.toggle("error", state.hasError);
}