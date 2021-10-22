const express = require ('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT 

app.use(express.json())

app.listen(port, () => console.log(`Estamos escuchando el pureto ${port}`))