import calendar from './calendar.png'

export default function ({ completedPercent }: { completedPercent: number }) {
  return (
    <div className="relative">
      <div
        className="absolute top-[19.5%] right-0 z-10 h-[57.5%] border border-l-red-600"
        style={{
          width: `${100 - completedPercent}%`,
          webkitBackdropFilter: 'grayscale(1)',
          backdropFilter: 'grayscale(1)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <img src={calendar} className="relative z-1" />
    </div>
  )
}
