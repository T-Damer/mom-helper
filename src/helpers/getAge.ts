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
  let months = today.getMonth() - birthDate.getMonth()
  let days = today.getDate() - birthDate.getDate()

  // Adjust if day hasn't occurred yet this month
  if (days < 0) {
    months--
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
    days += lastMonth.getDate()
  }

  // Adjust if month hasn't occurred yet this year
  if (months < 0) {
    years--
    months += 12
  }

  const totalDays = Math.floor(
    (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
  )
  const weeks = Math.floor(totalDays / 7)

  const stringified = []

  if (years > 0) {
    stringified.push(`${years} ${getAgeSuffix(years)}`)
    if (months > 0) {
      stringified.push(`${months} мес`)
    }
  } else if (months > 0) {
    // Only show months (no weeks when months > 0)
    stringified.push(`${months} мес`)
  } else {
    // Less than 1 month old: show weeks and/or days
    if (weeks > 0) {
      stringified.push(`${weeks} нед`)
    }
    if (days > 0 || weeks === 0) {
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
