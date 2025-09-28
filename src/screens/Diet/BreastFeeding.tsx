import diet from 'assets/diet.png'
import childrenDataStore from 'atoms/childrenDataStore'
import Header, { GoBackButton } from 'components/Header'
import Input from 'components/Input'
import Text from 'components/Text'
import getAge from 'helpers/getAge'
import { useAtomValue } from 'jotai'
import { useState } from 'preact/hooks'

const maxVolumePerMonth: Record<number, number> = {
  3: 850,
  4: 900,
  5: 1000,
  6: 1000,
  7: 1000,
  8: 1000,
  9: 1000,
  10: 1000,
  11: 1000,
  12: 1000,
}

const kcalPerAgeDays: Record<number, number> = {
  0: 40,
  1: 40,
  2: 40,
  3: 50,
  4: 60,
  5: 80,
  6: 80,
  7: 90,
  8: 90,
  9: 90,
  10: 110,
  11: 110,
  12: 110,
  14: 120,
  15: 120,
}
const kcalPerAgeMonth: Record<number, number> = {
  0: 120,
  1: 120,
  2: 120,
  3: 115,
  4: 115,
  5: 115,
  6: 115,
  7: 110,
  8: 110,
  9: 110,
  10: 110,
  11: 110,
  12: 110,
}

const numberOfFeedingsPerMonth: Record<number, number> = {
  0: 10,
  1: 8,
  2: 8,
  3: 7,
  4: 7,
  5: 6,
  6: 6,
  7: 6,
  8: 6,
  9: 5,
  10: 5,
  11: 5,
  12: 5,
}
const kcalBreastMilk = 70 // per 100ml
const ceil = (num: number) => Math.ceil(num * 100) / 100

export default function BreastFeeding({ childId }: { childId: string }) {
  const [weight, setWeight] = useState('0')
  const child = useAtomValue(childrenDataStore).find(({ id }) => id === childId)

  if (!child) {
    return <div>Данные ребенка не найдены</div>
  }

  const { months, days } = getAge(child.birthDate)
  const weightKg = Number(weight) / 1000
  const kcalPerDay =
    days < 16
      ? kcalPerAgeDays[days] * weightKg
      : kcalPerAgeMonth[months] * weightKg
  const kcalPerFeed = kcalPerDay / numberOfFeedingsPerMonth[months]
  const numberOfFeedings = numberOfFeedingsPerMonth[months]
  const volumeRaw = (kcalPerFeed / kcalBreastMilk) * 100
  const volume =
    volumeRaw > maxVolumePerMonth[months]
      ? maxVolumePerMonth[months]
      : volumeRaw

  return (
    <>
      <Header birthDate={child.birthDate}>Грудное вскармливание</Header>

      <div className="flex flex-col gap-y-2">
        <Input
          value={weight}
          setValue={(val) => setWeight(val)}
          placeholder="Граммы"
          legend="Вес ребенка на данный момент (грамм)"
          inputType="number"
        />
        <Text>Калорийность в сутки: {ceil(kcalPerDay)} ккал</Text>
        <Text>Калорийность на прием: {ceil(kcalPerFeed)} ккал</Text>
        <Text>Количество приемов: {ceil(numberOfFeedings)} раз</Text>
        <Text>Объем на прием: {ceil(volume)} мл</Text>
        {/* <img src={diet} /> */}
      </div>
    </>
  )
}
