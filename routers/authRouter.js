const router = require('express').Router()
const bcrypt = require('bcryptjs')
const createToken = require('../functions/createToken')
const Users = require('../models/userModel.js')

// Endpoint for registering user account
router.post('/register', async (req, res) => {
  const user = req.body
  user.password = bcrypt.hashSync(user.password, 12)
  Users.addUser(user)
    .then(async saved => {
      const token = await createToken(saved.id)
      res.status(201).json({token})
    })
    .catch(err => {
      res.status(500).json({
        message: "Could not register account",
        error: err
      })
    })
})

// Endpoint for logging into user account
router.post('/login', (req, res) => {
  let { username, password } = req.body
  Users.findUserByUserName(username)
    .then(async user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = await createToken(user.id)
        res.status(200).json({token})
      } else {
        res.status(400).json({
          message: "Incorrect password"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: `Could not find user: ${username}`,
        error: err
      })
    })
})

module.exports = router;