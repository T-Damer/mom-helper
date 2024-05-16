import { navigate } from 'wouter-preact/use-browser-location'
import ArrowBack from 'components/Icons/ArrowBack'

export default function () {
  return (
    <div className="my-4 flex h-12 w-full flex-row py-2">
      <div
        onClick={() => navigate('/mom-helper')}
        className="cursor-pointer p-1"
      >
        <ArrowBack />
      </div>
    </div>
  )
}
