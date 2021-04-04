import { Cart, CartItem, Order } from '../models'

export const getMineOrders = async (req, res) => {
  console.log(req.user._id)
  const order = await Order.findAll({ userId: req.user._id })
  if (order) {
    res.status(200).json(order)
  } else {
    res.status(404).send('Order Not Fount')
  }
}

export const getOrderById = async (req, res) => {
  const order = await Order.findOne({ id: req.params.id })
  if (order) {
    res.status(200).json(order)
  } else {
    res.status(404).send('Order Not Fount')
  }
}

export const createOrder = async (req, res) => {
  // const order = await Order.create({ ...req.body, user: req.user.id })
  // let card = await Cart.findAll({ where: { userId: req.user._id } })
  let cardItems = await CartItem.findAll({include: Cart })

  console.log(cardItems)

  if (cardItems) {
    res.status(200).json({ cardItems, message: 'New Order Created' })
  } else {
    res.status(404).send('Order Not Fount')
  }
}
