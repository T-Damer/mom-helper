import Header, { GoBackButton } from 'components/Header'

export default function ({ childId }: { childId: string }) {
  console.log(childId)
  return (
    <>
      <Header>
        <GoBackButton />
        Прикорм
      </Header>
      <div className="flex flex-col gap-y-2"></div>
    </>
  )
}
