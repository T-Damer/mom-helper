import Cradle from 'components/Icons/Cradle'

export default function ({ name, age }: { name: string; age: string }) {
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
