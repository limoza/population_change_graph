import { ExtractedPopulationData, ExtractedPopulationYearlyData } from '@/types'

export const formatData = (
  extractedPopulationData: ExtractedPopulationData[],
  checkedPrefectureName: string
) => {
  const formatPopulationData = extractedPopulationData.map(
    (item: ExtractedPopulationData) => {
      return {
        label: item.label,
        data: item.data.map(
          (item: ExtractedPopulationYearlyData) => item.value
        ),
      }
    }
  )

  const newData = {
    name: checkedPrefectureName,
    data: formatPopulationData,
  }

  return newData
}
