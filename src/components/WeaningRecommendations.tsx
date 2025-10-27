import { Header2 } from './Text'

export default function WeaningRecommendations({
  recommendations,
}: {
  recommendations: { name: string; value: string }[]
}) {
  return (
    <div className="rounded-xl bg-base-200 p-4">
      <Header2>Текущие рекомендации</Header2>

      {recommendations.length > 0 ? (
        <div className="space-y-2">
          <ul className="my-0 space-y-1 px-0">
            {recommendations.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span className="font-medium">{item.name}:</span>
                <span className="ml-2">{item.value}г</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>В данном возрасте введение прикорма не рекомендуется</p>
      )}
    </div>
  )
}
