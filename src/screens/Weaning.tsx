import weaning from 'assets/weaning.png'
import childrenDataStore from 'atoms/childrenDataStore'
import Header from 'components/Header'
import WeaningTable from 'components/WeaningTable'
import { useAtomValue } from 'jotai'

export default function Weaning({ childId }: { childId: string }) {
  const child = useAtomValue(childrenDataStore).find(
    (child) => child.id === childId
  )

  if (!child) return <div>Данные ребенка не найдены</div>

  return (
    <>
      <Header birthDate={child.birthDate}>Прикорм</Header>

      <WeaningTable birthDate={child.birthDate} />
      <div className="mt-2 flex flex-col gap-1 text-xs">
        <span>* - без добавления растительного сырья</span>
        <span>** - не в качестве первого прикорма</span>
        <span>*** - по показаниям с 6 месяцев</span>
        <span>**** - добавляется к овощному пюре</span>
        <span>***** - добавляется к каше</span>
      </div>
    </>
  )
}
