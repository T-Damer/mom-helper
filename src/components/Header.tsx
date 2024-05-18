import ArrowBack from 'components/Icons/ArrowBack'
import { PropsWithChildren } from 'preact/compat'
import { useGoBack } from 'helpers/navigate'

export const GoBackButton = () => {
  return (
    <div onClick={useGoBack} className="cursor-pointer p-1">
      <ArrowBack />
    </div>
  )
}

export default function ({ children = <GoBackButton /> }: PropsWithChildren) {
  return (
    <div className="text-md my-4 flex h-12 w-full flex-row items-center gap-x-2 py-2 font-semibold text-primaryDark">
      {children}
    </div>
  )
}
