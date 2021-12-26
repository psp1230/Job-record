import { useParams, Outlet, Navigate } from 'react-router-dom';
import JobTabs from './JobTabs';
import NavBar from '@/components/NavBar';

function JobPage(): JSX.Element {
  const { jobTitle } = useParams();

  if (jobTitle !== 'engineer' && jobTitle !== 'designer') {
    return <Navigate to="/engineer/first-job" />;
  }

  return (
    <div className="flex">
      <NavBar />
      <div className="flex-grow p-12">
        <div className="flex">
          <p className="text-4xl font-bold text-blue-900 mr-10">
            2021 年前端/UI 從業人員現況調查
          </p>
          <JobTabs jobTitle={jobTitle} />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default JobPage;
