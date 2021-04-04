import { User } from '../models'
import { getToken } from '../middlewares/auth'

export const createUser = async (req, res) => {
  const newUser = await User.create(req.body)
  if (newUser) {
    res.status(200).json(newUser)
  } else {
    res.status(401).json({ message: 'Invalid User' })
  }
}

export const loginUser = async (req, res) => {
  const signinUser = await User.findOne({
    where: { email: req.body.email, password: req.body.password },
  })

  console.log(signinUser.id)
  if (signinUser) {
    let token = getToken(signinUser)
    res.status(200).json({ status: true, token: token })
  } else {
    res.status(401).json({ status: false, message: 'Invalid Email or Password' })
  }
}

export const meUser = async (req, res) => {
  const user = await User.findByPk(req.body.id)
  res.status(200).json(user)
}
