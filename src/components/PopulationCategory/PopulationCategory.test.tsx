import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopulationCategory } from './PopulationCategory'
import { categories } from '@/test/fixture'

describe('PopulationCategory components Test', () => {
  it('should display the correct label text', () => {
    render(
      <PopulationCategory
        selectedPopulationCategory={1}
        changeCategories={() => null}
      />
    )
    expect(screen.getByText('区分選択')).toBeInTheDocument()
  })

  it('should display the correct select options', () => {
    render(
      <PopulationCategory
        selectedPopulationCategory={1}
        changeCategories={() => null}
      />
    )
    const optionElements = screen.getAllByRole('option')

    expect(optionElements).toHaveLength(categories.length)

    optionElements.forEach((optionElement, index) => {
      expect(optionElement).toHaveValue(categories[index].value)
    })

    optionElements.forEach((optionElement, index) => {
      expect(optionElement).toHaveTextContent(categories[index].option)
    })
  })

  it('should select correct value', () => {
    render(
      <PopulationCategory
        selectedPopulationCategory={1}
        changeCategories={() => null}
      />
    )
    const selectElement = screen.getByRole('combobox')

    userEvent.selectOptions(selectElement, '1')
    expect(selectElement).toHaveValue(categories[0].value)
  })
})
