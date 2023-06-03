import { changeSelectedPrefectures } from './changeSelectedPrefectures'

describe('changeSelectedPrefectures', () => {
  it('should add the checkedValue to the prev array if isChecked is true', () => {
    const checkedValue = 3
    const isChecked = true
    const prev = [1, 2]

    const newState = changeSelectedPrefectures(checkedValue, isChecked, prev)

    expect(newState).toEqual([1, 2, 3])
  })

  it('should remove the checkedValue from the prev array if isChecked is false', () => {
    const checkedValue = 3
    const isChecked = false
    const prev = [1, 2, 3]

    const newState = changeSelectedPrefectures(checkedValue, isChecked, prev)

    expect(newState).toEqual([1, 2])
  })
})
