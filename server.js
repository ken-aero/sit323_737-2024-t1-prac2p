var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var mongoose = require("mongoose")

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = Promise

var dbUrl = "mongodb+srv://85kbaker:user@cluster0.mwsu6sq.mongodb.net/"

// schema definition for a message
var Message = mongoose.model("Message", {
  name: String,
  message: String,
})

// get all messages
app.get("/messages", (req, res) => {
  Message.find()
    .then((messages) => {
      res.send(messages)
    })
    .catch((err) => {
      console.log(err)
      sendStatus(500)
    })
})

// get a message for a user
app.get("/messages/:user", (req, res) => {
  var user = req.params.user
  Message.find()
    .then((messages) => {
      res.send(messages.find((m) => m.name === user))
    })
    .catch((err) => {
      console.log(err)
      sendStatus(500)
    })
})

// create a new message
app.post("/messages", async (req, res) => {
  try {
    var message = new Message(req.body)

    await message.save()

    var censored = await Message.findOne({ message: "badword" })

    if (censored) await Message.deleteOne({ _id: censored.id })
    // await Message.findByIdAndDelete(censored.id)
    else io.emit("message", req.body)

    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
    return console.error(error)
  } finally {
    console.log("finally block")
  }
})

io.on("connection", (socket) => {
  console.log("a user connected")
})

const connectToMongo = async () => {
  await mongoose.connect(dbUrl)
  console.log("Connected to MongoDB")
}

connectToMongo()

var server = http.listen(3000, () => {
  console.log("server is listening on port", server.address().port)
})
