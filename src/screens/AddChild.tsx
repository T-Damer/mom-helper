import childrenDataStore, { ChildData, Gender } from 'atoms/childrenDataStore'
import Button from 'components/Button'
import Header from 'components/Header'
import Input from 'components/Input'
import Select, { SelectOptions } from 'components/Select'
import TextHeader from 'components/TextHeader'
import { goMain } from 'helpers/navigate'
import { useSetAtom } from 'jotai'
import { useCallback, useState } from 'preact/hooks'
import { toast } from 'react-toastify'
import { navigate } from 'wouter-preact/use-browser-location'

const genderOptions = [
  { value: 'male', label: 'Мальчик' },
  { value: 'female', label: 'Девочка' },
]
const bornWeeksOptions = [
  { value: '>37', label: 'Более 37 недель' },
  { value: '33-36', label: '33-36 недель' },
  { value: '30-32', label: '30-32 недель' },
  { value: '27-29', label: '27-29 недель' },
  { value: '22-26', label: '22-26 недель' },
]

export default function () {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [mass, setMass] = useState('')
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState<SelectOptions>(genderOptions[0])
  const [bornWeeks, setBornWeeks] = useState<SelectOptions>(
    bornWeeksOptions[bornWeeksOptions.length - 1]
  )
  const setNewChild = useSetAtom(childrenDataStore)

  const invalid =
    !name || !gender.value || !birthDate || !mass || !height || !bornWeeks.value

  const addChild = useCallback(() => {
    if (invalid) {
      toast.error('Не все данные введены')
      return
    }

    setNewChild((prev) => [
      ...prev,
      {
        id: window.crypto.randomUUID(),
        name,
        gender: gender.value as Gender,
        birthDate,
        weightWhenBornGrams: Number(mass),
        heightWhenBornCentimeters: Number(height),
        whenBorn: bornWeeks.value,
      },
    ])

    goMain()
  }, [name, birthDate, mass, height, gender, bornWeeks])

  return (
    <div className="flex h-full flex-col gap-y-4">
      <Header />
      <TextHeader>Добавьте ребенка</TextHeader>
      <Input value={name} setValue={setName} legend="Имя ребенка" />
      <Select
        legend="Пол ребенка"
        options={genderOptions}
        setValue={setGender}
      />

      <Input
        value={birthDate}
        setValue={setBirthDate}
        legend="Дата рождения"
        placeholder="__.__.____"
        inputType="date"
      />
      <Input
        value={mass}
        setValue={setMass}
        legend="Масса при рождении"
        placeholder="Граммы"
        inputType="number"
      />
      <Input
        value={height}
        setValue={setHeight}
        legend="Рост при рождении"
        placeholder="Сантиметры"
        inputType="number"
      />
      <Select
        legend="Недели рождения"
        options={bornWeeksOptions}
        setValue={setBornWeeks}
      />

      <Button onPress={addChild} disabled={invalid}>
        Добавить
      </Button>
    </div>
  )
}
