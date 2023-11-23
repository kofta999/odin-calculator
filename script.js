const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

let [num1, operand, num2] = [null, null, null];

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const num = parseInt(e.target.textContent);
    console.log(num);
    if (!num2 && num1 && operand) num2 = num;
    else num1 = num;
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    const op = e.target.textContent;
    console.log(op);
    if (num1 && operand && num2) {
      let ans = operate(num1, operand, num2);
      cleanUpInputs(ans);
      console.log(ans);
    } else {
      operand = op;
    }
  });
});

function cleanUpInputs(ans) {
  num1 = ans;
  num2 = null;
  operand = null;
}

function operate(num1, operand, num2) {
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
