const { Router } = require('express') 
const { deleteProductById, updateProductById, getPorductById, getProducts, createProduct } = require('../controllers/products.controller')
const {jwtvalidator} = require('../middleware/jwtvalidator')

const route = Router()

route.post('/', createProduct)
route.get('/', getProducts)

route.get('/:productId', jwtvalidator,  getPorductById)
route.patch('/:productId', jwtvalidator, updateProductById)
route.delete('/:productId', jwtvalidator, deleteProductById)

module.exports = route