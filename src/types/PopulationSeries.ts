import {
  TOTAL_POPULATION,
  POPULATION_UNDER_15,
  WORKING_AGE_POPULATION,
  ELDERLY_POPULATION,
} from '@/constants/population/constants'

type ExtractedPopulationDataLabel =
  | typeof TOTAL_POPULATION
  | typeof POPULATION_UNDER_15
  | typeof WORKING_AGE_POPULATION
  | typeof ELDERLY_POPULATION

export type ExtractedPopulationYearlyData = {
  year: number
  value: number
}

export type ExtractedPopulationData = {
  label: ExtractedPopulationDataLabel
  data: ExtractedPopulationYearlyData[]
}

type PopulationName = string
type PopulationChartType = string
type PopulationYearlyData = number[]

type PopulationData = {
  name: PopulationName
  type: PopulationChartType
  data: PopulationYearlyData
}

export type PopulationSeries = PopulationData[]

export type FormattedPopulationData = {
  name: PopulationName
  data: {
    label: ExtractedPopulationDataLabel
    data: PopulationYearlyData
  }[]
}
