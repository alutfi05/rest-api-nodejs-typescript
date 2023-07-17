import bcrypt from 'bcrypt'

// Encode password
export const hashing = (password: string) => {
  return bcrypt.hashSync(password, 10)
}
