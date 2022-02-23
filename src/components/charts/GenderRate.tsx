import ReactECharts from 'echarts-for-react';
<<<<<<< HEAD
import { PieSeriesOption, LegendComponentOption } from 'echarts';
=======
import { PieSeriesOption } from 'echarts';

>>>>>>> b32e594378649ac8ddb9b58f217e82be23bedb85
const series: PieSeriesOption[] = [{
  type: 'pie',
  radius: '70%',
  data: [
    { value: 1048, name: '男生', itemStyle: { color: '#448AFF' } },
    { value: 735, name: '女生', itemStyle: { color: '#FF5252' } },
  ],
  labelLine: {
    show: false,
  },
  emphasis: {
    labelLine: {
      show: false,
    },
    itemStyle: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
  label: {
    position: 'inner',
<<<<<<< HEAD
    color: '#fff',
    formatter: '約{d}%'
  }
}];

const lengend: LegendComponentOption = {
  orient: 'horizontal',
  bottom: 0,
  right: 0,
  lineStyle: {
    width: 0
  },
  icon: 'circle'
}
=======
  },
}];

type GenderData = {
  value: number,
  name: string,
  itemStyle: {
    color: string,
  },
};

type Props = {
  seriesData: GenderData,
};
>>>>>>> b32e594378649ac8ddb9b58f217e82be23bedb85

function GenderRate(): JSX.Element {
  const option = {
    title: {
      text: '性別總佔比',
      left: 'left',
    },
    tooltip: {
      show: false,
      trigger: 'item',
    },
<<<<<<< HEAD
    legend: lengend,
=======
    legend: {
      orient: 'horizontal',
      bottom: 0,
      right: 0,
      lineStyle: {
        width: 0,
      },
      icon: 'circle',
    },
>>>>>>> b32e594378649ac8ddb9b58f217e82be23bedb85
    series: series,
  };

  return (
    <div className="w-72 p-6">
      <ReactECharts option={option} />
    </div>
  );
}

export default GenderRate;
