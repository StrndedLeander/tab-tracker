const {
  User
} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send(userJson)
    } catch (err) {
      res.status(400).send({
        error: 'E-mail adress already in use!'
      })
    }
  },
  async login (req, res) {
    try {
      const {
        email,
        password
      } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      try {
        if (!user) {
          return res.status(403).send({
            error: 'User with this login information not found!'
          })
        } else {
          const isValid = await user.comparePassword(password)
          console.log(isValid)
          if (isValid) {
            const userJson = user.toJSON()
            return res.send({
              user: userJson,
              token: jwtSignUser(userJson)
            })
          }
        }
      } catch (err) {
        return res.status(403).send({
          error: 'Login information incorrect!'
        })
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error occured trying to log in'
      })
    }
  }
}
