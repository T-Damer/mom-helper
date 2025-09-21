export type SelectOptions = {
  value: string
  label: string
}

export default function Select({
  options,
  setValue,
  legend,
}: {
  options: SelectOptions[]
  setValue: (value: SelectOptions) => void
  legend?: string
}) {
  return (
    <fieldset class="fieldset w-full">
      {legend ? <legend class="fieldset-legend">{legend}</legend> : null}
      <select
        className="select h-16 w-full rounded-3xl focus-within:border-primary hover:border-primary"
        onChange={(e) =>
          setValue(
            options.find(
              (option) => option.value === e.currentTarget.value
            ) as SelectOptions
          )
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  )
}
