// Require Modules
const express = require("express");
const uuid = require("uuid/v4")
const session = require("express-session");
const FileStore = require('session-file-store')(session); // <---------- File Store
// Passport and Passport Strategy Required
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Create the Server/App Object
const app = express();
// Set the HTTP Listening Port
const PORT = process.env.PORT || 3000;

// *********  PASSPORT CONFIGURATION  *************
// Simulated User Database
const users = [
  {id: '2f24vvg', email: 'test@test.com', password: 'password'}
]

// Configure Passport.js to use the local strategy
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    console.log('Inside local strategy callback')
    // here is where you make a call to the database
    // to find the user based on their username or email address
    // for now, we'll just pretend we found that it was users[0]
    const user = users[0] 
    if(email === user.email && password === user.password) {
      console.log('Local strategy returned true')
      return done(null, user)
    }
  }
));

// Tell Passport How to serialize the user
passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here')
  done(null, user.id);
});

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
  // With File Store now all the Sessions will be remember by the server,
  // and will re-establish them with the client Cookie
  store: new FileStore(), // <---------- File Store
  secret: "shhh this is super super secret", // This is the secret used to sign the session ID cookie.
  resave: false,
  saveUninitialized: true
}))
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


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

// Login get and post routes
app.get('/login', (req, res) => {
  console.log('Inside GET /login callback function')
  console.log(req.sessionID)
  res.send(`You got the login page!\n`)
})

app.post('/login', (req, res, next) => {
  console.log('Inside POST /login callback')
  passport.authenticate('local', (err, user, info) => {
    console.log('Inside passport.authenticate() callback');
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
    console.log(`req.user: ${JSON.stringify(req.user)}`)
    req.login(user, (err) => {
      console.log('Inside req.login() callback')
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
      console.log(`req.user: ${JSON.stringify(req.user)}`)
      return res.send('You were authenticated & logged in!\n');
    })
  })(req, res, next);
})

// Initialize the Server
app.listen(PORT, () => (
  console.log(`Server Listening in Port: ${PORT}, http://localhost:${PORT} 🌎`)
));