import { atomWithStorage } from 'jotai/utils'

export class ChildData {
  id: string
  name: string
  birthDate: string

  constructor(name: string, birthDate: string) {
    this.id = window.crypto.randomUUID()
    this.name = name
    this.birthDate = birthDate
  }
}

export default atomWithStorage<ChildData[]>('childrenData', [])
