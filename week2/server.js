var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var http = require("http").Server(app)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const addNumbers = (n1, n2) => {
  return n1 + n2
}

const subtractNumbers = (n1, n2) => {
  return n1 - n2
}

const multiplyNumbers = (n1, n2) => {
  return n1 * n2
}

const divideNumbers = (n1, n2) => {
  return n1 / n2
}

///////////////////// 4.2C /////////////////////

const exponentiation = (n1, n2) => {
  return Math.pow(n1, n2)
}

const square = (n1) => {
  return Math.sqrt(n1)
}

const modulo = (n1, n2) => {
  return n1 % n2
}

//localhost:3000/exponentiation?base=2&exponent=3
app.get("/exponentiation", (req, res) => {
  const num1 = parseFloat(req.query.base)
  const num2 = parseFloat(req.query.exponent)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid numbers provided")
  } else {
    // if valid return the result
    res.send(`Exponentiation result of ${num1} ** ${num2} = ${exponentiation(num1, num2)}`)
  }
})

//localhost:3000/squareroot?num1=9
app.get("/squareroot", (req, res) => {
  const num1 = parseFloat(req.query.num1)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1)) {
    // if not numbers then return an error
    res.status(500).send("Invalid number provided")
  } else {
    // if valid return the result
    res.send(`Square root result of Math.sqrt(${num1}) = ${square(num1)}`)
  }
})

//localhost:3000/modulo?dividend=10&divisor=3
app.get("/modulo", (req, res) => {
  const num1 = parseFloat(req.query.dividend)
  const num2 = parseFloat(req.query.divisor)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid numbers provided")
  } else {
    // if valid return the result
    res.send(`Modulo result of ${num1} % ${num2} = ${modulo(num1, num2)}`)
  }
})

////////////////// END OF 4.2C //////////////////

//localhost:3000/addTwoNumbers?num1=20&num2=30
app.get("/addTwoNumbers", (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid numbers provided")
  } else {
    // if valid return the total
    res.send(`Total Add: ${addNumbers(num1, num2)}`)
  }
})

//localhost:3000/subtractTwoNumbers?num1=20&num2=30
app.get("/subtractTwoNumbers", (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid numbers provided")
  } else {
    // if valid return the total
    res.send(`Total Subtract: ${subtractNumbers(num1, num2)}`)
  }
})

//localhost:3000/multiplyTwoNumbers?num1=20&num2=30
app.get("/multiplyTwoNumbers", (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid numbers provided")
  } else {
    // if valid return the total
    res.send(`Total Multiply: ${multiplyNumbers(num1, num2)}`)
  }
})

//localhost:3000/divideTwoNumbers?num1=20&num2=30
app.get("/divideTwoNumbers", (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid numbers provided")
  } else {
    // if valid return the total
    res.send(`Total Divide: ${divideNumbers(num1, num2)}`)
  }
})

var server = http.listen(3000, () => {
  console.log("server is listening on port", server.address().port)
})
