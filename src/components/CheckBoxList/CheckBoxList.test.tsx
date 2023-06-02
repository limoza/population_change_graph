import { render, screen } from '@testing-library/react'
// import useSWR from 'swr'
import { CheckBoxList } from './CheckBoxList'
import { prefecturesTestData } from '@/test/fixture'

jest.mock('swr')

describe('CheckBoxList components Test', () => {
  const checkPrefectures = () => null
  it('Ensure that there is only one h2', () => {
    render(
      <CheckBoxList
        prefectures={prefecturesTestData}
        checkedPrefectures={[]}
        checkPrefectures={checkPrefectures}
      />
    )
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1)
  })

  it('Ensure that there is only one fieldset', () => {
    render(
      <CheckBoxList
        prefectures={prefecturesTestData}
        checkedPrefectures={[]}
        checkPrefectures={checkPrefectures}
      />
    )
    expect(screen.getAllByRole('group')).toHaveLength(1)
  })

  it('should display the correct text', () => {
    render(
      <CheckBoxList
        prefectures={prefecturesTestData}
        checkedPrefectures={[]}
        checkPrefectures={checkPrefectures}
      />
    )
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: '都道府県一覧',
      })
    ).toBeInTheDocument()
  })

  it('Ensure that there is only one list', () => {
    render(
      <CheckBoxList
        prefectures={prefecturesTestData}
        checkedPrefectures={[]}
        checkPrefectures={checkPrefectures}
      />
    )
    expect(screen.getAllByRole('list')).toHaveLength(1)
  })
  it('All list items for each prefecture should be displayed.', () => {
    render(
      <CheckBoxList
        prefectures={prefecturesTestData}
        checkedPrefectures={[]}
        checkPrefectures={checkPrefectures}
      />
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(47)
  })
})
