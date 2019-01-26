// Install required modules
// npm install --save express

// Include Required Modules
const express = require("express");

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
  console.log(req);
  res.send("Here's the Entry Point\n");
});

// Starting the server
app.listen(PORT, () => {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});