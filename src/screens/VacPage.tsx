import childrenDataStore from 'atoms/childrenDataStore'
import Header, { GoBackButton } from 'components/Header'
import VacTable from 'components/VacCalendar/VacTable'
import calculateCompletedVacs from 'helpers/vacCalendar/calculateCompletedVacs'
import { useAtom } from 'jotai'

export default function ({ childId }: { childId: string }) {
  const [patientsData] = useAtom(childrenDataStore)

  const currentChildren = patientsData.find(({ id }) => id === childId)

  const birthDate = currentChildren?.birthDate
    ? Number(new Date(currentChildren?.birthDate))
    : 0
  const { completedPercent } = calculateCompletedVacs(birthDate)

  return (
    <>
      <Header>Календарь вакцинации</Header>
      <VacTable completedPercent={completedPercent} />
    </>
  )
}
