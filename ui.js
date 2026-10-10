const displayContent = document.querySelector(".display-content");
const operators = Array.from(document.querySelectorAll("button[data-type=operator]"));

function applyVisualHints(state) {
  operators.forEach(op => {
    op.classList.toggle("active", op.dataset.value === state.operator);
  });
}

export function renderDisplay(state) {
  applyVisualHints(state);

  const value = state.secondOperand !== '' ? state.secondOperand : state.firstOperand;
  displayContent.textContent = value || '0';
}