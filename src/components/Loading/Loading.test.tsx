import { render, screen } from '@testing-library/react'
import { Loading } from './Loading'

describe('Loading components Test', () => {
  it('Loading is displayed', () => {
    render(<Loading />)
    expect(screen.getByRole('image')).toBeInTheDocument()
  })

  it('Ensure that there is only one Loading', () => {
    render(<Loading />)
    expect(screen.getAllByRole('image')).toHaveLength(1)
  })
})
