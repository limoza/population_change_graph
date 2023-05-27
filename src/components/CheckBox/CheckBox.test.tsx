import { render, screen } from '@testing-library/react'
import useSWR from 'swr'
import { CheckBoxList } from '../CheckBoxList'
import { CheckBox } from './CheckBox'
import { prefecturesTestData } from '@/fixture'

jest.mock('swr')

describe('CheckBox components Test', () => {
  it('All checkbox for each prefecture should be displayed.', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useSWR.mockReturnValue({
      data: { result: prefecturesTestData },
    })
    render(
      <CheckBoxList prefectures={prefecturesTestData} checkedPrefectures={[]} />
    )
    expect(screen.getAllByRole('checkbox')).toHaveLength(47)
  })
})
