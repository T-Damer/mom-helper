import { useAtom } from 'jotai'
import { useCallback } from 'preact/hooks'
import childrenDataStore from 'atoms/childrenDataStore'
import Header from 'components/Header'
import ChildDetailsHeader from 'components/ChildDetailsHeader'
import Button from 'components/Button'
import Plus from 'components/Icons/Plus'
import navigate, { goMain } from 'helpers/navigate'
import getAge from 'helpers/getAge'
import DetailsCard from 'components/DetailsCard'
import Elevation from 'components/Icons/Elevation'
import Text from 'components/Text'
import Nutrition from 'components/Icons/Nutrition'

export default function ({ childId }: { childId: string }) {
  const [patientsData, setPatientsData] = useAtom(childrenDataStore)
  const currentChildrenIndex = patientsData.findIndex(
    ({ id }) => id === childId
  )

  const deleteEntry = useCallback(() => {
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
        <DetailsCard path="/development" id={childId}>
          <Elevation color="#1DC06E" />
          <Text>Развитие организма</Text>
        </DetailsCard>
        <DetailsCard path="/diet" id={childId}>
          <Nutrition />
          <Text>Питание</Text>
        </DetailsCard>
      </div>

      <Button onPress={() => navigate(`/diet/${childId}`)}>
        внести данные <Plus />
      </Button>
    </div>
  )
}
