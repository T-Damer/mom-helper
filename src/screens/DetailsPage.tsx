import childrenDataStore from 'atoms/childrenDataStore'
import Button from 'components/Button'
import ChildDetailsHeader from 'components/ChildDetailsHeader'
import DetailsCard from 'components/DetailsCard'
import Header from 'components/Header'
import Elevation from 'components/Icons/Elevation'
import HumanMagnified from 'components/Icons/HumanMagnified'
import Nutrition from 'components/Icons/Nutrition'
import Plus from 'components/Icons/Plus'
import Syringe from 'components/Icons/Syringe'
import Text from 'components/Text'
import getAge from 'helpers/getAge'
import navigate, { goMain } from 'helpers/navigate'
import { useAtom } from 'jotai'
import { useCallback } from 'preact/hooks'

export default function ({ childId }: { childId: string }) {
  const [patientsData, setPatientsData] = useAtom(childrenDataStore)
  const currentChildrenIndex = patientsData.findIndex(
    ({ id }) => id === childId
  )

  const _deleteEntry = useCallback(() => {
    if (currentChildrenIndex < 0) {
      console.error('cant find the patient while deleting')
      return
    }

    goMain()
    setPatientsData((prev) => prev.splice(currentChildrenIndex))
  }, [currentChildrenIndex, setPatientsData])

  if (currentChildrenIndex < 0) {
    return <div>404</div>
  }

  const { name, birthDate } = patientsData[currentChildrenIndex]
  const { years, months } = getAge(birthDate)

  return (
    <div className="flex h-full flex-col gap-x-2">
      <Header>
        <ChildDetailsHeader name={name} age={`${years} лет, ${months} мес`} />
      </Header>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <DetailsCard path="/vac" id={childId}>
          <Syringe color="#4B64EC" />
          <Text>Календарь вакцинации</Text>
        </DetailsCard>
        <DetailsCard path="/development" id={childId}>
          <Elevation color="#1DC06E" />
          <Text>Календарь прикормов</Text>
        </DetailsCard>
        <DetailsCard path="/specialists" id={childId}>
          <HumanMagnified color="#DFC641" />
          <Text>Календарь посещения специалистов</Text>
        </DetailsCard>
        <DetailsCard path="/diet" id={childId}>
          <Nutrition />
          <Text>Расчет питания</Text>
        </DetailsCard>
      </div>

      <Button onPress={() => navigate(`/diet/${childId}`)}>
        Внести данные <Plus />
      </Button>
    </div>
  )
}
