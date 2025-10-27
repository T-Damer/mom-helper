interface VacCalendarInfoProps {
  previousVaccination?: {
    age: string
    vaccines: string[]
  } | null
  nextVaccination?: {
    age: string
    vaccines: string[]
  } | null
}

export default function VacCalendarInfo({
  previousVaccination,
  nextVaccination,
}: VacCalendarInfoProps) {
  if (!previousVaccination && !nextVaccination) {
    return null
  }

  return (
    <div className="space-y-3">
      {previousVaccination && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-gray-700 text-sm">
            В <span className="font-semibold">{previousVaccination.age}</span> вы
            должны вакцинироваться от:{' '}
            <span className="font-semibold">
              {previousVaccination.vaccines.join(', ')}
            </span>
          </p>
        </div>
      )}

      {nextVaccination && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <p className="text-gray-700 text-sm">
            В <span className="font-semibold">{nextVaccination.age}</span>{' '}
            предстоит вакцинироваться от:{' '}
            <span className="font-semibold">
              {nextVaccination.vaccines.join(', ')}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
