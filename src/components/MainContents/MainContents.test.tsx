import { render, screen } from '@testing-library/react'
import { MainContents } from './MainContents'

describe('Header components Test', () => {
  it('Ensure that there is only one main', () => {
    render(<MainContents />)
    expect(screen.getAllByRole('main')).toHaveLength(1)
  })
})
