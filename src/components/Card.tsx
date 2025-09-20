import { PropsWithChildren } from 'preact/compat'

interface CardProps extends PropsWithChildren {
  onPress?: () => void
}

export default function ({ children, onPress }: CardProps) {
  const minWidth = 'min-w-36'
  const justify = 'justify-start'
  const bgHover = 'hover:bg-base-300'
  const border = 'border-2 border-solid border-neutral hover:border-primary'

  return (
    <div
      className={`flex flex-1 ${bgHover} ${minWidth} ${justify} ${border} cursor-pointer rounded-3xl p-3 align-center transition-all`}
      onClick={onPress}
    >
      {children}
    </div>
  )
}
