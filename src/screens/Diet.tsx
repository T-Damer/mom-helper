import Button from 'components/Button'
import Header, { GoBackButton } from 'components/Header'
import Plus from 'components/Icons/Plus'
import navigate from 'helpers/navigate'

export default function () {
  return (
    <>
      <Header>
        <GoBackButton />
        Питание ребенка
      </Header>
      <div className="flex flex-col gap-y-2">
        <Button onPress={() => navigate('/loadingDiet')} semiTransparent>
          создать рацион <Plus />
        </Button>
        <Button onPress={() => navigate('/loadingDiet')}>
          сгенерировать рацион
        </Button>
      </div>
    </>
  )
}
