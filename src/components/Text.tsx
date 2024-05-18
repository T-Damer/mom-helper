import { PropsWithChildren } from 'preact/compat'

export default function ({ children }: PropsWithChildren) {
  return <span className="text-primaryDark">{children}</span>
}
