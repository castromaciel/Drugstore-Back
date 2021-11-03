require('dotenv').config()
require('../database/database')
const express = require ('express')
const app = express()
const usersRoute = require('../routes/users.routes')
const loginRoute = require('../routes/login.routes')
const productsRoute = require('../routes/prodcuts.routes')
const port = process.env.PORT 

app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/products', productsRoute)
app.use('/users', usersRoute)
app.use('/login', loginRoute)

app.listen(port, () => console.log(`Estamos escuchando el pureto ${port}`))
