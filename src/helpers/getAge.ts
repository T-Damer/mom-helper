const oneWeekMs = 1000 * 60 * 60 * 24 * 7

function getAgeSuffix(age: number): string {
  const lastDigit = age % 10
  const lastTwoDigits = age % 100

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return 'год'
  } else if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits > 20)
  ) {
    return 'года'
  } else {
    return 'лет'
  }
}

function getDaySuffix(day: number) {
  const lastDigit = day % 10
  if (lastDigit === 1) return 'день'
  return 'дня'
}

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

  const stringified = []

  if (years > 0) {
    stringified.push(`${years} ${getAgeSuffix(years)}`)
    if (months > 0) {
      stringified.push(`${months} мес`)
    }
  } else {
    if (months > 0) {
      stringified.push(`${months} мес`)
      if (weeks > 0) {
        stringified.push(`${weeks} нед`)
      }
    } else {
      if (weeks > 0) {
        stringified.push(`${weeks} нед`)
      }
      stringified.push(`${days} ${getDaySuffix(days)}`)
    }
  }

  return {
    years,
    months: Math.abs(months),
    weeks: Math.abs(weeks),
    days: Math.abs(days),
    stringified: stringified.join(' '),
  }
}
