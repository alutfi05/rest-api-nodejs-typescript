import supertest from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import type { Application } from 'express'
import { v4 as uuidv4 } from 'uuid'
import createServer from '../utils/server'
import { addProductToDB } from '../services/product.service'

const app: Application = createServer()

const productId1 = uuidv4()

const productPayload = {
  product_id: productId1,
  name: 'Hoodie Hitam',
  price: 499000,
  size: 'L'
}

describe('product', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
    await addProductToDB(productPayload)
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })

  describe('get all product', () => {
    describe('given the product does exist', () => {
      it('should return 200', async () => {
        const { statusCode } = await supertest(app).get('/product')
        expect(statusCode).toBe(200)
      })
    })
  })

  describe('get detail product', () => {
    describe('given the product does not exist', () => {
      it('should return 404 and empty data', async () => {
        const productId = 'PRODUCT_123'
        await supertest(app).get(`/product/${productId}`).expect(404)
      })
    })
    describe('given the product does exist', () => {
      it('should return 200 and detail product data', async () => {
        const { statusCode, body } = await supertest(app).get(`/product/${productId1}`)
        expect(statusCode).toBe(200)
        expect(body.data.name).toBe('Hoodie Hitam')
      })
    })
  })
})
