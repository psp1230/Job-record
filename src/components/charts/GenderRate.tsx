import ReactECharts from 'echarts-for-react';

function GenderRate(): JSX.Element {
  const option = {
    title: {
      text: '性別總佔比',
      left: 'left'
    },
    tooltip: {
      show: false,
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      bottom: 0,
      right: 0,
      lineStyle: {
        width: 0
      },
      icon: 'circle'
    },
    series: [
      {
        type: 'pie',
        radius: '70%',
        data: [
          { value: 1048, name: '男生', itemStyle: { color: '#448AFF' } },
          { value: 735, name: '女生', itemStyle: { color: '#FF5252' } },
        ],
        labelLine: {
          show: false
        },
        emphasis: {
          labelLine: {
            show: false
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div className="w-72 p-6">
      <ReactECharts option={option} />
    </div>
  )
}

export default GenderRate
