import ReactECharts from 'echarts-for-react';
import { BarSeriesOption, LegendComponentOption } from 'echarts';
const series: BarSeriesOption[] = [
  {
    name: 'Income',
    type: 'bar',
    stack: 'Total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [320, 302, 341, 374, 390, 450, 420]
  },
  {
    name: 'Expenses',
    type: 'bar',
    stack: 'Total',
    label: {
      show: true,
      position: 'left'
    },
    emphasis: {
      focus: 'series'
    },
    data: [-120, -132, -101, -134, -190, -230, -210]
  }
]

const lengend: LegendComponentOption = {
  data: ['Profit', 'Expenses', 'Income']
}

function GenderAgeRate(): JSX.Element {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: [
      {
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    legend: lengend,
    series: series,
  }

  return (
    <div className="w-[795px] p-6" >
      <ReactECharts option={option} />
    </div >
  )
}

export default GenderAgeRate
