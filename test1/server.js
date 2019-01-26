// Require Modules
const express = require("express");
const uuid = require("uuid/v4")
const session = require("express-session");

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
// Set Up the Session Middleware require("express-session")
// https://github.com/expressjs/session
app.use(session({
  genid: (req) => {
    // This function is executed when a request is Coming from and unknown client
    // As it is right now This server will send a Cookie with a Session ID.
    // The Client will Save It as a Cookie for this site.
    // The Definition of This function is not Necessary it will automatically return a sessionID
    // The default value is a function which uses the uid-safe library to generate IDs.
    console.log('Inside the session middleware');
    console.log(req.sessionID);
    return uuid(); // use UUIDs for session IDs require("uuid/v4")
  },
  name: "connect.sid", // Name of the Cookie
  secret: "shhh this is super super secret", // This is the secret used to sign the session ID cookie.
  resave: false,
  saveUninitialized: true
}))

// *********  ROUTES  *************
app.get("/", (req, res) => {
  // 1rst Connection
  // client req/no-session-cookie => server trigger session-genid() res/with-session-cookie
  // 2nd Connection and Subsequent Connections
  // client req/with-session-cookie => server don't trigger session-genid() res/no-session-cookie
  // As there's no storage method if the server goes down the next connection will generate another cookie, 
  // even if the client send its sesion id cookie in the headers.
  // Use Google Dev Tools [Network->Name->Headers] and [Application/Cookies] to monitor the behaviors.
  console.log('Inside the homepage callback function');
  console.log(req.sessionID);
  
  const client_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  const sessionID = req.sessionID;

  res.send(
    `Hello World! You have the Following IP Address: [${client_ip}] SessionID:[${sessionID}]`
  );

});

// Initialize thw Server
app.listen(PORT, () => (
  console.log(`Server Listening in Port: ${PORT}, http://localhost:${PORT} 🌎`)
));