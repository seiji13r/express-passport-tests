// Install required modules
// npm install --save express
// npm install --save uuid

// Include Required Modules
const express = require("express");
const uuid = require("uuid/v4")

// Initialize the Application with express
const app = express();

// Define the port
const PORT = process.env.PORT || 3300;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  // console.log(req);
  const uniqueId = uuid();
  res.send(`Hit home page. Received the unique id: ${uniqueId}\n`)
});

// Starting the server
app.listen(PORT, () => {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});