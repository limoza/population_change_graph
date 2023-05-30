import { useState, ChangeEvent, useEffect } from 'react'
import useSWRMutation from 'swr/mutation'
import { ChartContainer } from '@/components/ChartContainer'
import { CheckBoxList } from '@/components/CheckBoxList'
import {
  REASAS_PREFS_URL,
  REASAS_POPULATION_URL,
} from '@/constants/REASAS/constants'
import { useGetPrefsData } from '@/hooks/useGetPrefsData'
import { populationFetcher } from '@/lib/populationFetcher'
import {
  ExtractedPopulationData,
  PopulationSeries,
  ExtractedPopulationYearlyData,
  FormattedPopulationData,
} from '@/types'

export const MainContents = () => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([])
  const [checkedPrefectureName, setCheckedPrefectureName] = useState<string>('')
  const [selectedPopulationCategory, setSelectedPopulationCategory] =
    useState<number>(1)
  const [populationSaveData, setPopulationSaveData] = useState<
    FormattedPopulationData[]
  >([])
  const [series, setSeries] = useState<PopulationSeries>([])

  const {
    data: prefsData,
    error: prefsError,
    isLoading: prefsLoading,
  } = useGetPrefsData(REASAS_PREFS_URL)

  const {
    data: populationData,
    error: populationError,
    trigger,
  } = useSWRMutation(REASAS_POPULATION_URL, populationFetcher)

  const changeSelectedPrefectures = (
    checkedValue: number,
    isChecked: boolean
  ) => {
    isChecked
      ? setCheckedPrefectures((prev) => {
          const newState = [...prev, checkedValue]
          return newState
        })
      : setCheckedPrefectures((prev) => {
          const newState = prev.filter((item) => item !== checkedValue)
          return newState
        })
  }

  const deleteSaveData = (prefName: string) => {
    setPopulationSaveData((prev) => {
      const newData = prev.filter((item) => item.name !== prefName)
      return newData
    })
  }

  const checkPrefectures = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedValue = Number(e.target.value)
    const isChecked = e.target.checked
    const prefName = e.target.getAttribute('data-pref-name')
    changeSelectedPrefectures(checkedValue, isChecked)
    prefName && setCheckedPrefectureName(prefName)
    isChecked
      ? trigger({ prefID: checkedValue })
      : prefName && deleteSaveData(prefName)
  }

  const changeCategories = (e: ChangeEvent<HTMLInputElement>) =>
    setSelectedPopulationCategory(Number(e.target.value))

  const updatePopulationSaveData = (formatData: FormattedPopulationData) => {
    setPopulationSaveData((prev) => {
      const newState = [...prev, formatData]
      return newState
    })
  }

  const formatData = (
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

  useEffect(() => {
    if (populationData) {
      const { data: extractedPopulationData } = populationData.result
      updatePopulationSaveData(
        formatData(extractedPopulationData, checkedPrefectureName)
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [populationData])

  useEffect(() => {
    if (populationSaveData.length) {
      const newData = populationSaveData.map((item) => {
        return {
          name: item.name,
          type: 'line',
          data: item.data[selectedPopulationCategory - 1].data,
        }
      })

      setSeries(() => newData)
    } else {
      setSeries(() => [])
    }
  }, [populationSaveData, selectedPopulationCategory])

  if (prefsError) return <div>failed to load</div>
  if (populationError) return <div>failed to load</div>
  if (prefsLoading) return <div>loading...</div>

  return (
    <main className="main">
      <CheckBoxList
        prefectures={prefsData.result}
        checkedPrefectures={checkedPrefectures}
        checkPrefectures={checkPrefectures}
      />
      <ChartContainer
        series={series}
        selectedPopulationCategory={selectedPopulationCategory}
        changeCategories={changeCategories}
      />
    </main>
  )
}
