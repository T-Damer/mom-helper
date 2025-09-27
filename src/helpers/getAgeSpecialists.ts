// Calculate age in months from birth date
export const calculateAgeInMonths = (birthDate: string | Date) => {
  const today = new Date()
  const birth = new Date(birthDate)

  let months = (today.getFullYear() - birth.getFullYear()) * 12
  months += today.getMonth() - birth.getMonth()

  // Adjust if day of month is earlier
  if (today.getDate() < birth.getDate()) {
    months--
  }

  return Math.max(0, Math.floor(months))
}

// Convert months to age string (e.g., 1 -> "1 мес", 12 -> "1 год")
export const getAgeString = (months: number) => {
  if (months === 0) return '<1 мес'
  if (months < 12) return `${months} мес`
  if (months === 12) return '1 год'

  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (remainingMonths === 0) {
    return `${years} год`
  } else if (remainingMonths === 3) {
    return `${years} год 3 мес`
  } else if (remainingMonths === 6) {
    return `${years} год 6 мес`
  } else {
    return `${years} год ${remainingMonths} мес`
  }
}
