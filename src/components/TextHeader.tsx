import { PropsWithChildren } from 'preact/compat'

export default function ({ children = 'Выберите ребенка' }: PropsWithChildren) {
  return <h1 className="text-3xl font-medium text-primaryDark">{children}</h1>
}
