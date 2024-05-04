import { PropsWithChildren } from 'preact/compat'

interface CardProps extends PropsWithChildren {
  dashedOutline?: boolean
  onPress?: () => void
}

export default function ({ children, dashedOutline, onPress }: CardProps) {
  const outline = dashedOutline ? 'border-dashed' : 'border-solid'
  const minWidth = dashedOutline ? '' : 'min-w-36'
  const justify = dashedOutline ? 'justify-center' : 'justify-start'
  const bgHover = dashedOutline ? 'opacity-100' : 'hover:bg-opacity-70'

  return (
    <div
      className={`flex-1 ${bgHover} ${minWidth} ${justify} h-40 border-2 shadow-md ${outline} align-center m-1 flex cursor-pointer rounded-box p-3 transition-all`}
      onClick={onPress}
    >
      {children}
    </div>
  )
}
