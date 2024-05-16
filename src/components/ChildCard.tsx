import { ChildData } from 'atoms/childrenDataStore'
import { navigate } from 'wouter-preact/use-browser-location'
import { useCallback } from 'preact/hooks'
import Card from 'components/Card'
import CircleButton from 'components/CircleButton'

export default function ({ name }: ChildData) {
  const onPress = useCallback(() => {
    navigate(`/mom-helper/patient/${name}`)
  }, [name])

  return (
    <Card onPress={onPress}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="self-end p-2">
          <CircleButton />
        </div>
        <span className="truncate-2 text-primaryDark p-2 text-2xl leading-snug">
          {name}
        </span>
      </div>
    </Card>
  )
}
