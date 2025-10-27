import clsx from 'clsx'

type VaccinationEntry = {
  text: string
  color?: 'green' | 'blue' | 'amber' | 'orange'
}

const AGES = [
  '0',
  '1',
  '2',
  '3',
  '4.5',
  '6',
  '12',
  '15',
  '18',
  '20',
  '6 лет',
  '7 лет',
  '12 лет',
  '14 лет',
  '15-17',
  '18-25',
  '26-35',
  '36-55',
  '56-59',
  '60+',
]

type Schedule = {
  [key: string]: VaccinationEntry
}

const VACCINATIONS: Array<{ name: string; schedule: Schedule }> = [
  {
    name: 'Туберкулез',
    schedule: {
      '0': { text: '3-7 дн', color: 'green' },
      '6 лет': { text: 'RV', color: 'green' },
      '7 лет': { text: 'RV', color: 'green' },
    },
  },
  {
    name: 'Гепатит B',
    schedule: {
      '0': { text: 'V1', color: 'green' },
      '1': { text: 'V2', color: 'green' },
      '6': { text: 'V3', color: 'green' },
      '12': { text: '', color: 'blue' },
      '15': { text: '', color: 'blue' },
      '18': { text: '', color: 'blue' },
      '20': { text: '', color: 'blue' },
      '6 лет': { text: '', color: 'blue' },
      '7 лет': { text: '', color: 'blue' },
      '12 лет': { text: '', color: 'blue' },
      '14 лет': { text: '', color: 'blue' },
      '15-17': { text: '', color: 'blue' },
      '18-25': { text: '', color: 'blue' },
      '26-35': { text: '', color: 'blue' },
      '36-55': { text: '', color: 'blue' },
      '56-59': { text: '', color: 'blue' },
      '60+': { text: '', color: 'blue' },
    },
  },
  {
    name: 'Гепатит B*',
    schedule: {
      '0': { text: 'V1', color: 'amber' },
      '1': { text: 'V2', color: 'amber' },
      '2': { text: 'V3', color: 'amber' },
      '6': { text: 'V3', color: 'green' },
      '12': { text: 'V4', color: 'amber' },
      '15': { text: '', color: 'blue' },
      '18': { text: '', color: 'blue' },
      '20': { text: '', color: 'blue' },
      '6 лет': { text: '', color: 'blue' },
      '7 лет': { text: '', color: 'blue' },
      '12 лет': { text: '', color: 'blue' },
      '14 лет': { text: '', color: 'blue' },
      '15-17': { text: '', color: 'blue' },
      '18-25': { text: '', color: 'blue' },
      '26-35': { text: '', color: 'blue' },
      '36-55': { text: '', color: 'blue' },
      '56-59': { text: '', color: 'blue' },
      '60+': { text: '', color: 'blue' },
    },
  },
  {
    name: 'Пневмококковая инфекция',
    schedule: {
      '2': { text: 'V1', color: 'green' },
      '4.5': { text: 'V2', color: 'green' },
      '15': { text: 'RV', color: 'green' },
    },
  },
  {
    name: 'Коклюш',
    schedule: {
      '3': { text: 'V1', color: 'green' },
      '4.5': { text: 'V2', color: 'green' },
      '6': { text: 'V3', color: 'green' },
      '18': { text: 'RV1', color: 'green' },
    },
  },
  {
    name: 'Дифтерия',
    schedule: {
      '3': { text: 'V1', color: 'green' },
      '4.5': { text: 'V2', color: 'green' },
      '6': { text: 'V3', color: 'green' },
      '18': { text: 'RV1', color: 'green' },
      '6 лет': { text: 'АДС-м RV2', color: 'green' },
      '7 лет': { text: 'АДС-м RV2', color: 'green' },
      '14 лет': { text: 'АДС-м RV3', color: 'green' },
      '18-25': {
        text: 'Каждые 10 лет\nc момента последней ревакцинации',
        color: 'green',
      },
      '26-35': { text: '-//-', color: 'green' },
      '36-55': { text: '-//-', color: 'green' },
      '56-59': { text: '-//-', color: 'green' },
      '60+': { text: '-//-', color: 'green' },
    },
  },
  {
    name: 'Столбняк',
    schedule: {
      '3': { text: 'V1', color: 'green' },
      '4.5': { text: 'V2', color: 'green' },
      '6': { text: 'V3', color: 'green' },
      '18': { text: 'RV1', color: 'green' },
      '6 лет': { text: 'АДС-м RV2', color: 'green' },
      '7 лет': { text: 'АДС-м RV2', color: 'green' },
      '14 лет': { text: 'АДС-м RV3', color: 'green' },
      '18-25': {
        text: 'Каждые 10 лет\nc момента последней ревакцинации',
        color: 'green',
      },
      '26-35': { text: '-//-', color: 'green' },
      '36-55': { text: '-//-', color: 'green' },
      '56-59': { text: '-//-', color: 'green' },
      '60+': { text: '-//-', color: 'green' },
    },
  },
  {
    name: 'Полиомиелит',
    schedule: {
      '3': { text: 'V1 ИПВ', color: 'green' },
      '4.5': { text: 'V2 ИПВ', color: 'green' },
      '6': { text: 'V3 ИПВ', color: 'green' },
      '18': { text: 'RV1 ИПВ', color: 'green' },
      '20': { text: 'RV2 ОПВ', color: 'green' },
      '6 лет': { text: 'RV3 ОПВ', color: 'green' },
    },
  },

  {
    name: 'Полиомиелит*',
    schedule: {
      '3': { text: 'V1 ИПВ', color: 'green' },
      '4.5': { text: 'V2 ИПВ', color: 'green' },
      '6': { text: 'V3 ИПВ', color: 'green' },
      '18': { text: 'RV1 ИПВ', color: 'green' },
      '20': { text: 'RV2 ИПВ', color: 'amber' },
      '6 лет': { text: 'RV3 ИПВ', color: 'amber' },
    },
  },
  {
    name: 'Гемофильная инфекция',
    schedule: {
      '3': { text: 'V1', color: 'green' },
      '4.5': { text: 'V2', color: 'green' },
      '6': { text: 'V3', color: 'green' },
      '18': { text: 'RV', color: 'green' },
    },
  },
  {
    name: 'Корь',
    schedule: {
      '12': { text: 'V1', color: 'green' },
      '15': { text: '', color: 'blue' },
      '18': { text: '', color: 'blue' },
      '20': { text: '', color: 'blue' },
      '6 лет': { text: 'RV', color: 'green' },
      '7 лет': { text: '', color: 'blue' },
      '12 лет': { text: '', color: 'blue' },
      '14 лет': { text: '', color: 'blue' },
      '15-17': { text: '', color: 'blue' },
      '18-25': { text: '', color: 'blue' },
      '26-35': { text: '', color: 'blue' },
      '36-55': { text: '', color: 'amber' },
    },
  },
  {
    name: 'Краснуха',
    schedule: {
      '12': { text: 'V1', color: 'green' },
      '15': { text: '', color: 'blue' },
      '18': { text: '', color: 'blue' },
      '20': { text: '', color: 'blue' },
      '6 лет': { text: 'RV', color: 'green' },
      '7 лет': { text: '', color: 'blue' },
      '12 лет': { text: '', color: 'blue' },
      '14 лет': { text: '', color: 'blue' },
      '15-17': { text: '', color: 'blue' },
      '18-25': { text: 'Женщины', color: 'blue' },
    },
  },
  {
    name: 'Эпидемический паротит',
    schedule: {
      '12': { text: 'V1', color: 'green' },
      '15': { text: '', color: 'blue' },
      '18': { text: '', color: 'blue' },
      '20': { text: '', color: 'blue' },
      '6 лет': { text: 'RV', color: 'green' },
    },
  },
  {
    name: 'Грипп',
    schedule: {
      '6': { text: 'Ежегодно', color: 'green' },
      '12': { text: 'Ежегодно', color: 'green' },
      '15': { text: 'Ежегодно', color: 'green' },
      '18': { text: 'Ежегодно', color: 'green' },
      '20': { text: 'Ежегодно', color: 'green' },
      '6 лет': { text: 'Ежегодно', color: 'green' },
      '7 лет': { text: 'Ежегодно', color: 'green' },
      '12 лет': { text: 'Ежегодно', color: 'green' },
      '14 лет': { text: 'Ежегодно', color: 'green' },
      '15-17': { text: 'Ежегодно', color: 'green' },
      '18-25': { text: '', color: 'amber' },
      '26-35': { text: '', color: 'amber' },
      '36-55': { text: '', color: 'amber' },
      '56-59': { text: '', color: 'amber' },
      '60+': { text: '  ', color: 'green' },
    },
  },
]

interface VacCalendarProps {
  childAgeInMonths?: number
}

export function getVaccinationInfo(childAgeInMonths?: number) {
  const getCurrentAgeIndex = (): number => {
    if (!childAgeInMonths) return -1

    // Return the index of the last completed vaccination period
    if (childAgeInMonths >= 720) return 19 // 60+
    if (childAgeInMonths >= 672) return 18 // 56-59
    if (childAgeInMonths >= 432) return 17 // 36-55
    if (childAgeInMonths >= 312) return 16 // 26-35
    if (childAgeInMonths >= 216) return 15 // 18-25
    if (childAgeInMonths >= 180) return 14 // 15-17
    if (childAgeInMonths >= 156) return 13 // 14 лет
    if (childAgeInMonths >= 96) return 12 // 12 лет
    if (childAgeInMonths >= 84) return 11 // 7 лет
    if (childAgeInMonths >= 72) return 10 // 6 лет
    if (childAgeInMonths >= 20) return 9 // 20 months
    if (childAgeInMonths >= 18) return 8 // 18 months
    if (childAgeInMonths >= 15) return 7 // 15 months
    if (childAgeInMonths >= 12) return 6 // 12 months
    if (childAgeInMonths >= 6) return 5 // 6 months
    if (childAgeInMonths >= 4.5) return 4 // 4.5 months
    if (childAgeInMonths >= 3) return 3 // 3 months
    if (childAgeInMonths >= 2) return 2 // 2 months
    if (childAgeInMonths >= 1) return 1 // 1 month
    return 0 // 0 months (newborn)
  }

  const formatAgeText = (age: string): string => {
    if (age.includes('лет')) return age
    const num = Number.parseFloat(age)
    if (num < 12) {
      return num === 1 ? '1 месяц' : `${age} месяцев`
    }
    return `${age} месяцев`
  }

  const currentAgeIndex = getCurrentAgeIndex()

  const getPreviousVaccinations = (): {
    age: string
    vaccines: string[]
  } | null => {
    if (currentAgeIndex === -1) return null

    const currentAge = AGES[currentAgeIndex]
    const vaccines: string[] = []

    VACCINATIONS.forEach((vac) => {
      if (vac.schedule[currentAge]) {
        vaccines.push(vac.name)
      }
    })

    return vaccines.length > 0
      ? { age: formatAgeText(currentAge), vaccines }
      : null
  }

  const getNextVaccinations = (): {
    age: string
    vaccines: string[]
  } | null => {
    if (currentAgeIndex === -1) {
      // If no age provided, show first vaccinations
      const vaccines: string[] = []
      VACCINATIONS.forEach((vac) => {
        if (vac.schedule[AGES[0]]) {
          vaccines.push(vac.name)
        }
      })
      return vaccines.length > 0
        ? { age: formatAgeText(AGES[0]), vaccines }
        : null
    }

    // Find next age with vaccinations
    for (let i = currentAgeIndex + 1; i < AGES.length; i++) {
      const nextAge = AGES[i]
      const vaccines: string[] = []

      VACCINATIONS.forEach((vac) => {
        if (vac.schedule[nextAge]) {
          vaccines.push(vac.name)
        }
      })

      if (vaccines.length > 0) {
        return { age: formatAgeText(nextAge), vaccines }
      }
    }

    return null
  }

  return {
    currentAgeIndex,
    previousVaccination: getPreviousVaccinations(),
    nextVaccination: getNextVaccinations(),
  }
}

export default function VacCalendar({ childAgeInMonths }: VacCalendarProps) {
  const { currentAgeIndex } = getVaccinationInfo(childAgeInMonths)

  const getAgeIndex = (age: string): number => {
    return AGES.indexOf(age)
  }

  const isAgeActive = (age: string): boolean => {
    if (currentAgeIndex === -1) return false
    return getAgeIndex(age) <= currentAgeIndex
  }

  const getColorClass = (color?: string): string => {
    switch (color) {
      case 'green':
        return 'bg-green-400'
      case 'blue':
        return 'bg-blue-400'
      case 'amber':
        return 'bg-amber-400'
      case 'orange':
        return 'bg-orange-400'
      default:
        return 'bg-green-400'
    }
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-neutral bg-base-200 shadow">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-base-100">
            <th className="border p-2 text-left font-semibold">Инфекция</th>
            {AGES.map((age) => (
              <th
                key={age}
                className={clsx(
                  'border p-2 text-center font-semibold text-xs',
                  isAgeActive(age) && 'bg-blue-500 text-base-200'
                )}
              >
                {age}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {VACCINATIONS.map((row) => (
            <tr key={row.name}>
              <td className="border p-2 font-medium">{row.name}</td>
              {AGES.map((age) => {
                const entry = row.schedule[age] as VaccinationEntry | undefined
                if (!entry) return <td key={age} className="border p-2" />

                const isActive = isAgeActive(age)

                return (
                  <td
                    key={`${row.name}-${age}`}
                    className={clsx(
                      'border p-2 text-center',
                      getColorClass(entry.color),
                      !isActive && 'opacity-30'
                    )}
                  >
                    <span className="whitespace-pre font-medium text-black text-xs">
                      {entry.text}
                    </span>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
