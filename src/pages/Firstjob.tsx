<<<<<<< HEAD
import GenderRate from '@/components/charts/GenderRate';
import GenderAgeRate from '@/components/charts/GenderAgeRate'
=======
import ImportSkill from '@/components/charts/ImportSkill';
import { useSelector } from 'react-redux';
import * as R from 'ramda';
>>>>>>> b32e594378649ac8ddb9b58f217e82be23bedb85

function FirstJob(): JSX.Element {
  const frontendData = useSelector<ReduxStoreData>(
    (state) => state.frontendData.value,
  ) as FrontendData[];
  const skillList: string[][] = frontendData.map((item) => {
    const splitArr = R.split(/(?!([^(（]*[)）])),/, item.first_job.skill);
    const filterArr = R.filter((e) => !R.isNil(e), splitArr);
    const trimArr = filterArr.map((e) => R.trim(e));
    return trimArr;
  });

  const countData = R.countBy((item) => item, R.flatten(skillList));
  const skillData = R.keys(countData).map((key) => {
    return {
      name: key.toString(),
      value: countData[key],
    };
  });
  const sortData = R.sort((a, b) => b.value - a.value, skillData);
  const max30Data = R.slice(0, 20, sortData);

  return (
    <div className="flex-grow h-full">
      <div className="flex justify-between h-108 border border-gray-400 rounded-2xl">
        <ImportSkill data={max30Data} />
      </div>
      <div className="border border-gray-400">
        <GenderAgeRate />
      </div>
    </div>
  );
}

export default FirstJob;
