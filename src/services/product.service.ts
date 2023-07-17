import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import type ProductType from '../types/product.type'

export const addProductToDB = async (payload: ProductType) => {
  try {
    return await productModel.create(payload)
  } catch (error) {
    logger.info('Cannot add data to DB')
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

export const updateProductById = async (id: string, payload: ProductType) => {
  try {
    const data = await productModel.findOneAndUpdate({ product_id: id }, { $set: payload })
    return data
  } catch (error) {
    logger.info('Cannot update data by id to DB')
    logger.error(error)
  }
}

export const deleteProductById = async (id: string) => {
  try {
    const data = await productModel.findOneAndDelete({ product_id: id })
    return data
  } catch (error) {
    logger.info('Cannot delete data by id to DB')
    logger.error(error)
  }
}
