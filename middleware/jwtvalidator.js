require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtsecret = process.env.SECRET

const jwtvalidator = async (req,res,next) => {
  const token = req.headers['acces-token']

  if(token){
    jwt.verify(token, jwtsecret, (err) =>{
      if(err){
        res.json({msg:'Invalid token'})
      } else{
        next()
      }
    })
  }else{
    res.json({msg:'Inexistent token'})
  }
}

module.exports = { jwtvalidator }