import { useAtomValue } from 'jotai'
import { useState } from 'preact/hooks'
import ChildCard from 'components/ChildCard'
import childrenDataStore from 'atoms/childrenDataStore'
import TextHeader from 'components/TextHeader'
import Button from 'components/Button'
import Plus from 'components/Icons/Plus'
import Input from 'components/Input'
import navigate from 'helpers/navigate'

export default function () {
  const patients = useAtomValue(childrenDataStore)
  const [search, setSearch] = useState('')

  return (
    <div className="flex flex-col gap-y-2">
      <TextHeader />
      <Input value={search} setValue={setSearch} placeholder="Поиск по имени" />
      {patients.reverse().map((child, index) => {
        if (!search || child.name.toLowerCase().includes(search.toLowerCase()))
          return <ChildCard {...child} key={index} />
      })}
      <Button onPress={() => navigate('/add')}>
        добавить ребенка <Plus />
      </Button>
    </div>
  )
}
