import weaning from 'assets/weaning.png'
import Header, { GoBackButton } from 'components/Header'

export default function ({ childId }: { childId: string }) {
  console.log(childId)
  return (
    <>
      <Header>
        <GoBackButton />
        Прикорм
      </Header>

      <img src={weaning} />
    </>
  )
}
