import { ChildData } from 'atoms/childrenDataStore'
import { navigate } from 'wouter-preact/use-browser-location'
import { useCallback } from 'preact/hooks'
import Card from 'components/Card'

export default function ({ name, birthDate }: ChildData) {
  const onPress = useCallback(() => {
    navigate(`/mom-helper/patient/${name}`)
  }, [name])

  return (
    <Card onPress={onPress}>
      <div className="flex flex-col justify-center">
        <span className="truncate-2 font-bold leading-snug">{name}</span>
        <span>{new Date(birthDate).toLocaleDateString()}</span>
      </div>
    </Card>
  )
}
