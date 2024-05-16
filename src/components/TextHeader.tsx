export default function ({ text = 'Выберите ребенка' }: { text?: string }) {
  return <h1 className="text-primaryDark text-3xl font-medium">{text}</h1>
}
