import { PropsWithChildren } from 'preact/compat'
import { JSX } from 'preact/jsx-runtime'

interface TableProps extends PropsWithChildren {
  head: JSX.Element[]
}

export default function Table({ head, children }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table-zebra table">
        <thead>{head}</thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
