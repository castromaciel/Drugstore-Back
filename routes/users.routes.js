const { Router } = require('express')
const { body } = require('express-validator')
const { createUser, getUsers, getUserById, updateUserById, deleteUserById, addFavourites} = require('../controllers/users.controller')
const { emailValidation, usernameValidation } = require('../helpers/users.validation')

const route = Router()

route.post('/', 
body('username').custom( usernameValidation ),
body('email').custom( emailValidation ), 
createUser)
route.get('/', getUsers)

route.get('/:userId', getUserById)

route.put('/:userId', 
body('img').isURL().withMessage('La imagen debe ser un url válido'),
updateUserById)

route.patch('/:userId', addFavourites)
route.delete('/:userId', deleteUserById)

module.exports = route