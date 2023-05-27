import { render, screen } from '@testing-library/react'
import useSWR from 'swr'
import { MainContents } from './MainContents'
import { prefecturesTestData } from '@/fixture'

jest.mock('swr')

describe('Main components Test', () => {
  it('Ensure that there is only one main', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useSWR.mockReturnValue({
      data: { result: prefecturesTestData },
    })
    render(<MainContents />)
    expect(screen.getAllByRole('main')).toHaveLength(1)
  })

  it('The loading should be displayed.', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useSWR.mockReturnValue({
      data: undefined,
      isLoading: true,
    })
    render(<MainContents />)
    expect(screen.getByText('loading...')).toBeInTheDocument()
  })

  it('The error should be displayed.', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useSWR.mockReturnValue({
      data: undefined,
      error: true,
    })
    render(<MainContents />)
    expect(screen.getByText('failed to load')).toBeInTheDocument()
  })
})
