import { useRef, useState } from 'preact/hooks'
import CalendarIcon from 'components/Icons/CalendarIcon'
import CrossIcon from 'components/Icons/CrossIcon'

type InputType = 'date' | 'string' | 'number'

interface InputProps {
  value: string
  setValue: (str: string) => void
  placeholder?: string
  inputType?: InputType
}

const border =
  'border-primaryTransparent border-2 focus-within:border-primary hover:border-primary'

export default function ({
  value,
  setValue,
  placeholder = 'Имя',
  inputType,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <label
      className={`${border} text-primaryDark input flex h-16 items-center gap-2 rounded-3xl transition-all`}
    >
      <input
        className="grow"
        value={String(value)}
        onChange={(e) => setValue(e.currentTarget.value)}
        type={inputType}
        placeholder={placeholder}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
      />
      {inputType === 'date' && (
        <CalendarIcon onPress={() => inputRef.current?.showPicker()} />
      )}
      {value && isFocused && <CrossIcon onPress={() => setValue('')} />}
    </label>
  )
}
