import { FormattedPopulationData } from '@/types'

export const createSeriesData = (
  seriesData: FormattedPopulationData[],
  selectedPopulationCategory: number
) => {
  if (seriesData.length) {
    const newData = seriesData.map((item) => {
      return {
        name: item.name,
        type: 'line',
        data: item.data[selectedPopulationCategory - 1].data,
      }
    })
    return newData
  } else {
    return []
  }
}
