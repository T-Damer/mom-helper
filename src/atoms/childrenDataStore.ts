import { atomWithStorage } from 'jotai/utils'

const whenBornOptions = ['22-26', '27-29', '30-32', '33-36', '>37']

export interface ChildData {
  id: string
  name: string
  gender: 'male' | 'female'
  weightWhenBornGrams: number
  heightWhenBornCentimeters: number
  birthDate: string
  whenBorn: (typeof whenBornOptions)[number]
}

export default atomWithStorage<ChildData[]>('childrenData', [])
