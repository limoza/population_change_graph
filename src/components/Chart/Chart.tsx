import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useRef } from 'react'
import { Empty } from '@/components/Empty'
import { PopulationSeries } from '@/types'

export const Chart = (
  props: HighchartsReact.Props,
  series: PopulationSeries
) => {
  const options: Highcharts.Options = {
    title: {
      text: '都道府県別 総人口推移グラフ',
      align: 'left',
    },
    subtitle: {
      text: '総人口',
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
