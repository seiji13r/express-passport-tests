const express = require("express");
const uuid = require("uuid/v4");
const session = require("express-session");

const app = express();

const PORT = process.env.PORT || 3300;

// Configure Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.use(session({
    genid: (req) => {
      return uuid();
    },
    secret: "Shh this is super secret",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.get("/", (req, res) => {
  res.send(`
    You just hit the Application EntryPoint
    ${req.session.id ? req.session.id : uuid()}
  `);
});

app.post("/post-test", (req, res) => {
  res.send("You just hit the Post-Test\n");
});

app.get("/idtest/:id", (req, res) => {
  res.json({id: req.params.id});
});

app.listen(PORT, () => {
  console.log(
    `Server Listening at Port: ${PORT} http://localhost:${PORT}\n` +
    `${Date()}`
  );
});


// curl -X GET http://localhost:3300 -v
// Note: Unnecessary use of -X or --request, GET is already inferred.
// * Rebuilt URL to: http://localhost:3300/
// *   Trying ::1...
// * TCP_NODELAY set
// * Connected to localhost (::1) port 3300 (#0)
// > GET / HTTP/1.1
// > Host: localhost:3300
// > User-Agent: curl/7.54.0
// > Accept: */*
// > 
// < HTTP/1.1 200 OK
// < X-Powered-By: Express
// < Content-Type: text/html; charset=utf-8
// < Content-Length: 40
// < ETag: W/"28-BMIApNhUmUr7D8+PMMTBZkmATAg"
// < Date: Fri, 28 Dec 2018 07:59:16 GMT
// < Connection: keep-alive
// < 
// You just hit the Application EntryPoint
// * Connection #0 to host localhost left intact
