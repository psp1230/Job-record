import ImportSkill from '@/components/charts/ImportSkill';
import { useSelector } from 'react-redux'
import * as R from 'ramda';


function FirstJob(): JSX.Element {
  const frontendData = useSelector<ReduxStoreData>((state) => state.frontendData.value) as FrontendData[];
  const skillList: string[][] = frontendData.map((item) => {
    const splitArr = R.split(/(?!([^(（]*[)）])),/, item.first_job.skill);
    const filterArr = R.filter((item) => !R.isNil(item), splitArr);
    const trimArr = filterArr.map((item) => R.trim(item));
    return trimArr;
  });

  const countData = R.countBy((item) => item, R.flatten(skillList));
  const skillData = R.keys(countData).map((key) => {
    return {
      name: key.toString(),
      value: countData[key],
    }
  });

  return (
    <div className="flex-grow">
    <div className="flex justify-between w-full h-full">
      <ImportSkill data={skillData} />
    </div>
  </div>
  )
}

export default FirstJob;
