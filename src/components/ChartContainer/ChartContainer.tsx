import { Chart } from '@/components/Chart'
import { PopulationCategoryList } from '@/components/PopulationCategoryList'
import { PopulationSeries, ChangeCategories } from '@/types'

type Props = {
  series: PopulationSeries
  selectedPopulationCategory: number
  changeCategories: ChangeCategories
}

export const ChartContainer = ({
  series,
  selectedPopulationCategory,
  changeCategories,
}: Props) => {
  return (
    <>
      <PopulationCategoryList
        selectedPopulationCategory={selectedPopulationCategory}
        changeCategories={changeCategories}
      />
      <Chart series={series} />
    </>
  )
}
