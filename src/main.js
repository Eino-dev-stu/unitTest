const { multiply, add, subtract, divide } = require("./mylib")
let http = require("http")

//mylib console check
function libConsoleCheck() {
  console.log("Library check in console:")
  console.log(`add(4,3) = ${add(4, 3)}`)
  console.log(`subtract(4,3) = ${subtract(4, 3)}`)
  console.log(`multiply(4,3) = ${multiply(4, 3)}`)
  console.log(`divide(4,2) = ${divide(4, 2)}`)
  try {
    // try-catch for eso main.j does not crash
    console.log(`divide(4,0) = ${divide(4, 0)}`)
  } catch (error) {
    console.log("Handled the error successfully:", error.message)
  }

  console.log("Check also in browser at http://localhost:8080")
}

// Run console check
libConsoleCheck()

// Create HTTP server and display results in browser
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" })
    // mylib HTTP check
    const mulResult = multiply(4, 3)
    const addResult = add(4, 3)
    const subResult = subtract(4, 3)
    const divResult = divide(4, 2)
    const divResult2 = divide(4, 0)

    res.write(`add 4 + 3 = ${addResult}\n`)
    res.write(`subtract 4 - 3 = ${subResult}\n`)
    res.write(`divide 4 / 2 = ${divResult}\n`)
    res.end(`multiply 4 x 3 = ${mulResult}`)
    res.write(`divide 4 / 0 = ${divResult2}\n`)
  })
  .listen(8080)
