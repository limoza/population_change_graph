export const changeSelectedPrefectures = (
  checkedValue: number,
  isChecked: boolean,
  prev: number[]
): number[] => {
  const newState = isChecked
    ? [...prev, checkedValue]
    : prev.filter((item) => item !== checkedValue)
  return newState
}
