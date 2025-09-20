import { PropsWithChildren } from 'preact/compat'

export default function ({ children = 'Выберите ребенка' }: PropsWithChildren) {
  return <h1 className="font-medium text-3xl text-primaryDark">{children}</h1>
}
