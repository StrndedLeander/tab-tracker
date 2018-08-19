const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {
      error
    } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid E-Mail adress!'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided must match the following rules:
             <br>
             1. It must contain ONLY the following characters: lower case, upper case, numerics.
             <br>
             2. Must be atleast 8 characters long but not longer than 32 characters.`
          })
          break
        default:
          res.status(400).send({
            error: 'Registration information invalid.'
          })
      }
    } else {
      next()
    }
  }
}
