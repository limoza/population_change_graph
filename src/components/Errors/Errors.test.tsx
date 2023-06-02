import { render, screen } from '@testing-library/react'
import { Errors } from './Errors'

describe('Errors components Test', () => {
  const text = '通信に失敗しました。再読み込みを行ってください。'
  it('Error is displayed', () => {
    render(<Errors />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('Ensure that there is only one Errors', () => {
    render(<Errors />)
    expect(screen.getAllByText(text)).toHaveLength(1)
  })
})
