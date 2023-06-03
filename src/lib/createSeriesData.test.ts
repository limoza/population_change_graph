import { createSeriesData } from './createSeriesData'
import { FormattedPopulationData } from '@/types'

describe('createSeriesData', () => {
  it('Correctly formatted', () => {
    const seriesData: FormattedPopulationData[] = [
      {
        name: '沖縄県',
        data: [
          {
            label: '総人口',
            data: [1, 1, 1],
          },
          {
            label: '年少人口',
            data: [2, 2, 2],
          },
          {
            label: '生産年齢人口',
            data: [3, 3, 3],
          },
          {
            label: '老年人口',
            data: [4, 4, 4],
          },
        ],
      },
    ]

    const newSeriesData = createSeriesData(seriesData, 1)
    expect(newSeriesData).toEqual([
      {
        name: '沖縄県',
        type: 'line',
        data: [1, 1, 1],
      },
    ])
  })

  it('If it is empty, return an empty array.', () => {
    const seriesData: FormattedPopulationData[] = []

    const newSeriesData = createSeriesData(seriesData, 1)
    expect(newSeriesData).toEqual([])
  })
})
