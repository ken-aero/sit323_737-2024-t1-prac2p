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

//localhost:3000/addTwoNumbers?num1=20&num2=30
http: app.get("/addTwoNumbers", (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid number provided")
  } else {
    // if valid return the total
    res.send(`Total Add: ${addNumbers(num1, num2)}`)
  }
})

// http://localhost:3000/subtractTwoNumbers?num1=20&num2=30
app.get("/subtractTwoNumbers", (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid number provided")
  } else {
    // if valid return the total
    res.send(`Total Subtract: ${subtractNumbers(num1, num2)}`)
  }
})

// http://localhost:3000/multiplyTwoNumbers?num1=20&num2=30
app.get("/multiplyTwoNumbers", (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid number provided")
  } else {
    // if valid return the total
    res.send(`Total Multiply: ${multiplyNumbers(num1, num2)}`)
  }
})

// http://localhost:3000/divideTwoNumbers?num1=20&num2=30
app.get("/divideTwoNumbers", (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  // check if num1 or num2 are numbers after parseFloat
  if (isNaN(num1) || isNaN(num2)) {
    // if not numbers then return an error
    res.status(500).send("Invalid number provided")
  } else {
    // if valid return the total
    res.send(`Total Divide: ${divideNumbers(num1, num2)}`)
  }
})

var server = http.listen(3000, () => {
  console.log("server is listening on port", server.address().port)
})
