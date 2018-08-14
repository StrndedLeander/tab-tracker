const AuthenticationController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthControllerPolicy.register,
    AuthenticationController.register)
}
