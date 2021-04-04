import { Router } from 'express'
import { Product } from '../models'
const router = Router()

router.get('/products', (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.send(products)
    })
    .catch((err) => {
      console.log(err)
    })
})

export default router
