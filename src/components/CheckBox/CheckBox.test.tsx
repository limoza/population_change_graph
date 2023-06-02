import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChangeEvent, useState } from 'react'
import { CheckBoxList } from '../CheckBoxList'
import { changeSelectedPrefectures } from '@/lib/changeSelectedPrefectures'
import { prefecturesTestData } from '@/test/fixture'

jest.mock('swr')
const user = userEvent.setup()

describe('CheckBox components Test', () => {
  it('All checkbox for each prefecture should be displayed.', () => {
    const checkPrefectures = jest.fn()

    render(
      <CheckBoxList
        prefectures={prefecturesTestData}
        checkedPrefectures={[]}
        checkPrefectures={checkPrefectures}
      />
    )

    const checkboxElements = screen.getAllByRole('checkbox')
    expect(checkboxElements).toHaveLength(prefecturesTestData.length)
  })

  it('None of them should be checked.', () => {
    const checkPrefectures = jest.fn()
    render(
      <CheckBoxList
        prefectures={prefecturesTestData}
        checkedPrefectures={[]}
        checkPrefectures={checkPrefectures}
      />
    )

    const checkboxElements = screen.getAllByRole('checkbox')

    checkboxElements.forEach((checkboxElement) => {
      expect(checkboxElement).not.toBeChecked()
    })
  })

  it('Should be able to check all.', () => {
    const TemporaryComponent = () => {
      const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([])

      const checkPrefectures = (e: ChangeEvent<HTMLInputElement>) => {
        const checkedValue = Number(e.target.value)
        const isChecked = e.target.checked
        setCheckedPrefectures((prev) => {
          const newData = changeSelectedPrefectures(
            checkedValue,
            isChecked,
            prev
          )
          return newData
        })
      }

      return (
        <CheckBoxList
          prefectures={prefecturesTestData}
          checkedPrefectures={checkedPrefectures}
          checkPrefectures={(e) => checkPrefectures(e)}
        />
      )
    }

    render(<TemporaryComponent />)

    const checkboxElements = screen.getAllByRole('checkbox')

    checkboxElements.forEach(async (checkbox) => {
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
    })
  })
})
