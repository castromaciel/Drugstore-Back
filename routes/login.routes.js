const { Router } = require('express')
const { loginUser } = require('../controllers/login.controller')
const route = Router()

route.post('/', loginUser)

module.exports = route