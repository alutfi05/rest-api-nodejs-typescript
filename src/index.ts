import express from 'express'
import type { Application } from 'express'
import { routes } from './routes'

const app: Application = express()
const port: number = 4000

routes(app)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
