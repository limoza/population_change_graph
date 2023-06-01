import React from 'react'
import { POPULATION_CATEGORIES } from '@/constants/population/constants'
import { ChangeCategories } from '@/types'

type Props = {
  selectedPopulationCategory: number
  changeCategories: ChangeCategories
}

const populationCategories = POPULATION_CATEGORIES

export const PopulationCategory = ({
  selectedPopulationCategory,
  changeCategories,
}: Props) => {
  return (
    <div className="categoryContainer">
      <select
        className="categorySelect"
        onChange={(e) => changeCategories(e)}
        value={selectedPopulationCategory}
      >
        {populationCategories.map((populationCategory) => {
          const { id, label } = populationCategory
          return (
            <option key={`category-${id}`} value={id}>
              {label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
