export function formatDate () {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours || 12
  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`
  return formattedDate
}
