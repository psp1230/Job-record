import ReactECharts from 'echarts-for-react';
import { TreemapSeriesOption } from 'echarts';

type Props = {
  data: { name: string, value: number }[],
};

function GenderRate({ data }: Props): JSX.Element {

const seriesOption: TreemapSeriesOption[] = [{
  type: 'treemap',
  nodeClick: undefined,
  breadcrumb: {
    show: false,
  },
  data,
}];

const option = {
  series: seriesOption,
}
  return (
    <div className="w-full h-108 border border-gray-400">
      <ReactECharts option={option} />
    </div>
  )
}

export default GenderRate
