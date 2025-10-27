import childrenDataStore from 'atoms/childrenDataStore'
import Header, { GoBackButton } from 'components/Header'
import VacCalendar from 'components/VacCalendar/VacCalendar'
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

  return (
    <>
      <Header>Календарь вакцинации</Header>
      <VacCalendar childAgeInMonths={years * 12 + months} />
    </>
  )
}
