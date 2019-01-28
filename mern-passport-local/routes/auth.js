const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../passport')

router.post(
  '/signup',
  (req, res) => {
    console.log('user signup');

    const { email, username, password } = req.body
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log('User.js post error: ', err)
      } else if (user) {
        res.json({
            error: `Sorry, already a user with the email: ${email}`
        })
      }
      else {
        const newUser = new User({
          email,
          username,
          password
        })
        newUser.save((err, savedUser) => {
          if (err) return res.json(err)
          res.json(savedUser)
        })
      }
    })
})

router.post(
  '/login',
  function (req, res, next) {
    console.log('routes/auth.js, login, req.body: ');
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
        email: req.user.email
    };
    res.send(userInfo);
  }
)

router.get('/', (req, res, next) => {
  console.log('===== User!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'Logging Out' })
    } else {
        res.send({ msg: 'No user to Log Out' })
    }
})

module.exports = router