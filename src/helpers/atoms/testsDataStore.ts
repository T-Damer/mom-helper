import { atomWithStorage } from 'jotai/utils'

interface TestsDataStore {
  [id: string]: string
}

export default atomWithStorage<TestsDataStore>('testsData', {}, undefined, {
  getOnInit: true,
})
