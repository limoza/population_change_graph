import { Chart } from '@/components/Chart'
import { PopulationCategory } from '@/components/PopulationCategory'
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
      <PopulationCategory
        selectedPopulationCategory={selectedPopulationCategory}
        changeCategories={changeCategories}
      />
      <Chart series={series} />
    </>
  )
}
