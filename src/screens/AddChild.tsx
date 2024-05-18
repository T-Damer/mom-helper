import childrenDataStore, { ChildData } from 'atoms/childrenDataStore'
import Button from 'components/Button'
import Header from 'components/Header'
import Input from 'components/Input'
import TextHeader from 'components/TextHeader'
import { goMain } from 'helpers/navigate'
import { useSetAtom } from 'jotai'
import { useCallback, useState } from 'preact/hooks'
import { navigate } from 'wouter-preact/use-browser-location'

export default function () {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [mass, setMass] = useState('')
  const [height, setHeight] = useState('')
  const setNewChild = useSetAtom(childrenDataStore)

  const addChild = useCallback(() => {
    setNewChild((prev) => [
      ...prev,
      new ChildData(name, birthDate, Number(mass), Number(height)),
    ])

    goMain()
  }, [name, birthDate, mass, height])

  return (
    <div className="flex h-full flex-col gap-y-4">
      <Header />
      <TextHeader text="Добавьте ребенка" />
      <Input value={name} setValue={setName} />
      <Input
        value={birthDate}
        setValue={setBirthDate}
        placeholder="Дата рождения"
        inputType="date"
      />
      <Input
        value={mass}
        setValue={setMass}
        placeholder="Масса тела, кг"
        inputType="number"
      />
      <Input
        value={height}
        setValue={setHeight}
        placeholder="Рост, см"
        inputType="number"
      />

      <Button onPress={addChild}>Добавить</Button>
    </div>
  )
}
