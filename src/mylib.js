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
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid arguments: both arguments must be numbers.")
  }
  if (a == 0 || b == 0) {
    throw new Error("Division by zero is not allowed.")
  }
  return a / b
}
console.log(multiply(2, 3))

console.log(add(2, 3))
module.exports = { multiply, add, subtract, divide }
