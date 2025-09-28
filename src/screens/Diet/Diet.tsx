import Button from 'components/Button'
import Header from 'components/Header'
import TextHeader from 'components/TextHeader'
import navigate from 'helpers/navigate'

export default function Diet({ childId }: { childId: string }) {
  return (
    <div className="flex flex-col gap-2">
      <Header withGoBack>Выберите тип вскармливания</Header>
      <Button onPress={() => navigate(`/diet/breast/${childId}`)}>
        Грудное вскармливание
      </Button>
      <Button disabled onPress={() => navigate(`/diet/artificial/${childId}`)}>
        Искусственное вскармливание
      </Button>
      <Button disabled onPress={() => navigate(`/diet/combined/${childId}`)}>
        Смешанное вскармливание
      </Button>
    </div>
  )
}
