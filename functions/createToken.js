const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')

const minutes = value => {
  return value * 60 * 1000;
}

const createToken = async id => {
  return Users.findUserById(id)
    .then(user => {
      const payload = {
        user_id: user.id,
        user_name: user.username
      }
      const options = {
        expiresIn: minutes(60)
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET, options)
      return token
    })
    .catch(err => {
      res.status(500).json({
        message: 'An error occurred while signing in',
        error: err
      })
    })
}

module.exports = createToken