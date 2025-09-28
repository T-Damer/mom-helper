import ArrowBack from 'components/Icons/ArrowBack'
import getAge from 'helpers/getAge'
import { useGoBack } from 'helpers/navigate'
import { PropsWithChildren } from 'preact/compat'

export const GoBackButton = () => {
  return (
    <div onClick={useGoBack} className="cursor-pointer p-1">
      <ArrowBack />
    </div>
  )
}

const Age = ({ birthDate }: { birthDate: string }) => {
  const { years, months, weeks, days } = getAge(birthDate)

  const toDisplay = []

  if (years > 0) {
    toDisplay.push(`${years} лет`)
  }

  if (months > 0) {
    toDisplay.push(`${months} мес`)
  }

  if (weeks > 0) {
    toDisplay.push(`${weeks} нед`)
  }

  if (days > 0) {
    toDisplay.push(`${days} дн`)
  }

  const age = toDisplay.join(', ')

  return (
    <>
      <div className="w-full" />
      <span className="shrink-0">{age}</span>
    </>
  )
}

export default function ({
  children = <GoBackButton />,
  withGoBack = true,
  birthDate,
}: PropsWithChildren & { withGoBack?: boolean; birthDate?: string }) {
  return (
    <div className="my-4 flex h-12 w-full flex-row items-center gap-x-2 py-2 font-semibold text-md text-primaryDark">
      {withGoBack && <GoBackButton />}
      <div className="shrink-0">{children}</div>
      {birthDate && <Age birthDate={birthDate} />}
    </div>
  )
}
