import ReactECharts from 'echarts-for-react';
import { TreemapSeriesOption, ComposeOption, TooltipComponentOption, TitleComponentOption, GridComponentOption } from 'echarts';
import * as R from 'ramda';

type Options = ComposeOption<TreemapSeriesOption | TitleComponentOption | GridComponentOption | TooltipComponentOption>;

type Props = {
  data: { name: string, value: number }[],
};

function ImportSkill({ data }: Props): JSX.Element {
  
  const sumValue = R.sum(data.map((item) => item.value));
  const option: Options = {
    title: {
      text: '公司導入技能',
      textStyle: {},
      padding: 25,
    },
    tooltip: {
      formatter: (info: any) => {
        return info.name;
      },
    },
    series: [{
      type: 'treemap',
      nodeClick: undefined,
      breadcrumb: {
        show: false,
      },
      data,
      label: {
        fontFamily: 'Noto Sans TC',
        color: '#424242',
        fontWeight: 400,
        fontSize: 14,
        formatter: (info) => {
          const v = info.value as number;
          return `
            ${info.name}

            約 ${Math.round((v / sumValue) * 100)} %
          `;
        },
      },
      roam: false,
      left: 25,
      right: 25,
      top: 60,
      bottom: 25,
    }],
  };
  return (
    <div className="w-full">
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
}

export default ImportSkill;
