import { Router } from 'express'
import { User } from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const users = await User.findAll({})
  res.send(users)
})
router.post('/', (req, res) => {
  res.send({ a: 324 })
})

export default router
