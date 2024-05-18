import Header from 'components/Header'
import navigate from 'helpers/navigate'
import { useEffect } from 'preact/hooks'
import AnimatedNumbers from 'react-animated-numbers'

export default function ({ childId }: { childId: string }) {
  useEffect(() => {
    // Generate data here, append to storage, go back to page
    setTimeout(() => navigate(`/diet/${childId}`), 3000)
  }, [])

  return (
    <Header>
      <div className="flex flex-col text-3xl">
        <span className="text-primaryDark">
          Генерируем рацион питания вашего ребенка{' '}
        </span>
        <div className="flex text-primary">
          —{' '}
          <AnimatedNumbers
            transitions={(index) => ({
              type: 'spring',
              duration: index + 0.3,
            })}
            animateToNumber={100}
          />
          %
        </div>
      </div>
    </Header>
  )
}
