const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("result");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    // Handle operator buttons
    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput !== "") {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
      }
    } else if (value === ".") {
      // Prevent multiple decimal points
      if (!currentInput.includes(".")) {
        currentInput += value;
      }
    } else {
      // Handle number input
      currentInput += value ;
    }

    display.value = currentInput || operator || previousInput || "0";
  });
});

equalsButton.addEventListener("click", () => {
  if (operator && currentInput && previousInput) {
    const calculation = eval(`${previousInput} ${operator} ${currentInput}`);
    display.value = calculation;
    currentInput = calculation;
    previousInput = "";
    operator = "";
  }
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "0";
});
