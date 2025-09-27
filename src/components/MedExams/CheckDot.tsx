export default function CheckDot({
  color = 'bg-gray-500',
  isActive,
  isCompleted,
}: { color?: string; isActive?: boolean; isCompleted?: boolean }) {
  return (
    <div
      className={`h-4 w-4 rounded-full ${isActive ? color : 'bg-transparent'} mx-auto border ${isActive ? 'border-transparent' : 'border-gray-300'} ${isCompleted ? 'opacity-50' : 'opacity-100'}`}
    />
  )
}
