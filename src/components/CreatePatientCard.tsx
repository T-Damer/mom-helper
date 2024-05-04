import { useAtom } from 'jotai'
import { useCallback, useMemo, useRef, useState } from 'preact/hooks'
import CalendarIcon from 'components/Icons/CalendarIcon'
import Card from 'components/Card'
import HumanIcon from 'components/Icons/HumanIcon'
import childrenDataStore, { ChildData } from 'atoms/childrenDataStore'

function AddPatientForm() {
  const dateInputRef = useRef<HTMLInputElement | null>(null)
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [patientsData, setPatientsData] = useAtom(childrenDataStore)

  const clearData = useCallback(() => {
    setFullName('')
    setBirthDate('')
  }, [])

  const onSubmit = useCallback(() => {
    if (!fullName || !birthDate) return

    if (patientsData.find(({ name }) => name === fullName)) {
      alert(
        'Ребенок с таким именем уже существует\nПожалуйста, задайте другое имя'
      )
      return
    }

    setPatientsData((prevData) => [
      ...prevData,
      new ChildData(fullName, birthDate),
    ])
    clearData()
  }, [fullName, birthDate, patientsData, setPatientsData, clearData])

  const disabled = useMemo(() => !fullName || !birthDate, [birthDate, fullName])

  return (
    <div className="flex flex-col gap-2">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          placeholder="Full Name"
          className="grow"
          onChange={(e) => setFullName(e.currentTarget.value)}
          value={fullName}
          required
        />
        <HumanIcon />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          className="grow"
          value={String(birthDate)}
          onChange={(e) => setBirthDate(e.currentTarget.value)}
          type="date"
          placeholder="Birth Date"
          ref={dateInputRef}
          required
        />
        <CalendarIcon onPress={() => dateInputRef.current?.showPicker()} />
      </label>
      <div className="flex w-full items-center justify-between">
        <button
          className="disabled:opacity-70hover:bg-red-300 btn w-28 border-0 transition-all"
          onClick={clearData}
          disabled={!fullName && !birthDate}
        >
          Clear
        </button>

        <button
          className="btn w-28 transition-all enabled:border-0 enabled:bg-green-700 enabled:text-white hover:enabled:bg-green-500 disabled:opacity-70"
          onClick={onSubmit}
          disabled={disabled}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default function () {
  return (
    <Card dashedOutline>
      <AddPatientForm />
    </Card>
  )
}
