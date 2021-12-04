const User = require('../models/users')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) return res.status(400).json( {errors: errors.array()} )
  const { username, email, password } = req.body
  
  const img = "https://cdn-icons-png.flaticon.com/512/3239/3239279.png"
  const newUser = new User({username, email, password, img})
  
  const salt = bcrypt.genSaltSync()
  newUser.password = bcrypt.hashSync(password, salt)
  
  const userSaved = await newUser.save()
  res.status(201).json("created")
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
  const user = await User.findById(req.params.userId)
  const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
  res.status(200).json({userdata:{id: user._id,email:user.email, username:user.username, img:updateUser.img}})
}

const deleteUserById = async  (req,res) =>{
  const {userId} = req.params
  const deleteUser = await User.findByIdAndDelete(userId)
  res.status(204).json(deleteUser)
}

const addFavourites = async (req,res) => {
  const item = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
  res.status(200).json(req.params)
}

module.exports = { createUser, getUsers, getUserById, updateUserById, deleteUserById,addFavourites}