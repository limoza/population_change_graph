import { FormattedPopulationData } from '@/types'

export const deletedData = (
  prefName: string,
  prev: FormattedPopulationData[]
) => {
  const newData = prev.filter((item) => item.name !== prefName)
  return newData
}
