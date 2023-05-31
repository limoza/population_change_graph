import React from 'react'
import { ChangeCategories } from '@/types'

type Props = {
  populationCategory: {
    id: number
    label: string
  }
  selectedPopulationCategory: number
  changeCategories: ChangeCategories
}

export const PopulationCategory = React.memo(
  ({
    populationCategory,
    selectedPopulationCategory,
    changeCategories,
  }: Props) => {
    const { id, label } = populationCategory
    const isChecked = id === selectedPopulationCategory

    return (
      <li>
        <div>
          <input
            type="radio"
            value={id}
            name="populationCategory"
            id={`populationCategory-${id}`}
            checked={isChecked}
            onChange={(e) => changeCategories(e)}
          />
          <label htmlFor={`populationCategory-${id}`}>{label}</label>
        </div>
      </li>
    )
  },
  (prevProps, nextProps) => {
    const prevCheck =
      prevProps.selectedPopulationCategory === prevProps.populationCategory.id
    const nextCheck =
      nextProps.selectedPopulationCategory === nextProps.populationCategory.id

    return prevCheck === nextCheck
  }
)

PopulationCategory.displayName = 'PopulationCategory'
