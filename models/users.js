const { Schema, model } = require('mongoose')


const user = new Schema(
  {
    username: String,
    email: String,
    password: String,
    roles: [{
      ref: "Role",
      type: Schema.Types.ObjectId
    }]
  },
  {
    timestamps: true,
    versionKey: false, 
  })

module.exports = model('User', user)