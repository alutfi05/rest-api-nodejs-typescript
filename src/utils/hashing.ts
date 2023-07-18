import bcrypt from 'bcrypt'

// Encode password
export const hashing = (password: string) => {
  return bcrypt.hashSync(password, 10)
}

// Decode password
export const checkPassword = (password: string, userPassword: string) => {
  return bcrypt.compareSync(password, userPassword)
}
