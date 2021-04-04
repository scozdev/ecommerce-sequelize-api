import jwt from 'jsonwebtoken'

export const getToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '48h',
    }
  )
}

export const isAuth = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    const onlyToken = token.slice(7, token.length)
    jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: 'Invalid Token' })
      }
      req.user = decode
      next()
      return
    })
  } else {
    return res.status(401).send({ message: 'Token is not supplied.' })
  }
}
