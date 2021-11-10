const Product =  require('../models/products')

const productCodeValidation = async (code) =>{
  const productCode = await Product.findOne( {code} )
  if(productCode) throw new Error ('El producto ya existe')
}

const stockValidation = async(stock) =>{
  if(stock < 0) throw new Error ('El stock debe ser un entero positivo')
}

const priceValidation = async (price) => {
  if(price < 0) throw new Error ('El precio no puede ser menor a cero.')
}
module.exports = { stockValidation, productCodeValidation, priceValidation }