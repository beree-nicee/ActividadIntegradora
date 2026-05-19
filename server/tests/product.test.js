import request from 'supertest'
import app from '../index.js'
import db from '../src/config/db.js'

beforeAll(async () => {
  await db.sync({ force: true })
})

afterAll(async () => {
  await db.close()
})

describe('GET /api/products', () => {
  it('debe retornar un arreglo vacío', async () => {
    const res = await request(app).get('/api/products')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })
})

describe('POST /api/products', () => {
  it('debe crear un producto', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ name: 'Laptop', price: 999.99, stock: 10 })
    expect(res.status).toBe(201)
    expect(res.body.name).toBe('Laptop')
  })

  it('debe rechazar un producto sin nombre', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ price: 999.99 })
    expect(res.status).toBe(400)
  })
})