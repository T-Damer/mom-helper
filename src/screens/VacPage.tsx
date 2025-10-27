import childrenDataStore from 'atoms/childrenDataStore'
import Header from 'components/Header'
import VacCalendar, {
  getVaccinationInfo,
} from 'components/VacCalendar/VacCalendar'
import VacCalendarInfo from 'components/VacCalendar/VacCalendarInfo'
import VacCalendarLegend from 'components/VacCalendar/VacCalendarLegend'
import getAge from 'helpers/getAge'
import { useAtom } from 'jotai'

export default function ({ childId }: { childId: string }) {
  const [patientsData] = useAtom(childrenDataStore)

  const currentChildren = patientsData.find(({ id }) => id === childId)

  if (!currentChildren?.birthDate) {
    return <div>Данные ребенка не найдены</div>
  }

  const birthDate = currentChildren?.birthDate
  const { years, months } = getAge(birthDate)
  const childAgeInMonths = years * 12 + months

  const { previousVaccination, nextVaccination } =
    getVaccinationInfo(childAgeInMonths)

  return (
    <>
      <Header>Календарь вакцинации</Header>
      <div className="space-y-4">
        <VacCalendarInfo
          previousVaccination={previousVaccination}
          nextVaccination={nextVaccination}
        />
        <VacCalendar childAgeInMonths={childAgeInMonths} />
        <VacCalendarLegend />
      </div>
    </>
  )
}
