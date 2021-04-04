import { Sequelize } from 'sequelize'

import sequelize from '../config/database'

export const OrderItem = sequelize.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelize.INTEGER,
  price: Sequelize.DOUBLE,
})
