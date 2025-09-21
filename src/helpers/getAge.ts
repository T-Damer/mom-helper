const oneWeekMs = 1000 * 60 * 60 * 24 * 7

export default function (dateString: string) {
  const today = new Date()
  const birthDate = new Date(dateString)

  let years = today.getFullYear() - birthDate.getFullYear()
  const months = today.getMonth() - birthDate.getMonth()
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--
  }
  const weeks = Math.floor((today.getTime() - birthDate.getTime()) / oneWeekMs)
  const days = today.getDate() - birthDate.getDate()

  return {
    years,
    months: Math.abs(months),
    weeks: Math.abs(weeks),
    days: Math.abs(days),
  }
}
