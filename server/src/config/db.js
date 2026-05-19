import { Sequelize } from 'sequelize'

const db = new Sequelize('producto', 'postgres', '12345', {
  host: '127.0.0.1',
  port: 5432,
  dialect: 'postgres',
  logging: false
})

export default db