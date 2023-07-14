import type { Request, Response } from 'express'
import { createProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)

  if (error) {
    logger.error(`ERR: product - create =  ${error.details[0].message}`)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: {}
    })
  }

  logger.info('Success add new product')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Add product success',
    data: value
  })
}

export const getProduct = (req: Request, res: Response) => {
  logger.info('Success get product data')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    data: [{ name: 'Sepatu Sport', price: 500000 }]
  })
}
