import Cradle from 'components/Icons/Cradle'
import getAge from 'helpers/getAge'

export default function ({
  name,
  birthDate,
}: { name: string; birthDate: string }) {
  const { years, months, weeks, days } = getAge(birthDate)

  const age =
    years > 0 ? `${years} лет, ${months} мес` : `${weeks} нед, ${days} дн`

  return (
    <div className="flex shrink-0 items-center justify-between text-primaryDark">
      <div className="flex items-center gap-x-2">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-primaryTransparent transition-colors hover:text-neutral-content">
          <Cradle />
        </div>
        <div className="flex flex-col leading-5">
          <b>{name}</b>
          <span>{age}</span>
        </div>
      </div>
    </div>
  )
}
