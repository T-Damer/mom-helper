import clsx from 'clsx'
import ArrowBack from 'components/Icons/ArrowBack'
import getAge from 'helpers/getAge'
import { useGoBack } from 'helpers/navigate'
import { JSX, PropsWithChildren } from 'preact/compat'

export const GoBackButton = () => {
  return (
    <div onClick={useGoBack} className="cursor-pointer p-1">
      <ArrowBack />
    </div>
  )
}

const Age = ({ birthDate }: { birthDate: string }) => {
  const { stringified } = getAge(birthDate)

  return (
    <>
      <div className="w-full" />
      <span className="shrink-0">{stringified}</span>
    </>
  )
}

export default function ({
  children,
  withGoBack = true,
  birthDate,
  rightItem,
}: PropsWithChildren & {
  withGoBack?: boolean
  birthDate?: string
  rightItem?: JSX.Element
}) {
  return (
    <div
      className={clsx(
        'my-4 flex h-12 w-full flex-row items-center gap-x-2 py-2 font-semibold text-md text-primaryDark',
        (birthDate || rightItem) && 'justify-between'
      )}
    >
      <div className="flex items-center gap-x-2">
        {withGoBack && <GoBackButton />}
        <div className="shrink-0">{children}</div>
      </div>
      {birthDate && <Age birthDate={birthDate} />}
      {rightItem}
    </div>
  )
}
