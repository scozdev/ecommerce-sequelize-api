import { Sequelize } from 'sequelize'

import sequelize from '../config/database'

export const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
})
