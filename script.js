class Calculator {
  constructor(previusOperandTextElement, currentOperandTextElement) {
    this.previusOperandTextElement = previusOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.previusOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperandTextElement.innerText + number;
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previusOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previusOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previusOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previusOperandTextElement.innerText = this.previusOperand;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previusOperandTextElement = document.querySelector(
  '[data-previus-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator(
  previusOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener('click', (button) => {
  calculator.compute();
  calculator.updateDisplay();
});
