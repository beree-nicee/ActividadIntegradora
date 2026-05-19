import Product from '../models/product.model.js'

export const getProducts = async (req, res) => {
  const products = await Product.findAll()
  res.json(products)
}

export const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id)
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
  res.json(product)
}

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json(product)
}

export const updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id)
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
  await product.update(req.body)
  res.json(product)
}

export const deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id)
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
  await product.destroy()
  res.json({ message: 'Producto eliminado' })
}