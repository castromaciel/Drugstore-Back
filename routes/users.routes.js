const { Router } = require('express')
const { body } = require('express-validator')
const { createUser, getUsers, getUserById, updateUserById, deleteUserById} = require('../controllers/users.controller')
const { emailValidation, userValidation } = require('../helpers/validation')

const route = Router()

route.post('/', 
body('username').custom( userValidation ),
body('email').custom( emailValidation ), 
createUser
)
route.get('/',  getUsers)

route.get('/:userId',  getUserById)
route.patch('/:userId',  updateUserById)
route.delete('/:userId',  deleteUserById)


module.exports = route