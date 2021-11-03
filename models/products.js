const { Schema, model } = require('mongoose')

const product = new Schema (
  {
    name: String,
    marca: String,
    price: Number,
    stock: Number,
    imgURL: String
  }
)

module.exports = model('Product', product)