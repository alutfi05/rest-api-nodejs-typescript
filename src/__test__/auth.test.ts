import supertest from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import type { Application } from 'express'
import { v4 as uuidv4 } from 'uuid'
import createServer from '../utils/server'
import { createUser } from '../services/auth.service'
import { hashing } from '../utils/hashing'

const app: Application = createServer()

const userAdmin = {
  user_id: uuidv4(),
  email: 'aluthfi123@gmail.com',
  name: 'Ahmad Lutfi Rizki Patria',
  password: `${hashing('test123')}`,
  role: 'admin'
}

const userReguler = {
  user_id: uuidv4(),
  email: 'aluthfi0522@gmail.com',
  name: 'Ahmad Lutfi Rizki Patria',
  password: `${hashing('test123')}`,
  role: 'regular'
}

const userAdminCreated = {
  email: 'aluthfi@gmail.com',
  name: 'Ahmad Lutfi Rizki Patria',
  password: 'test123',
  role: 'admin'
}

const userRegularCreated = {
  email: 'aluthfi22@gmail.com',
  name: 'Ahmad Lutfi Rizki Patria',
  password: 'test123'
}

const userAdminLogin = {
  email: 'aluthfi123@gmail.com',
  password: 'test123'
}

const userNotExist = {
  email: 'aluthfi12313131@gmail.com',
  password: '1231414'
}

describe('authentication', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
    await createUser(userAdmin)
    await createUser(userReguler)
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })

  describe('register', () => {
    describe('create user with role admin', () => {
      it('should return 201, success create user admin', async () => {
        await supertest(app).post('/auth/register').send(userAdminCreated).expect(201)
      })
    })
    describe('create user with role regular', () => {
      it('should return 201, success create user regular', async () => {
        await supertest(app).post('/auth/register').send(userRegularCreated).expect(201)
      })
    })
  })

  describe('login', () => {
    describe('login with exist user', () => {
      it('should return 200, return access token & refresh token', async () => {
        await supertest(app).post('/auth/login').send(userAdminLogin).expect(200)
      })
    })
    describe('login with not exist user', () => {
      it('should return 422, login failed', async () => {
        await supertest(app).post('/auth/login').send(userNotExist).expect(422)
      })
    })
  })
})
