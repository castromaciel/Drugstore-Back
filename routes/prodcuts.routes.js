const { Router } = require('express') 
const { body } = require('express-validator')
const { deleteProductById, updateProductById, getPorductById, getProducts, createProduct } = require('../controllers/products.controller')
const { productCodeValidation, priceValidation, stockValidation } = require('../helpers/products.validation')
const {jwtvalidator} = require('../middleware/jwtvalidator')

const route = Router()

route.post('/', jwtvalidator,
body('name').isLength({ max: 40, min: 6 }).withMessage('El nombre debe tener entre 6 y 40 carácteres'),
body('codebar').isEmpty().withMessage('Se requiere el codigo del producto').isLength({ max: 12, min: 6 }).withMessage('El codigo debe tener entre 6 y 12 carácteres').custom(productCodeValidation),
body('brand').isLength({ max: 30, min: 2 }).withMessage('Se requiere el nombre de la marca'),
body('price').not().isEmpty().withMessage('Se requiere un precio').isFloat().withMessage('El precio debe ser un numero').custom(priceValidation),
body('stock').not().isEmpty().withMessage('Se requiere una cantidad de stock').isInt().withMessage('El stock debe ser un numero entero positivo').custom(stockValidation),
body('imgURL').isURL().withMessage('La imagen debe ser un url válido').not().isEmpty().withMessage('Se requiere el url de una imagen'),
createProduct)
route.get('/', getProducts)

route.get('/:productId', getPorductById)
route.patch('/:productId', jwtvalidator,
body('name').isLength({ max: 40, min: 6 }).withMessage('El nombre debe tener entre 6 y 40 carácteres'),
body('codebar').isEmpty().withMessage('Se requiere el codigo del producto').isLength({ max: 12, min: 6 }).withMessage('El codigo debe tener entre 6 y 12 carácteres').custom(productCodeValidation),
body('brand').isLength({ max: 30, min: 2 }).withMessage('Se requiere el nombre de la marca'),
body('price').not().isEmpty().withMessage('Se requiere un precio').isFloat().withMessage('El precio debe ser un numero').custom(priceValidation),
body('stock').not().isEmpty().withMessage('Se requiere una cantidad de stock').isInt().withMessage('El stock debe ser un numero entero positivo').custom(stockValidation),
body('imgURL').isURL().withMessage('La imagen debe ser un url válido').not().isEmpty().withMessage('Se requiere el url de una imagen'),
updateProductById)
route.delete('/:productId', jwtvalidator, deleteProductById)

module.exports = route