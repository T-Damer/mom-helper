import { PropsWithChildren } from 'preact/compat'

export function Header2({
  children,
  ...other
}: PropsWithChildren & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...other} className="font-semibold text-lg">
      {children}
    </span>
  )
}

export default function ({
  children,
  ...other
}: PropsWithChildren & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...other} className="text-primaryDark">
      {children}
    </span>
  )
}
