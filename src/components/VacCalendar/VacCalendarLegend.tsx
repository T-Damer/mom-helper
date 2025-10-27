export default function VacCalendarLegend() {
  return (
    <div className="rounded-xl border border-base-300 bg-base-200 p-4 shadow">
      <div className="space-y-2 text-xs">
        <div className="flex gap-2">
          <span className="font-semibold">V1, V2, V3 -</span>
          <span>Порядковый номер вакцинации</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">RV1, RV2, RV3 -</span>
          <span>Порядковый номер ревакцинации</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">ИПВ -</span>
          <span>Инактивированная полиомиелитная вакцина</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">ОПВ -</span>
          <span>Оральная полиомиелитная вакцина</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">АДС-м -</span>
          <span>
            Анатоксин дифтерийно-столбнячный с уменьшенным содержанием антигенов
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 flex-shrink-0 bg-green-400" />
          <span>Всем лицам</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 flex-shrink-0 bg-amber-400" />
          <span>Лицам из групп риска, по показаниям, призывникам (грипп)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 flex-shrink-0 bg-blue-400" />
          <span>
            Ранее не привитым, не болевшим, не имеющим сведений о однократно
            привитых (для кори и краснухи)
          </span>
        </div>
      </div>
    </div>
  )
}
