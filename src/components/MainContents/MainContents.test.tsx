import { render } from '@testing-library/react'
import useSWR, { SWRConfig } from 'swr'
import { MainContents } from './MainContents'
import { prefecturesTestData } from '@/test/fixture'

jest.mock('swr')

describe('Main components Test', () => {
  it('Ensure that there is only one main', async () => {
    const mockData = {
      data: prefecturesTestData,
      error: false,
      loading: false,
    }
    useSWR.mockReturnValue(mockData)

    render(
      <SWRConfig>
        <MainContents />
      </SWRConfig>
    )
  })
})
