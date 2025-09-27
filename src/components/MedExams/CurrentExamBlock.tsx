import { Header2 } from 'components/Text'
import { MedicalData } from './ExamsTable'

export default function CurrentExamBlock({
  currentAgeString,
  medicalData,
}: {
  currentAgeString: string
  medicalData: MedicalData
}) {
  const getCurrentSpecialists = () => {
    return medicalData.filter(
      (specialist) => specialist.checks[currentAgeString]
    )
  }

  const currentSpecialists = getCurrentSpecialists()
  return (
    <div className="mb-6 flex flex-col gap-2 rounded-lg border border-base-content bg-base-100 p-4">
      <Header2>Текущие осмотры</Header2>
      <div className="flex flex-wrap gap-2">
        {currentSpecialists.length > 0 ? (
          currentSpecialists.map((specialist, index) => (
            <span
              key={index}
              className={`rounded-full px-3 py-1 font-medium text-sm ${specialist.color} text-white`}
            >
              {specialist.specialty}
            </span>
          ))
        ) : (
          <p className="text-base-content">
            Нет запланированных осмотров для данного возраста
          </p>
        )}
      </div>
    </div>
  )
}
