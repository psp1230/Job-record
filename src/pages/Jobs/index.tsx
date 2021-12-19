import { useParams, Outlet, Navigate } from 'react-router-dom';
import FirstJob from '@/pages/FirstJob';
import About from '@/pages/About';
import NowJob from '@/pages/NowJob'

function JobPage(props: any): JSX.Element {
  const { jobTitle } = useParams();
  if (jobTitle !== 'engineer' && jobTitle !== 'designer') {
    return <Navigate to="/engineer/first-job" />;
  }

  const selected = 'bg-blue-900 text-white';

  return (
    <div className="flex-grow p-12">
      <div className="flex">
        <p className="text-4xl font-bold text-blue-900 mr-10">
          2021 年前端/UI 從業人員現況調查
        </p>
        <div className="text-blue-900 border-blue-900 border rounded flex h-10">
          <button className={`text-lg font-noto-sans font-medium w-32 hover:bg-blue-900 hover:text-white ${jobTitle === 'engineer' && selected}`}>
            前端工程師
          </button>
          <button className={`text-lg font-noto-sans font-medium w-32 hover:bg-blue-900 hover:text-white ${jobTitle === 'designer' && selected}`}>
            <span className="font-roboto">UI</span>
            設計師
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default JobPage;
