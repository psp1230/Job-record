import GenderRate from '@/components/charts/GenderRate';
import GenderAgeRate from '@/components/charts/GenderAgeRate'

function FirstJob(): JSX.Element {

  return (
    <div className="flex-grow">
    <div className="flex justify-between">
      <div className="border border-gray-400">
        <GenderRate />
      </div>
      <div className="border border-gray-400">
        <GenderAgeRate />
      </div>
    </div>
  </div>
  )
}

export default FirstJob;
