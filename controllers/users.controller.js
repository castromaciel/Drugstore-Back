const User = require('../models/users')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) return res.status(400).json( {errors: errors.array()} )
  
  const { username, email, password } = req.body
  const newUser = new User({username, email, password})
  
  const salt = bcrypt.genSaltSync()
  newUser.password = bcrypt.hashSync(password, salt)
  
  const userSaved = await newUser.save()
  res.status(201).json(userSaved)
}

const getUsers = async (req,res) => {
  const users = await User.find()
  res.json(users)
}

const getUserById = async (req,res) => {
  const user = await User.findById(req.params.userId)
  res.status(200).json(user)
}

const updateUserById = async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
  res.status(200).json(updateUser)
}

const deleteUserById = async  (req,res) =>{
  const {userId} = req.params
  const deleteUser = await User.findByIdAndDelete(userId)
  res.status(204).json(deleteUser)
}

module.exports = { createUser, getUsers, getUserById, updateUserById, deleteUserById}