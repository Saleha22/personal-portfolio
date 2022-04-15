/**
 * Your task is to build a calculator function that accepts 2 numbers and an operation
 * The app should console log the operation along with the result
 *
 * Do this for add, subtract, multiply, divide and modulus
 *
 * For instance, "Result: 2 + 3 = 5"
 */
// define the calculator  function

const calculator = (num1, num2, operation) => {
  let result;

  if (operation == "+") {
    result = num1 + num2;
  } else if (operation == "-") {
    result = num1 - num2;
  } else if (operation == "/") {
    result = num1 / num2;
  } else if (operation == "*") {
    result = num1 * num2;
  } else if (operation == "%") {
    result = num1 % num2;
  } else {
    return "error";
  }

  return "Result: " + num1 + " " + operation + " " + num2 + " = " + result;
};

function runCalculator() {
  let numOne = parseFloat(document.getElementById("numberOne").value);
  let numTwo = parseFloat(document.getElementById("numberTwo").value);
  let operation = document.getElementById("operation").value;
  document.getElementById("result").className = "resultBox";
  document.getElementById("result").innerHTML = calculator(
    numOne,
    numTwo,
    operation
  );
}
