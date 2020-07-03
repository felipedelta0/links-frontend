import axios from 'axios'

export const getApiURL = (path) => {
  return `http://localhost:3001${path}`
}

export const getHeaders = () => {
  return {}
}

export const apiPost = (path, data = {}) => {
  const url = getApiURL(path)
  const options = {
    headers: getHeaders()
  }

  return axios.post(url, data, options)
}