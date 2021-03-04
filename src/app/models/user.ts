export interface User {

  admin_id?: number
  client_id?: number
  provider_id?: number
  user_id?: number
  firstname: string
  lastname: string
  gender?: string
  rut?: string
  email?: string
  phone?: string
  birthdate: any // type: Date
  password?: string
  token?: string
  img_url?: string
  state?: string
  email_verified?: string
  addresses?: any[]
  
  location?: any,
  elders?: any[],
  credit?: number
  avatar?: string
  accountType?: string
  role?: string
}