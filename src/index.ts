import type { Application } from 'express'
import { logger } from './utils/logger'

// connect DB
import './utils/connectDB'

import createServer from './utils/server'

const app: Application = createServer()
const port: number = 4000

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`)
})
