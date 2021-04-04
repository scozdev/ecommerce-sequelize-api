import { Cart, CartItem, Category, Order, OrderItem, Product, User } from './models'

Product.belongsTo(Category, { foreignKey: { allowNull: false } })
Category.hasMany(Product)

Product.belongsTo(User)
User.hasMany(Product)

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })

Order.belongsTo(User)
User.hasMany(Order)

Order.belongsToMany(Product, { through: OrderItem })
Product.belongsToMany(Order, { through: OrderItem })
