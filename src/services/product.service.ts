import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import type ProductType from '../types/product.type'

export const addProductToDB = async (payload: ProductType) => {
  try {
    return await productModel.create(payload)
  } catch (error) {
    logger.info('Cannot add data yo DB')
    logger.error(error)
  }
}

export const getProductFromDB = async () => {
  try {
    const data = await productModel.find()
    return data
  } catch (error) {
    logger.info('Cannot get data from DB')
    logger.error(error)
  }
}

export const getProductById = async (id: string) => {
  try {
    const data = await productModel.findOne({ product_id: id })
    return data
  } catch (error) {
    logger.info('Cannot get data by id from DB')
    logger.error(error)
  }
}
