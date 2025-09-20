import Header from 'components/Header'
import TextHeader from 'components/TextHeader'

export default function ({ childId }: { childId: string }) {
  console.log(childId)

  return (
    <>
      <Header />
      <TextHeader>Развитие организма</TextHeader>
    </>
  )
}
