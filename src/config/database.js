import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('database', 'root', 'test123', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
})

export default sequelize

async function dbControl() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
dbControl()
