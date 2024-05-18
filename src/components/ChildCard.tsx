import { ChildData } from 'atoms/childrenDataStore'
import CircleButton from 'components/CircleButton'
import navigate from 'helpers/navigate'
import { useCallback } from 'preact/hooks'
import Card from 'components/Card'

export default function ({ id, name }: ChildData) {
  const onPress = useCallback(() => {
    navigate(`/patient/${id}`)
  }, [id])

  return (
    <Card onPress={onPress}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="self-end p-2">
          <CircleButton />
        </div>
        <span className="truncate-2 p-2 text-2xl leading-snug text-primaryDark">
          {name}
        </span>
      </div>
    </Card>
  )
}
