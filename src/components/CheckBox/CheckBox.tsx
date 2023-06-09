import React from 'react'
import { PrefDataType, CheckedPrefectures, ClickCheckBox } from '@/types'

type Props = {
  prefecture: PrefDataType
  checkedPrefectures: CheckedPrefectures
  checkPrefectures: ClickCheckBox
}

export const CheckBox = React.memo(
  ({ prefecture, checkedPrefectures, checkPrefectures }: Props) => {
    const { prefCode, prefName } = prefecture
    const isChecked = checkedPrefectures.includes(prefCode)

    return (
      <li className="prefectureList__item">
        <input
          type="checkbox"
          value={prefCode}
          name="prefectureItem"
          id={`prefCode-${prefCode}`}
          data-pref-name={prefName}
          checked={isChecked}
          onChange={(e) => checkPrefectures(e)}
          className="visually-hidden"
        />
        <label
          className={`prefectureList__item__label${
            isChecked ? ` prefectureList__item__label--checked` : ``
          }`}
          htmlFor={`prefCode-${prefCode}`}
        >
          {prefName}
        </label>
      </li>
    )
  },
  (prevProps, nextProps) => {
    const isChecked = (
      checkedPrefectures: CheckedPrefectures,
      prefCode: number
    ) => checkedPrefectures.includes(prefCode)

    const prevCheck = isChecked(
      prevProps.checkedPrefectures,
      prevProps.prefecture.prefCode
    )
    const nextCheck = isChecked(
      nextProps.checkedPrefectures,
      nextProps.prefecture.prefCode
    )

    return prevCheck === nextCheck
  }
)

CheckBox.displayName = 'CheckBox'
