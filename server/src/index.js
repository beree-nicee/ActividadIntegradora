import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import db from './src/config/db.js'
import productRoutes from './src/routes/product.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000

db.authenticate()
  .then(() => {
    console.log('Conexión a PostgreSQL exitosa')
    return db.sync()
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
  })
  .catch(err => console.error('Error al conectar:', err))

export default app