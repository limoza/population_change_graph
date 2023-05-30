import React from 'react'
import { CheckBox } from '@/components/CheckBox'
import { PrefsDataType, CheckedPrefectures, ClickCheckBox } from '@/types'

type Props = {
  prefectures: PrefsDataType
  checkedPrefectures: CheckedPrefectures
  checkPrefectures: ClickCheckBox
}

export const CheckBoxList = ({
  prefectures,
  checkedPrefectures,
  checkPrefectures,
}: Props) => {
  return (
    <fieldset name="prefectureList">
      <legend>都道府県一覧</legend>
      <ul>
        {prefectures.map((prefecture) => (
          <CheckBox
            key={`prefCode-${prefecture.prefCode}`}
            prefecture={prefecture}
            checkedPrefectures={checkedPrefectures}
            checkPrefectures={checkPrefectures}
          />
        ))}
      </ul>
    </fieldset>
  )
}
