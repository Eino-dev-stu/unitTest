function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid arguments: both arguments must be numbers.")
  }
  return a * b
}

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid arguments: both arguments must be numbers.")
  }
  return a + b
}
function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid arguments: both arguments must be numbers.")
  }
  return a - b
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.")
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid arguments: both arguments must be numbers.")
  }

  return a / b
}

module.exports = { multiply, add, subtract, divide }
