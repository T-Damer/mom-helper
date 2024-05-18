import { PropsWithChildren } from 'preact/compat'

interface CardProps extends PropsWithChildren {
  onPress?: () => void
}

export default function ({ children, onPress }: CardProps) {
  const minWidth = 'min-w-36'
  const justify = 'justify-start'
  const bgHover = 'hover:bg-base-100'
  const border =
    'border-2 border-solid border-primaryDarkTransparent hover:border-primary'

  return (
    <div
      className={`flex flex-1 bg-white ${bgHover} ${minWidth} ${justify} ${border} align-center cursor-pointer rounded-3xl p-3 transition-all`}
      onClick={onPress}
    >
      {children}
    </div>
  )
}
