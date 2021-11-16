const { Schema, model } = require('mongoose')

const user = new Schema(
  {
    username: String,
    email: String,
    password: String,
    img: String,
    favs: [],
    nameSurname: String,
    postalcode: String,
    province: String,
    city: String,
    street: String,
    number: String,
    apartment: String,
    phonenumber: String 
  })

module.exports = model('User', user)