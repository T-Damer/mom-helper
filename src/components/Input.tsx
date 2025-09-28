import CalendarIcon from 'components/Icons/CalendarIcon'
import CrossIcon from 'components/Icons/CrossIcon'
import { useRef, useState } from 'preact/hooks'

type InputType = 'date' | 'string' | 'number'

interface InputProps {
  value: string
  setValue: (str: string) => void
  placeholder?: string
  inputType?: InputType
  legend?: string
}

const border =
  'border-primaryTransparent border-2 focus-within:border-primary hover:border-primary'

export default function ({
  value,
  setValue,
  placeholder = 'Имя',
  inputType,
  legend,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <fieldset class="fieldset">
      {legend ? <legend class="fieldset-legend">{legend}</legend> : null}

      <label
        className={`${border} input flex h-16 items-center gap-2 rounded-3xl text-base-content transition-all`}
      >
        <input
          className="grow placeholder:opacity-50"
          value={String(value)}
          onChange={(e) => setValue(e.currentTarget.value)}
          type={inputType}
          placeholder={placeholder}
          ref={inputRef}
          required
        />
        {inputType === 'date' && (
          <CalendarIcon onPress={() => inputRef.current?.showPicker()} />
        )}
        {value && <CrossIcon onPress={() => setValue('')} />}
      </label>
    </fieldset>
  )
}
