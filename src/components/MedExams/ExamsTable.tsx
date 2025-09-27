import { calculateAgeInMonths, getAgeString } from 'helpers/getAgeSpecialists'
import CheckDot from './CheckDot'
import CurrentExamBlock from './CurrentExamBlock'

// Helper function to convert age string to months
const ageStringToMonths = (ageString: string): number => {
  if (ageString === '<1 мес') return 0

  // Handle months (e.g., "1 мес", "11 мес")
  if (ageString.includes('мес') && !ageString.includes('год')) {
    const months = parseInt(ageString.replace(' мес', ''))
    return months
  }

  // Handle years with months (e.g., "1 год 3 мес", "1 год 6 мес")
  if (ageString.includes('год') && ageString.includes('мес')) {
    const parts = ageString.split(' ')
    const years = parseInt(parts[0])
    const months = parseInt(parts[3])
    return years * 12 + months
  }

  // Handle years only (e.g., "1 год", "3 года")
  if (ageString.includes('год')) {
    const years = parseInt(ageString.replace(' год', '').replace(' года', ''))
    return years * 12
  }

  // Handle years in "лет" format (e.g., "5 лет", "17 лет")
  if (ageString.includes('лет')) {
    const years = parseInt(ageString.replace(' лет', ''))
    return years * 12
  }

  return 0
}

const ages = [
  '<1 мес',
  '1 мес',
  '2 мес',
  '3 мес',
  '4 мес',
  '5 мес',
  '6 мес',
  '7 мес',
  '8 мес',
  '9 мес',
  '10 мес',
  '11 мес',
  '12 мес',
  '1 год',
  '1 год 3 мес',
  '1 год 6 мес',
  '2 год',
  '3 год',
  '4 год',
  '5 лет',
  '6 лет',
  '7 лет',
  '8 лет',
  '9 лет',
  '10 лет',
  '11 лет',
  '12 лет',
  '13 лет',
  '14 лет',
  '15 лет',
  '16 лет',
  '17 лет',
]

export type MedicalData = {
  specialty: string
  checks: Record<string, boolean>
  color: string
  gender?: 'male' | 'female'
}[]

const MEDICAL_DATA: MedicalData = [
  {
    specialty: 'Педиатр',
    checks: ages.reduce(
      (acc, age) => {
        acc[age] = true
        return acc
      },
      {} as Record<string, boolean>
    ),
    color: 'bg-orange-500',
  },
  {
    specialty: 'Невролог',
    checks: {
      '1 мес': true,
      '1 год': true,
      '3 года': true,
      '7 лет': true,
      '10 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-green-600',
  },
  {
    specialty: 'Офтальмолог',
    checks: {
      '1 мес': true,
      '1 год': true,
      '3 года': true,
      '7 лет': true,
      '10 лет': true,
      '13 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-yellow-400',
  },
  {
    specialty: 'Детский хирурги',
    checks: {
      '1 мес': true,
      '1 год': true,
      '3 года': true,
      '7 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-red-500',
  },
  {
    specialty: 'Детский стоматолог',
    checks: {
      '1 мес': true,
      '1 год': true,
      '1 год 6 мес': true,
      '3 года': true,
      '4 года': true,
      '5 лет': true,
      '6 лет': true,
      '7 лет': true,
      '8 лет': true,
      '9 лет': true,
      '10 лет': true,
      '11 лет': true,
      '12 лет': true,
      '13 лет': true,
      '14 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-blue-500',
  },
  {
    specialty: 'Детский уролог-андролог (мальчики)',
    gender: 'male',
    checks: {
      '3 года': true,
      '6 лет': true,
      '11 лет': true,
      '14 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-purple-900',
  },
  {
    specialty: 'Детский гинеколог (девочки)',
    gender: 'female',
    checks: {
      '3 года': true,
      '6 лет': true,
      '11 лет': true,
      '14 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-pink-500',
  },
  {
    specialty: 'Травматолог-ортопед',
    checks: {
      '3 мес': true,
      '1 год': true,
      '2 года': true,
      '3 года': true,
      '4 года': true,
      '6 лет': true,
      '10 лет': true,
      '14 лет': true,
      '17 лет': true,
    },
    color: 'bg-purple-600',
  },
  {
    specialty: 'Отоларинголог (ЛОР)',
    checks: {
      '1 год': true,
      '3 года': true,
      '6 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-blue-800',
  },
  {
    specialty: 'Неонатальный скрининг',
    checks: {
      '<1 мес': true,
    },
    color: 'bg-green-500',
  },
  {
    specialty: 'Аудиологический скрининг',
    checks: {
      '<1 мес': true,
    },
    color: 'bg-purple-900',
  },
  {
    specialty: 'Эндокринолог',
    checks: {
      '6 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-orange-500',
  },
  {
    specialty: 'Психиатр',
    checks: {
      '1 год 6 мес': true,
      '6 лет': true,
      '13 лет': true,
      '14 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-orange-500',
  },
  {
    specialty: 'Общий анализ крови',
    checks: {
      '2 мес': true,
      '1 год': true,
      '3 года': true,
      '6 лет': true,
      '7 лет': true,
      '10 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-red-500',
  },
  {
    specialty: 'Общий анализ мочи',
    checks: {
      '2 мес': true,
      '1 год': true,
      '3 года': true,
      '6 лет': true,
      '7 лет': true,
      '10 лет': true,
      '15 лет': true,
      '16 лет': true,
      '17 лет': true,
    },
    color: 'bg-yellow-700',
  },
  {
    specialty: 'ЭКГ',
    checks: {
      '1 год': true,
      '6 лет': true,
      '15 лет': true,
      '17 лет': true,
    },
    color: 'bg-red-800',
  },
  {
    specialty: 'УЗИ органов брюшной полости',
    checks: {
      '1 мес': true,
      '6 лет': true,
      '15 лет': true,
    },
    color: 'bg-amber-300',
  },
  {
    specialty: 'УЗИ почек',
    checks: {
      '1 мес': true,
      '6 лет': true,
    },
    color: 'bg-amber-300',
  },
  {
    specialty: 'УЗИ тазобедренных суставов',
    checks: {
      '1 мес': true,
    },
    color: 'bg-velvet-500',
  },
  {
    specialty: 'Нейросонография',
    checks: {
      '1 мес': true,
      '6 лет': true,
    },
    color: 'bg-pink-300',
  },
  {
    specialty: 'Эхокардиография',
    checks: {
      '1 мес': true,
      '6 лет': true,
    },
    color: 'bg-green-300',
  },
]

export default function ExamsTable({
  birthDate,
}: { birthDate: string | Date }) {
  const months = calculateAgeInMonths(birthDate)
  const currentAgeString = getAgeString(months)

  return (
    <div className="flex flex-col gap-2">
      <CurrentExamBlock
        medicalData={MEDICAL_DATA}
        currentAgeString={currentAgeString}
      />
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr className="bg-base-300 text-base-content">
              <th className="border p-2 text-left font-semibold">
                <p>Специалисты и</p>
                <p>Исследования</p>
              </th>
              {ages.map((age) => (
                <th
                  key={age}
                  className={`border p-2 text-center text-xs ${age === currentAgeString ? 'bg-neutral font-bold' : ''}`}
                >
                  {age}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MEDICAL_DATA.map((row, index) => (
              <tr key={index}>
                <td className="border p-2 font-medium">{row.specialty}</td>
                {ages.map((age) => {
                  const ageInMonths = ageStringToMonths(age)
                  const isCompleted = ageInMonths < months
                  const isCurrent = age === currentAgeString

                  return (
                    <td key={`${row.specialty}-${age}`} className="border p-2">
                      {row.checks[age] && (
                        <CheckDot
                          color={row.color}
                          isActive={isCurrent}
                          isCompleted={isCompleted}
                        />
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
