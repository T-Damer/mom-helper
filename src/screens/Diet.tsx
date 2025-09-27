import diet from 'assets/diet.png'
import Header, { GoBackButton } from 'components/Header'

export default function ({ childId }: { childId: string }) {
  console.log(childId)
  return (
    <>
      <Header>
        <GoBackButton />
        Питание ребенка
      </Header>
      <div className="flex flex-col gap-y-2">
        <img src={diet} />
      </div>
    </>
  )
}
