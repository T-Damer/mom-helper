import getAge from 'helpers/getAge'
import WeaningRecommendations from './WeaningRecommendations'

const tableData = [
  { name: 'Овощное пюре', values: ['10-150', '150', '150', '150', '150'] },
  { name: 'Каша', values: ['10-150', '150', '150', '180', '200'] },
  {
    name: 'Мясное пюре* /    отварное мясо',
    values: ['-', '5-30/3-15', '40-50/20-30', '60-70/30-35', '80-100/40-50'],
  },
  { name: 'Фруктовое пюре **', values: ['5-50', '60', '70', '80', '90-100'] },
  { name: 'Желток', values: ['-', '-', '1/4', '1/2', '1/2'] },
  { name: 'Творог ***', values: ['-', '-', '-', '10-40', '50'] },
  { name: 'Рыбное пюре', values: ['-', '-', '-', '5-30', '30-60'] },
  { name: 'Фруктовый сок', values: ['-', '-', '-', '5-60', '80-100'] },
  {
    name: 'Кефир и др. детские неадаптир. КМ напитки',
    values: ['-', '-', '-', '200', '200'],
  },
  { name: 'Печенье детское', values: ['-', '3', '5', '5', '5'] },
  { name: 'Хлеб пшеничный, сухари', values: ['-', '-', '-', '5', '10'] },
  { name: 'Растительное масло****', values: ['1-3', '5', '5', '6', '6'] },
  { name: 'Сливочное масло', values: ['1-3', '4', '4', '5', '5'] },
]
const columns = ['4-5', '6', '7', '8', '9-12']
const getCurrentRecommendations = (currentColumn: string | null) => {
  if (!currentColumn) return []

  const columnIndex = columns.findIndex((col) => col === currentColumn)
  return tableData
    .filter((row) => row.values[columnIndex] && row.values[columnIndex] !== '-')
    .map((row) => ({
      name: row.name,
      value: row.values[columnIndex],
    }))
}

export default function WeaningTable({ birthDate }: { birthDate: string }) {
  const { months } = getAge(birthDate)

  const getHighlightedColumn = (ageMonths: number) => {
    if (!ageMonths) return null

    if (ageMonths >= 4 && ageMonths <= 5) return '4-5'
    if (ageMonths === 6) return '6'
    if (ageMonths === 7) return '7'
    if (ageMonths === 8) return '8'
    if (ageMonths >= 9 && ageMonths <= 12) return '9-12'

    return null
  }

  const highlightedColumn = months ? getHighlightedColumn(months) : null
  const currentRecommendations = getCurrentRecommendations(highlightedColumn)

  return (
    <div className="flex flex-col gap-y-2">
      <WeaningRecommendations recommendations={currentRecommendations} />
      <div className="overflow-x-auto">
        <table className="table-zebra table w-full">
          <thead>
            <tr>
              <th className="bg-base-200">
                Наименование продуктов и блюд (г, мл)
              </th>
              <th colSpan={5} className="bg-base-200 text-center">
                Возраст (мес.)
              </th>
            </tr>
            <tr>
              <th></th>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`text-center ${highlightedColumn === col ? 'bg-primary text-white' : 'bg-base-100'}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <th>{row.name}</th>
                {row.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className={`${highlightedColumn === columns[colIndex] ? 'bg-accent text-white' : ''} min-w-32 text-center`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
