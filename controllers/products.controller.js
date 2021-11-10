const Product = require('../models/products')
const { validationResult } = require('express-validator')

const createProduct = async (req,res) => {

  const errors = validationResult(req)
  if(!errors.isEmpty()) return res.status(400).json( {errors: errors.array()} )
  
  const newProduct = new Product(req.body)
  const productSaved = await newProduct.save()
  res.status(201).json(productSaved)

}

const getProducts = async (req,res) => {
  const products = await Product.find()
  res.json(products)
}

const getPorductById = async (req,res) => {
  const product = await Product.findById(req.params.productId)
  res.status(200).json(product)
}

const updateProductById = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) return res.status(400).json( {errors: errors.array()} )
  
  const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {new:true})
  res.status(200).json(updateProduct)
}

const deleteProductById = async (req,res) => {
  const {productId} = req.params
  const deleteProduct = await Product.findByIdAndDelete(productId)
  res.status(204).json(deleteProduct)
}

module.exports = { deleteProductById, updateProductById, getPorductById, getProducts, createProduct }