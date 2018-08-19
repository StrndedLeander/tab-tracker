const bcrypt = require('bcrypt-nodejs')

function hashPassword (user, options) {
  const SALT_ACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_ACTOR)
    .then(salt => bcrypt.hasAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePasword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
