import ReactECharts from 'echarts-for-react';
import { TreeSeriesOption } from 'echarts';

const option: TreeSeriesOption[] = [{
  type: 'tree',
}];

function GenderRate(): JSX.Element {
  return (
    <div className="w-72 p-6">
      <ReactECharts option={{}} />
    </div>
  )
}

export default GenderRate
