import { HTMLProps, PropsWithChildren } from 'preact/compat'
import OnPress from 'types/OnPress'

interface ButtonProps extends OnPress, HTMLProps<HTMLDivElement> {
  semiTransparent?: boolean
}

export default function ({
  children,
  onPress,
  semiTransparent,
  ...props
}: ButtonProps) {
  const bg = semiTransparent
    ? 'bg-primaryTransparent hover:bg-primary '
    : 'bg-primary hover:bg-primaryDark'
  const textColor = semiTransparent
    ? 'text-primary hover:text-white'
    : 'text-commonWhite'

  return (
    <div
      {...props}
      className={`btn h-16 rounded-3xl border-none shadow-none disabled:opacity-50 ${bg} ${textColor}`}
      onClick={onPress}
    >
      {children}
    </div>
  )
}
