import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header components Test', () => {
  it('Ensure that there is only one header', () => {
    render(<Header />)
    expect(screen.getAllByRole('banner')).toHaveLength(1)
  })

  it('Ensure that there is only one h1', () => {
    render(<Header />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('should display the correct text', () => {
    render(<Header />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '都道府県別 人口推移グラフ',
      })
    ).toBeInTheDocument()
  })
})
