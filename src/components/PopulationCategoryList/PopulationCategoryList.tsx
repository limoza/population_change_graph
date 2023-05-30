import { PopulationCategory } from '@/components/PopulationCategory'
import { POPULATION_CATEGORIES } from '@/constants/population/constants'
import { ChangeCategories } from '@/types'

type Props = {
  selectedPopulationCategory: number
  changeCategories: ChangeCategories
}

const populationCategories = POPULATION_CATEGORIES

export const PopulationCategoryList = ({
  selectedPopulationCategory,
  changeCategories,
}: Props) => {
  return (
    <fieldset name="prefectureList">
      <legend>カテゴrー</legend>
      <ul>
        {populationCategories.map((populationCategory) => (
          <PopulationCategory
            key={`category-${populationCategory.id}`}
            populationCategory={populationCategory}
            selectedPopulationCategory={selectedPopulationCategory}
            changeCategories={changeCategories}
            // prefecture={prefecture}
            // checkedPrefectures={checkedPrefectures}
            // checkPrefectures={checkPrefectures}
          />
        ))}
      </ul>
    </fieldset>
  )
}
