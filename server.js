// IMPORTS
const express = require("express");
const morgan = require("morgan");

const fortunes = require("./fortunes");

const app = express();

// MIDDLEWARE
app.use(morgan("dev"));

//============================================== ROOT "/"

app.get("/", (req, res) => {
  res.send("This is the root!  Find the 🎱 at '/magic8'");
  console.log("The server received a request at root '/' ");
});

//------------------------------------------------ ROUTE for "/magic8"

app.get("/magic8", (req, res) => {
  const randomNum = Math.floor(Math.random() * 8) + 1;

  //* SIMPLE RESPONSE WITH RES.SEND MESSAGE
  // res.send(
  //   "🎱 Welcome to the magic 8 Ball 🎱 Enter a number to find your fortune ✨"
  // );

  //* SIMPLE RESPONSE WITH RES.SEND JSON LINK RANDOMIZER
  res.send({
    message:
      "Welcome to the magic 8 Ball. Click link to find the answer your questions 🔮 ",
    shake: `http://localhost:3000/magic8/${randomNum}`,
  });
  console.log("Received a request at the route /magic8");
});

//================================================

//============================================= PARAM route for "/magic8/:num"
app.get("/magic8/:num", (req, res) => {
  const randomNum = Math.floor(Math.random() * 8) + 1; // Generate a new random number between 1 and 8
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const message = fortunes[randomIndex];

  // Extracting the num parameter from the request
  const num = parseInt(req.params.num);
  console.log("Received a request at /magic8/:num");
  console.log(`Parameter 'num' received: ${req.params.num}`);

  //* ERROR HANDELING - DATA VALIDATION

  // Checking if the provided number is valid
  if (isNaN(num) || num > 8 || num < 1) {
    console.log("Invalid number provided, sending 400 status.");
    return res.status(400).send("Please provide a number between 1 and 8.");
  }

  //* SERVER RESPONSE
  console.log(`Selected Magic 8 Ball response: ${message}`);
  //* CLIENT
  // res.send(`Magic 8 Ball says: ${message}`);
  res.send({
    answer: `Magic 8 Ball says: ${message}`,
    message: " Don't like the answer? Try again ",
    shake: `http://localhost:3000/magic8/${randomNum}`,
  });
});

//!=============================================

app.listen(3000, () => {
  console.log(`Magic 8 Ball app listening at PORT 3000`);
});
