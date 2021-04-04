import { Product } from '../models'

export const getProducts = async (req, res) => {
  const products = await Product.findAll()
  res.status(200).json(products)
}

// export const getProductById = async (req, res) => {
//   const products = await Product.findAll()
//   res.status(200).json(products)
// }

export const addProducts = async (req, res, next) => {
  const result = await Product.create({ ...req.body, userId: 1 })
  res.status(201).json(result)
}

export const updateProducts = async (req, res, next) => {
  const product = await Product.findByPk(req.body.id)
  product = req.body
  const result = await product.save()
  res.status(201).json(result)
}

export const deleteProducts = async (req, res, next) => {
  const product = await Product.findByPk(req.body.id)
  const result = await product.destroy()
  res.status(201).json(result)
}
