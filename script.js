const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

let [num1, operand, num2, calculated] = ["", "", "", false];

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const num = e.target.textContent;
    if (calculated) {
      num1 = num;
      calculated = false;
      displayValue(num1);
    } else if (!num1 || (num1 && !operand)) {
      num1 += num;
      displayValue(num1);
    } else if (num1 && operand) {
      num2 += num;
      displayValue(num2);
    }
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (e.target.id === "equals" || e.target.className === "fas fa-equals") {
      return;
    }
    const target = e.target.tagName === "I" ? e.target.parentNode : e.target;
    const op = target.dataset.operation;
    if (!target.classList.contains("selected")) {
      removeSelection();
      target.classList.add("selected");
      if (num1 && operand && num2) {
        let ans = operate(num1, operand, num2);
        cleanUpInputs(ans);
        displayValue(ans);
        operand = op;
      } else {
        operand = op;
        calculated = false;
      }
    } else {
      target.classList.remove("selected");
    }
  });
});

equals.addEventListener("click", (e) => {
  if (num1 && operand && num2) {
    let ans = operate(num1, operand, num2);
    calculated = true;
    cleanUpInputs(ans);
    removeSelection();
    displayValue(ans);
  }
});

clear.addEventListener("click", clearAll);

function cleanUpInputs(ans) {
  num1 = ans;
  num2 = "";
  operand = "";
}

function displayValue(val) {
  display.textContent = val;
}

function clearAll() {
  removeSelection();
  displayValue("");
  num1 = "";
  num2 = "";
  operand = "";
}

function operate(num1, operand, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch (operand) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function removeSelection() {
  operations.forEach((op) => op.classList.remove("selected"));
}

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function multiply(num1, num2) {
  return num1 * num2;
}

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function divide(num1, num2) {
  return num1 / num2;
}
