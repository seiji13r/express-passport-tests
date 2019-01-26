const express = require("express");

// Create the Server/App Object
const app = express();
// Set the HTTP Listening Port
const PORT = process.env.PORT || 3000;

// *********  MIDDLEWARE SET UP SECTION  *************
// Set Up URL encoded to allow understanding of body's Data coming from Form POST
app.use(express.urlencoded({extended:true}));
// Set Up URL encoded to allow understanding of body's Data coming from json POST
app.use(express.json());
// Set Up the public directory that will serve the static files under /.
app.use(express.static("public"));

// *********  ROUTES  *************
app.get("/", (req, res) => {
  const client_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  res.send(`Hello World! You have the Following IP Address: [${client_ip}]`);
});

// Initialize thw Server
app.listen(PORT, () => (
  console.log(`Server Listening in Port: ${PORT}, http://localhost:${PORT} 🌎`)
));