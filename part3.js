// Individual Operation Functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero is not allowed."; // Division by zero handling
  }
  return num1 / num2;
}

function remainder(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero is not allowed."; // Modulo by zero handling
  }
  return num1 % num2;
}

function power(base, exponent) {
  return base ** exponent;
}

// Selector Function
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return remainder(num1, num2);
    case "**":
      return power(num1, num2);
    default:
      return "Error: Invalid operation.";
  }
}

// Testing with at least 5 combinations
console.log("--- Function-Based Calculator Tests ---");

// Test 1: Addition
console.log(`15 + 5 = ${calculate(15, "+", 5)}`);

// Test 2: Subtraction
console.log(`20 - 8 = ${calculate(20, "-", 8)}`);

// Test 3: Multiplication
console.log(`6 * 7 = ${calculate(6, "*", 7)}`);

// Test 4: Division with decimal result
console.log(`25 / 4 = ${calculate(25, "/", 4)}`);

// Test 5: Division by Zero
console.log(`10 / 0 = ${calculate(10, "/", 0)}`);

// Test 6: Remainder
console.log(`17 % 5 = ${calculate(17, "%", 5)}`);

// Test 7: Exponentiation
console.log(`2 ** 4 = ${calculate(2, "**", 4)}`);