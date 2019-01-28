# Express and Passport JS Tests <!-- omit in toc -->

- [Local Strategy Express 4.x Example](#local-strategy-express-4x-example)
- [Express Behind a Proxy](#express-behind-a-proxy)
- [Passport Multiple Strategies](#passport-multiple-strategies)
- [Complete Project Example](#complete-project-example)
- [Tutorial From Auth0](#tutorial-from-auth0)
- [Tutorial Orlando José Betancourth Alvarenga](#tutorial-orlando-jos%C3%A9-betancourth-alvarenga)
- [Simple MERN Passport App Tutorial](#simple-mern-passport-app-tutorial)

Repository for Authentication Tests Using Passport and Express

# Local Strategy Express 4.x Example
[Link](https://github.com/passport/express-4.x-local-example)

# Express Behind a Proxy

[express-session Documentation](https://github.com/expressjs/session)
Please note that secure: true is a recommended option. However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies. If secure is set, and you access your site over HTTP, the cookie will not be set. If you have your node.js behind a proxy and are using secure: true, you need to set "trust proxy" in express:

```javascript
var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
```

# Passport Multiple Strategies

[Github Example joshbirk](https://gist.github.com/joshbirk/1732068)
[Stackoverflow Question](https://stackoverflow.com/questions/26453527/using-passport-js-with-multiple-strategies-without-overwriting-user-request-obje/30224234#30224234)

# Complete Project Example

[Link](https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537)

# Tutorial From Auth0

[Link](https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/)

# Tutorial Orlando José Betancourth Alvarenga

[Link](https://www.youtube.com/watch?v=ytQCGPN1RcA)

* Json Web Token

```console
npm install passport passport-local passport-jwt jsonwebtoken

```

`passport. js`

```javascript
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

init = (db) => {

  const User = db.collection("usuarios");

  passport.use(
    new LocalStrategy({
      usernameField: "email",
      passwordField: "pswd"
    }),
    (email, pswd, next) => {
      var query = {"email": email}
      User.findOne(query, (err, user) => {
        if (err) return next(err);
        if (user && user.pswd === paswd){
          return next(null, user);
        }
        else {
          return next(null, false);
        }
      });
    }
  ); // passport.use
}

```

# Simple MERN Passport App Tutorial

[Simple MERN Passport App Tutorial](https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367)
[Simple MERN Passport App Tutorial GIT](https://github.com/b-bly/simple-mern-passport)
[A boilerplate example of using passport.js for authenticating a MERN application](https://github.com/thechutrain/mern-passport)