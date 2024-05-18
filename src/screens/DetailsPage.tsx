import { useAtom } from 'jotai'
import { useCallback } from 'preact/hooks'
import childrenDataStore from 'atoms/childrenDataStore'
import Header from 'components/Header'
import ChildDetailsHeader from 'components/ChildDetailsHeader'
import Button from 'components/Button'
import Plus from 'components/Icons/Plus'
import navigate, { goMain } from 'helpers/navigate'

export default function ({ name }: { name: string }) {
  const [patientsData, setPatientsData] = useAtom(childrenDataStore)
  const currentChildrenIndex = patientsData.findIndex(
    ({ name }) => name === name
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

  return (
    <div className="flex flex-col gap-x-2">
      <Header>
        <ChildDetailsHeader name={name} age={'123'} />
      </Header>

      <Button onPress={() => navigate('/diet')}>
        внести данные <Plus />
      </Button>
    </div>
  )
}
