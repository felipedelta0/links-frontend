export const secondsToReadableTime = seconds => {
  const hour = Math.floor(seconds / 60 / 60)
  const minute = Math.floor(seconds / 60) - hour * 60
  const second = seconds % 60

  const formatNumber = v => `0${Number.parseInt(v, 10)}`.slice(-2)

  const readableTime = [hour, minute, second].map(formatNumber).join(':')

  return readableTime
}