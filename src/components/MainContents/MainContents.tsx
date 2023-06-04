import { useState, ChangeEvent, useEffect, useRef } from 'react'
import useSWRMutation from 'swr/mutation'
import { ChartContainer } from '@/components/ChartContainer'
import { CheckBoxList } from '@/components/CheckBoxList'
import { Errors } from '@/components/Errors'
import { Loading } from '@/components/Loading'
import {
  REASAS_PREFS_URL,
  REASAS_POPULATION_URL,
  FETCH_OPTIONS,
} from '@/constants/REASAS/constants'
import { useGetPrefsData } from '@/hooks/useGetPrefsData'
import { changeSelectedPrefectures } from '@/lib/changeSelectedPrefectures'
import { createSeriesData } from '@/lib/createSeriesData'
import { deletedData } from '@/lib/deletedData'
import { formatData } from '@/lib/formatData'
import { PopulationSeries, FormattedPopulationData } from '@/types'

export const MainContents = () => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([])
  const [checkedPrefectureName, setCheckedPrefectureName] = useState<string>('')
  const [selectedPopulationCategory, setSelectedPopulationCategory] =
    useState<number>(1)
  const [previousCategory, setPreviousCategory] = useState<number>(1)
  const [populationSaveData, setPopulationSaveData] = useState<
    FormattedPopulationData[]
  >([])
  const [series, setSeries] = useState<PopulationSeries>([])
  const ref = useRef(true)

  const {
    data: prefsData,
    error: prefsError,
    isLoading: prefsLoading,
  } = useGetPrefsData(REASAS_PREFS_URL)

  const {
    data: populationData,
    error: populationError,
    trigger,
  } = useSWRMutation(
    REASAS_POPULATION_URL,
    async (url: string, { arg }: { arg: { prefID: number } }) => {
      const res = await fetch(`${url}${arg.prefID}`, FETCH_OPTIONS)
      return res.json()
    }
  )

  const checkPrefectures = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedValue = Number(e.target.value)
    const isChecked = e.target.checked
    const prefName = e.target.getAttribute('data-pref-name')
    setCheckedPrefectures((prev) => {
      const newData = changeSelectedPrefectures(checkedValue, isChecked, prev)
      return newData
    })
    prefName && setCheckedPrefectureName(prefName)
    if (isChecked) {
      trigger({ prefID: checkedValue })
    } else {
      setPopulationSaveData((prev) => {
        const newData = prefName ? deletedData(prefName, prev) : []
        setSeries(createSeriesData(newData, selectedPopulationCategory))
        return newData
      })
    }
  }

  const changeCategories = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(e.target.value)
    setSelectedPopulationCategory(selectedValue)
    if (!populationData) setPreviousCategory(selectedValue)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current = false
      return
    }
    const { data: extractedPopulationData } = populationData.result

    const isChangeCategory = previousCategory !== selectedPopulationCategory

    if (isChangeCategory) {
      setPreviousCategory(selectedPopulationCategory)
    } else {
      const formattedData = formatData(
        extractedPopulationData,
        checkedPrefectureName
      )
      setPopulationSaveData((prev) => {
        const newState = [...prev, formattedData]
        return newState
      })
    }

    const seriesData = isChangeCategory
      ? populationSaveData
      : [
          ...populationSaveData,
          formatData(extractedPopulationData, checkedPrefectureName),
        ]

    setSeries(createSeriesData(seriesData, selectedPopulationCategory))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [populationData, selectedPopulationCategory])

  return (
    <main className="main">
      {prefsError || populationError ? (
        <Errors />
      ) : (
        <>
          {prefsLoading ? (
            <Loading />
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </main>
  )
}
