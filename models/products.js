const { Schema, model } = require('mongoose')

const product = new Schema (
  {
    codebar: String,
    name: String,
    brand: String,
    price: Number,
    stock: Number,
    imgURL: String
  }
)

module.exports = model('Product', product)