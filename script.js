const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

let num1, operand, num2;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let num = parseInt(e.target.textContent);
    console.log(num);
    if (!num2 && num1 && operand) num2 = num;
    else num1 = num;
  });
});

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
