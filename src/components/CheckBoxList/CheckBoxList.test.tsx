import { render, screen } from '@testing-library/react'
import useSWR from 'swr'
import { CheckBoxList } from './CheckBoxList'
import { prefecturesTestData } from '@/test/fixture'

jest.mock('swr')

describe('CheckBoxList components Test', () => {
  it('Ensure that there is only one list', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useSWR.mockReturnValue({
      data: { result: prefecturesTestData },
    })
    render(
      <CheckBoxList prefectures={prefecturesTestData} checkedPrefectures={[]} />
    )
    expect(screen.getAllByRole('list')).toHaveLength(1)
  })
  it('All list items for each prefecture should be displayed.', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useSWR.mockReturnValue({
      data: { result: prefecturesTestData },
    })
    render(
      <CheckBoxList prefectures={prefecturesTestData} checkedPrefectures={[]} />
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(47)
  })
})
