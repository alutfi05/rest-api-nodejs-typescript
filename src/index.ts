import express from 'express'
import type { Application } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'

const app: Application = express()
const port: number = 4000

routes(app)

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`)
})
