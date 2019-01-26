# Web Application with Authentication with NodeJS/Express/Passport/MongoDB <!-- omit in toc -->

- [References](#references)
- [Step by Step Process [Checklist]](#step-by-step-process-checklist)
  - [User Registration](#user-registration)
  - [User Authentication](#user-authentication)
  - [User Logout](#user-logout)
  - [Authentication Protection of Routes](#authentication-protection-of-routes)

# References

[Video Tutorial](https://youtu.be/6FOq4cUdH8k)
[MongoDB](https://www.mongodb.com/es)
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas?lang=es-es)
[Boostwatch](https://bootswatch.com/)
[Passport Configuration](http://www.passportjs.org/docs/configure/)

# Step by Step Process [Checklist]
* [ ] Set up your MongoDB Atlas Database/Cluster
* [ ] Initialize Node Project with `npm init -y`
* [ ] Install Dependencies
* `npm install [] --save`
    * express
    * bcryptjs
    * passport
    * passport-local
    * ejs
    * express-ejs-layouts
    * mongoose
    * connect-flash
    * express-session
* Install `nodemon` `npm install -g nodemon`
    * nodemon
* [ ] Configure `package.json`
  * scripts
    * "start": "node app.js"
    * "dev": "nodemon app.js"
* [ ] Create an Express Server in `app.js`
* [ ] Create the Folder routes and create the routes files with `express.Router()` and Create and Test the route to "/"
* [ ] Require the router files to `app.js`.
* [ ] Create 2 more routes `/login` and `/register`.
* [ ] Incorporate `express-ejs-layouts` into `app.js`.
* [ ] Create the `views` folder and create the main `ejs` files.
  * layout.ejs
  * register.ejs
  * login.ejs
  * partials `folder`
    * messages.ejs
* [ ] Build the register and login html forms into their respective ejs files.
* [ ] Connect the Routes with the Views' layouts.
* [ ] Create the `config` folder and create `keys.js` which includes Mongo Connection.
* [ ] Incorporate Mongoose/Mongo in `app.js`.
* [ ] Create the `models` folder and create the Model `User.js`.
* [ ] Incorporate the middleware `urlencoded` into `app.js`.

## User Registration

* [ ] Create the post route for registration `/register`.
* [ ] Implement Form Data Validation in  `POST /register`.
* [ ] Implement User Creation in `POST /register`. and include:
  * User email validation **avoid duplicates**.
  * Password encryption.
* [ ] Incorporate `express-session` to enable sessions in `app.js`.
* [ ] Incorporate `connect-flash` in `app.js` to send data to redirect pages in a session.
* [ ] Create Global Variables that will attach to the response using connect-flash.

## User Authentication

* [ ] Create the `passport.js` file in config folder. To configure Passport authentication settings with `passport-local` strategy.
  * Verify if the user exist in the local database.
  * Check if password is valid.
  * Configure User Serialize and De-Serialize.
* [ ] Incorporate the previous configuration into `app.js`.
* [ ] Include Passport Middleware into `app.js`.
* [ ] Create the post route for registration `/login`.
* [ ] Include Passport into `/login`.
* [ ] Configure the *flash messages*

## User Logout

* [ ] Create the Route `/logout`, include logout, message flash and redirect to login.

## Authentication Protection of Routes
* [ ] Create the a middleware. Ensure authenticated. `config.auth`

* [ ] 
* [ ] 