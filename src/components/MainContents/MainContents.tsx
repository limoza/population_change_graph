import { useState, ChangeEvent } from 'react'
import { CheckBoxList } from '@/components/CheckBoxList'
import { REASAS_PREFS_URL } from '@/constants/constants'
import { useGetREASASData } from '@/hooks/useGetREASASData'

export const MainContents = () => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([])

  const updateSelectedState = (checkedValue: number, isChecked: boolean) => {
    isChecked
      ? setCheckedPrefectures((prev) => {
          const newState = [...prev, checkedValue]
          return newState
        })
      : setCheckedPrefectures((prev) => {
          const newState = prev.filter((item) => item !== checkedValue)
          return newState
        })
  }

  const clickCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedValue = Number(e.target.value)
    const isChecked = e.target.checked
    updateSelectedState(checkedValue, isChecked)
  }

  const { data, error, isLoading } = useGetREASASData(REASAS_PREFS_URL)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <main className="main">
      <CheckBoxList
        prefectures={data.result}
        checkedPrefectures={checkedPrefectures}
        clickCheckBox={clickCheckBox}
      />
    </main>
  )
}
