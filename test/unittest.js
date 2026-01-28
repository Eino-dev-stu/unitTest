const { expect } = require("chai")
const { multiply, add, subtract, divide } = require("../src/mylib")

describe("mylib.js (expect skeleton)", () => {
  describe("multiply function", () => {
    it("should multiply of two numbers", function () {
      const result = multiply(2, 3)
      expect(result).to.equal(6)
    })
    it("should throw error if inputs are not numbers", function () {
      expect(() => multiply("2", 3)).to.throw(
        "Invalid arguments: both arguments must be numbers.",
      )
    })
  })
  describe("add function", () => {
    before(() => {
      // suoritetaan ennen add testejä
      console.log(">>> Add Tests are starting")
    })
    after(() => {
      // suoritetaan add testin jälkeen
      console.log(">>> Add Test are ending")
    })
    it("should add two numbers", function () {
      const result = add(2, 3)
      expect(result).to.equal(5)
    })
    it("should throw error if inputs are not numbers", function () {
      expect(() => add("2", 3)).to.throw(
        "Invalid arguments: both arguments must be numbers.",
      )
    })
  })
  describe("subtractfunction", () => {
    it("should subtract two numbers", function () {
      const result = subtract(6, 3)
      expect(result).to.equal(3)
    })
    it("should throw error if inputs are not numbers", function () {
      expect(() => subtract("2", 3)).to.throw(
        "Invalid arguments: both arguments must be numbers.",
      )
    })
  })
  describe("divide function", () => {
    it("should divide two numbers", function () {
      const result = divide(6, 2)
      expect(result).to.equal(3)
    })
    it("should throw error if inputs are not numbers", function () {
      expect(() => divide("2", 3)).to.throw(
        "Invalid arguments: both arguments must be numbers.",
      )
    })
    it("should throw error if either argument is zero", function () {
      expect(() => divide(0, 3)).to.throw("Division by zero is not allowed.")
    })
  })
})
