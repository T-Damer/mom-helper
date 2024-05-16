import { navigate } from 'wouter-preact/use-browser-location'
import { useAtom } from 'jotai'
import { useCallback } from 'preact/hooks'
import childrenDataStore from 'atoms/childrenDataStore'
import Header from 'components/Header'

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

    navigate('/mom-helper')
    setPatientsData((prev) => prev.splice(currentChildrenIndex))
  }, [currentChildrenIndex, setPatientsData])

  if (currentChildrenIndex < 0) {
    return <div>404</div>
  }

  return (
    <div className="flex flex-col gap-x-2">
      <Header />
      <span>Name: {name}</span>
    </div>
  )
}
