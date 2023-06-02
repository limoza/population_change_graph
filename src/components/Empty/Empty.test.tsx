import { render, screen } from '@testing-library/react'
import { Empty } from './Empty'

describe('Empty components Test', () => {
  const text = '都道府県を選択してください'
  it('emptyState is displayed', () => {
    render(<Empty />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('Ensure that there is only one emptyState', () => {
    render(<Empty />)
    expect(screen.getAllByText(text)).toHaveLength(1)
  })
})
