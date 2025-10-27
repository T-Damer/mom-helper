import childrenDataStore from 'atoms/childrenDataStore'
import Header from 'components/Header'
import ExamsTable from 'components/MedExams/ExamsTable'
import { useAtomValue } from 'jotai'

export default function ({ childId }: { childId: string }) {
  const patientsData = useAtomValue(childrenDataStore)

  const currentChildren = patientsData.find(({ id }) => id === childId)

  if (!currentChildren) {
    return <div>Данные ребенка не найдены</div>
  }

  return (
    <>
      <Header>Календарь посещения специалистов</Header>
      <div className="flex flex-col gap-y-2">
        <ExamsTable birthDate={currentChildren.birthDate} />

        <ul className="text-xs">
          <span className="whitespace-pre-wrap text-xs">
            Согласно приказам Министертсва Здраовохранения РФ:
          </span>
          <li className="whitespace-pre-wrap text-xs">
            <a
              href="https://base.garant.ru/71748018/"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Nº514н от 10.08.2017г. «О порядке проведения профилактических
              осмотров несовершеннолетних»
            </a>
          </li>
          <li className="whitespace-pre-wrap text-xs">
            <a
              href="https://base.garant.ru/72817530/"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Nº396 от 13.06.2019г. «О внесении изменений в порядок проведения
              профилактических осмотров несовершеннолетних, утвержденный
              приказом Министертсва Здраовохранения РФ»
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
