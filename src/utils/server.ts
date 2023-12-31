import express from 'express'
import type { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { routes } from '../routes'
import deserializeToken from '../middlewares/deserializedToken'

const createServer = () => {
  const app: Application = express()

  app.use(deserializeToken)

  // parse body request
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // cors access handler
  app.use(cors())
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
  })

  routes(app)

  return app
}

export default createServer
