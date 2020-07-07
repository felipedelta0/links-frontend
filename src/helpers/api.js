import axios from 'axios'
import { getToken } from './account'

export const getApiURL = (path) => {
  return `http://localhost:3001${path}`
}

export const getHeaders = () => {
  const token = getToken()
  if (!token)
    return {}

  return {
    Authorization: `Bearer ${token}`
  }
}

export const apiPost = (path, data = {}) => {
  const url = getApiURL(path)
  const options = {
    headers: getHeaders()
  }

  return axios.post(url, data, options)
}

export const apiGet = (path, params = {}) => {
  const url = getApiURL(path)
  const options = {
    headers: getHeaders()
  }

  return axios.get(url, options)
}