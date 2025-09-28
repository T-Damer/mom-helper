import Cradle from 'components/Icons/Cradle'
import getAge from 'helpers/getAge'

export default function ({
  name,
  birthDate,
}: { name: string; birthDate: string }) {
  const { stringified } = getAge(birthDate)

  return (
    <div className="flex shrink-0 items-center justify-between text-primaryDark">
      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-primaryTransparent">
          <Cradle />
        </div>
        <div className="flex flex-col leading-5">
          <b>{name}</b>
          <span>{stringified}</span>
        </div>
      </div>
    </div>
  )
}
