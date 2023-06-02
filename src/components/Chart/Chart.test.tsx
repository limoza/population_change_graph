import { render, screen } from '@testing-library/react'
import { Chart } from './Chart'
import { POPULATION_CATEGORIES } from '@/constants/population/constants'

describe('Chart components Test', () => {
  it('Ensure that there is only one Chart', () => {
    render(<Chart series={[0]} selectedPopulationCategory={1} />)
    expect(
      screen.getByLabelText('都道府県別 総人口推移グラフ')
    ).toBeInTheDocument()
  })
  it('category ID changes, the subtitle should also be updated.', () => {
    const populationCategories = POPULATION_CATEGORIES
    populationCategories.map((item, index) => {
      render(<Chart series={[0]} selectedPopulationCategory={index + 1} />)
      const label = populationCategories[index].label
      expect(screen.getByText(label)).toBeInTheDocument()
      return false
    })
  })
})
