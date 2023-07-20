import supertest from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import type { Application } from 'express'
import { v4 as uuidv4 } from 'uuid'
import createServer from '../utils/server'
import { addProductToDB } from '../services/product.service'
import { createUser } from '../services/auth.service'
import { hashing } from '../utils/hashing'

const app: Application = createServer()

const productId1 = uuidv4()
const productId2 = uuidv4()
const userIdAdmin = uuidv4()
const userIdReguler = uuidv4()

const productPayload = {
  product_id: productId1,
  name: 'Hoodie Hitam',
  price: 499000,
  size: 'L'
}

const productPayloadCreate = {
  product_id: productId2,
  name: 'Hoodie Putih',
  price: 499000,
  size: 'L'
}

const userAdminCreated = {
  user_id: userIdAdmin,
  email: 'aluthfi123@gmail.com',
  name: 'Ahmad Lutfi Rizki Patria',
  password: `${hashing('test123')}`,
  role: 'admin'
}

const userCreated = {
  user_id: userIdReguler,
  email: 'aluthfi0522@gmail.com',
  name: 'Ahmad Lutfi Rizki Patria',
  password: `${hashing('test123')}`,
  role: 'regular'
}

const userAdmin = {
  email: 'aluthfi123@gmail.com',
  password: 'test123'
}

const userReguler = {
  email: 'aluthfi0522@gmail.com',
  password: 'test123'
}

describe('product', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
    await addProductToDB(productPayload)
    await createUser(userAdminCreated)
    await createUser(userCreated)
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

  describe('create product', () => {
    describe('if user is not login', () => {
      it('should return 403, request forbidden', async () => {
        const { statusCode } = await supertest(app).post('/product').send(productPayloadCreate)
        expect(statusCode).toBe(403)
      })
    })
    describe('if user is login as admin', () => {
      it('should return 201, success create product', async () => {
        const { body } = await supertest(app).post('/auth/login').send(userAdmin)
        const { statusCode } = await supertest(app)
          .post('/product')
          .set('Authorization', `Bearer ${body.data.accessToken}`)
          .send(productPayloadCreate)
        expect(statusCode).toBe(201)
      })
      // it('should return 422, product name is exist in DB', async () => {
      //   const { body } = await supertest(app).post('/auth/login').send(userAdmin)
      //   const { statusCode } = await supertest(app)
      //     .post('/product')
      //     .set('Authorization', `Bearer ${body.data.accessToken}`)
      //     .send(productPayload)
      //   expect(statusCode).toBe(422)
      // })
    })
    describe('if user is login as reguler', () => {
      it('should return 403, request forbidden', async () => {
        const { body } = await supertest(app).post('/auth/login').send(userReguler)
        const { statusCode } = await supertest(app)
          .post('/product')
          .set('Authorization', `Bearer ${body.data.accessToken}`)
          .send(productPayloadCreate)
        expect(statusCode).toBe(403)
      })
    })
  })
})