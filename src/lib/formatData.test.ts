import { formatData } from './formatData'
import { ExtractedPopulationData } from '@/types'

describe('formatData', () => {
  it('The received value should be formatted', () => {
    const extractedPopulationData: ExtractedPopulationData[] = [
      {
        label: '総人口',
        data: [
          {
            year: 1960,
            value: 1,
          },
        ],
      },
      {
        label: '年少人口',
        data: [
          {
            year: 1960,
            value: 2,
          },
        ],
      },
      {
        label: '生産年齢人口',
        data: [
          {
            year: 1960,
            value: 3,
          },
        ],
      },
      {
        label: '老年人口',
        data: [
          {
            year: 1960,
            value: 4,
          },
        ],
      },
    ]

    const prefName = '沖縄県'

    const newData = formatData(extractedPopulationData, prefName)

    expect(newData).toMatchObject({
      name: '沖縄県',
      data: [
        {
          label: '総人口',
          data: [1],
        },
        {
          label: '年少人口',
          data: [2],
        },
        {
          label: '生産年齢人口',
          data: [3],
        },
        {
          label: '老年人口',
          data: [4],
        },
      ],
    })
  })
})
