import { atomWithStorage } from 'jotai/utils'

export class ChildData {
  id: string
  name: string
  birthDate: string
  mass: number
  height: number

  constructor(name: string, birthDate: string, mass: number, height: number) {
    this.id = window.crypto.randomUUID()
    this.name = name
    this.birthDate = birthDate
    this.mass = mass
    this.height = height
  }
}

export default atomWithStorage<ChildData[]>('childrenData', [])
