// Install required modules
// npm install --save express
// npm install --save uuid
// npm install --save express-session

// Include Required Modules
const express = require("express");
const uuid = require("uuid/v4")
const session = require("express-session");

// Initialize the Application with express
const app = express();

// Define the port
const PORT = process.env.PORT || 3300;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// Session Middleware
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware');
    console.log(req.sessionID);
    return uuid(); // use UUIDs for session IDs
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// Routes
app.get("/", (req, res) => {
  // console.log(req);
  console.log('Inside the homepage callback function')
  console.log(req.sessionID)
  // res.send(`You hit home page!\n`)
  res.send(`Hit home page. Received the unique id: ${req.sessionID}\n`)
});

// Starting the server
app.listen(PORT, () => {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});