import { ChildData } from 'atoms/childrenDataStore'
import Card from 'components/Card'
import CircleButton from 'components/CircleButton'
import navigate from 'helpers/navigate'
import { useCallback } from 'preact/hooks'

export default function ({ id, name, birthDate }: ChildData) {
  const onPress = useCallback(() => {
    navigate(`/patient/${id}`)
  }, [id])

  return (
    <Card onPress={onPress}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="self-end p-2">
          <CircleButton />
        </div>
        <div className="flex flex-col px-2">
          <span className="truncate-2 font-bold text-2xl text-primary leading-snug">
            {name}
          </span>
          <span className="truncate-2 text-2xl text-primary leading-snug">
            {new Date(birthDate).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Card>
  )
}
