import axios from 'axios'
import { getToken } from './account'
import { secondsToReadableTime } from './datetime'
import { getTokenExpire } from './jwt'

export const getApiURL = (path) => {
  return `http://localhost:3001${path}`
}

export const getHeaders = () => {
  const token = getToken()
  if (!token)
    return {}

  const secondsToExpire = getTokenExpire(token) - (Date.now() / 1000)
  const readableTime = secondsToReadableTime(secondsToExpire)

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

export const apiPut = (path, data = {}) => {
  const url = getApiURL(path)
  const options = {
    headers: getHeaders()
  }
  return axios.put(url, data, options)
}

export const apiGet = (path) => {
  const url = getApiURL(path)
  const options = {
    headers: getHeaders()
  }
  return axios.get(url, options)
}

export const apiDelete = (path, data = {}) => {
  const url = getApiURL(path)
  const options = {
    headers: getHeaders()
  }
  return axios.delete(url, options)
}