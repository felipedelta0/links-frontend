import { apiPost } from '../../helpers/api'

export const SIGN_UP = 'SIGN_UP'

export const signUpAction = (data) => {
  const payload = apiPost('/auth/signup', data)
  
  return { type: SIGN_UP, payload }
}