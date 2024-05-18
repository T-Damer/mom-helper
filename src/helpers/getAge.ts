export default function (dateString: string) {
  var today = new Date()
  var birthDate = new Date(dateString)
  var years = today.getFullYear() - birthDate.getFullYear()
  var months = today.getMonth() - birthDate.getMonth()
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--
  }
  return { years, months: Math.abs(months) }
}
