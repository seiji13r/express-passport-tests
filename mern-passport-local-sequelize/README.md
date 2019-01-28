# NOTES OF MERN WITH PASSPORT

# How REACT is connected with the Sessions?

A regular Express Server with Passport is implemented.
* User Sessions are being saved with express-session
* Passport will Authenticate the Users
* Passport will Serialize the user into the Session-Store
* Passport will De-Serialize the user:
  * From the Session-Store it will recover the User Id from the matching session.id cookie.
  * With the userId a query to mongodb will be done and the session recovered.

Here the endpoints should be secured with passport but not suitable for React Yet.

In the Server:
* A secured route should be implemented to recover the User information.
* If it's been authenticated it will send back the user info.

In React:
* The App State contains a User Property with at least the following information:
  * isLoggedIn - A boolean representing the logged in status.
  * username - The username or email of the User.

Components can be displayed based on the isLoggedIn state.

# Simple MERN Passport App Tutorial

[Simple MERN Passport App Tutorial](https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367)
[Simple MERN Passport App Tutorial GIT](https://github.com/b-bly/simple-mern-passport)
[A boilerplate example of using passport.js for authenticating a MERN application](https://github.com/thechutrain/mern-passport)

# File Structure

client          <- React app, created with ´create-react-app client´
package.json    <- Dependencies and Scripts
server.js       <- server entry point

# Client Package.json

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:3001/",
  "dependencies": {
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-scripts": "2.1.3",
    "react-router-dom": "^4.3.1",
    "axios": "^0.18.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```