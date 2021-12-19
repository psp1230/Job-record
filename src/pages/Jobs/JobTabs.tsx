import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import * as R from 'ramda';

type Props = {
  jobTitle: 'engineer' | 'designer',
};

function JobTabs({ jobTitle }: Props): JSX.Element {
  const { pathname } = useLocation();
  const selected = 'bg-blue-900 text-white';
  const designPath = R.replace(jobTitle, 'designer', pathname);
  const engineerPath = R.replace(jobTitle, 'engineer', pathname);

  return (
    <div className="text-blue-900 border-blue-900 border rounded flex h-10">
      <Link
        to={`${engineerPath}`}
        className={`text-center leading-9 text-lg font-noto-sans font-medium w-32 hover:bg-blue-900 hover:text-white ${jobTitle === 'engineer' && selected}`}
      >
        前端工程師
      </Link>
      <Link
        to={`${designPath}`}
        className={`text-center leading-9 text-lg font-noto-sans font-medium w-32 hover:bg-blue-900 hover:text-white ${jobTitle === 'designer' && selected}`}
      >
        <span className="font-roboto">UI</span>
        設計師
      </Link>
    </div>
  )
}

export default JobTabs;
