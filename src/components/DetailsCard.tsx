import Card from 'components/Card'
import navigate from 'helpers/navigate'
import { PropsWithChildren } from 'preact/compat'

export default function ({
  path,
  id,
  children,
}: { path: string; id: string } & PropsWithChildren) {
  return (
    <Card onPress={() => navigate(path + '/' + id)}>
      <div className="flex h-32 flex-col gap-y-3 p-2">{children}</div>
    </Card>
  )
}
