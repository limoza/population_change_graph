import { deletedData } from './deletedData'
import { FormattedPopulationData } from '@/types'

describe('deletedData', () => {
  it('The return value should be a blank space', () => {
    const prefName = '沖縄県'
    const prev: FormattedPopulationData[] = [
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

    const newData = deletedData(prefName, prev)
    expect(newData).toEqual([])
  })

  it('The object with the prefName should be removed and returned', () => {
    const prefName = '沖縄県'
    const prev: FormattedPopulationData[] = [
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
      {
        name: '東京都',
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

    const newData = deletedData(prefName, prev)
    expect(newData).toEqual([
      {
        name: '東京都',
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
    ])
  })
})
