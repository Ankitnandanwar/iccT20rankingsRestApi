const express = require('express')
const mongoose = require('mongoose')
const Player = require("./models/players");
const router = require('./routers/mensRouters')

const app = express()

const port = process.env.PORT || 7500;

app.use(express.json());
app.use(router)

const connect = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/PlayerDatabase");
      console.log("connect");
    } catch {
      console.log("no connection");
    }
  };
  app.get("/", (req, res) => {
    res.send("Cricket Home page for Restfull API");
  });


app.listen(port, () => {
connect();
console.log("Connection Successfull");
});