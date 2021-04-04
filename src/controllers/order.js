import { Cart, CartItem, Order, OrderItem, Product, User } from '../models'

export const getMineOrders = async (req, res) => {
  console.log(req.user._id)
  const order = await Order.findAll({ where: { userId: req.user._id }, include:[Product] })
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
  let user = await User.findOne({ where: { id: req.user._id }, include: [Cart] })
  let cartItems = await user.cart.id
  let userCartItem = await CartItem.findAll({ where: { cartId: cartItems } })

  const order = await Order.create({ userId: req.user._id })

  userCartItem.forEach(async (cartItem) => {
    await OrderItem.create({
      orderId: order.id,
      quantity: 1,
      price: 1,
      productId: cartItem.productId,
    })
  })

  if (cartItems) {
    res.status(200).json({ userCartItem, message: 'New Order Created' })
  } else {
    res.status(404).send('Order Not Fount')
  }
}
