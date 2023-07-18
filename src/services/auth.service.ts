import type UserType from '../types/user.type'
import userModel from '../models/user.model'
import { logger } from '../utils/logger'

export const createUser = async (payload: UserType) => {
  try {
    return await userModel.create(payload)
  } catch (error) {
    logger.info('Cannot register user to DB')
    logger.error(error)
  }
}

export const findUserByEmail = async (email: string) => {
  try {
    return await userModel.findOne({ email })
  } catch (error) {
    logger.info('Cannot find user from DB')
    logger.error(error)
  }
}
