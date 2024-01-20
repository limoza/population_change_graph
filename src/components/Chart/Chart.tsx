import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useRef } from 'react'
import { Empty } from '@/components/Empty'
import { POPULATION_CATEGORIES } from '@/constants/population/constants'

// リファクタ用コメント
export const Chart = (props: HighchartsReact.Props) => {
  const options: Highcharts.Options = {
    title: {
      text: '都道府県別 総人口推移グラフ',
      align: 'left',
    },
    subtitle: {
      text: POPULATION_CATEGORIES[props.selectedPopulationCategory - 1].label,
      align: 'left',
    },
    yAxis: {
      title: {
        text: '人口',
      },
      accessibility: {
        rangeDescription: '人口',
      },
    },
    xAxis: {
      title: {
        text: '年度',
      },
      accessibility: {
        rangeDescription: 'Range: 1980 to 2045',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    plotOptions: {
      series: {
        pointStart: 1960,
        pointInterval: 5,
      },
    },
    series: props.series,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
    accessibility: {
      enabled: false,
    },
  }

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

  return (
    <>
      {props.series.length ? (
        <div className="chartContainer">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
            {...props}
          />
        </div>
      ) : (
        <div className="emptyContainer">
          <Empty />
        </div>
      )}
    </>
  )
}
