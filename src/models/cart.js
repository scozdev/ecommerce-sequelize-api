import { Sequelize } from 'sequelize'

import sequelize from '../config/database'

export const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
})
