require('dotenv').config()
const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtsecret = process.env.SECRET

const loginUser = async(req,res) =>{
  const { username, email, password, img } = req.body

  const searchEmail = await User.find({email: email})
  if(searchEmail[0]){
    
    const match = bcrypt.compareSync(password, searchEmail[0].password)

    if(match){
      const payload = {
        check:true, 
        userdata:{
          email: searchEmail[0].email,
          username: searchEmail[0].username,
          id: searchEmail[0]._id,
          img: searchEmail[0].img,
          roles: searchEmail[0].roles
        }}
      const token = jwt.sign(payload, jwtsecret, {expiresIn: '1h'})
      res.status(200).json({msg:'User has been loged', token: token, userdata: payload.userdata })
    } else res.status(401).json({msg:'Wrong user', token: false})
    
  } else res.status(404).json({msg:'User not found'})

  
}

module.exports = {loginUser}