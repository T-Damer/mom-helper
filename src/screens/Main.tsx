import { useAtomValue } from 'jotai'
import { useAutoAnimate } from '@formkit/auto-animate/preact'
import { useState } from 'preact/hooks'
import CreatePatientCard from 'components/CreatePatientCard'
import CrossIcon from 'components/Icons/CrossIcon'
import PatientCard from 'components/PatientCard'
import SearchIcon from 'components/Icons/SearchIcon'
import childrenDataStore from 'atoms/childrenDataStore'

export default function () {
  const patients = useAtomValue(childrenDataStore)
  const [parentRef] = useAutoAnimate()
  const [search, setSearch] = useState('')

  return (
    <div>
      <h1>👩‍🚀 Mom helper</h1>
      <label className="input input-bordered m-1 flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        {search ? <CrossIcon onPress={() => setSearch('')} /> : <SearchIcon />}
      </label>
      <div className="flex flex-wrap" ref={parentRef}>
        <CreatePatientCard />
        {patients.reverse().map((child, index) => {
          if (
            !search ||
            child.name.toLowerCase().includes(search.toLowerCase())
          )
            return <PatientCard {...child} key={index} />
        })}
      </div>
    </div>
  )
}
