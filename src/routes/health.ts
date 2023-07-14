import { Router } from 'express'
import type { NextFunction, Request, Response } from 'express'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: '200' })
})
