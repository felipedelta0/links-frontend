export const getTokenExpire = token => {
  if (!token)
    return 0

  try {
    const [ , payload ] = token.split('.')
    const data = JSON.parse(atob(payload)) // parser base64
    const expires = data ? data.exp : 0 // timestamp
    return expires
  } catch {
    return 0
  }
}