import { useParams, Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import JobTabs from './JobTabs';
import * as R from 'ramda';

type RouterObject = {
  name: string,
  route: (newJob: string) => string,
};


const list: RouterObject[] = [
  {
    name: '基本資料',
    route(jobTitle) {
      return `/${jobTitle}`
    }
  }, {
    name: '第一份工作',
    route(jobTitle) {
      return `first-job`;
    }
  }, {
    name: '工作相關',
    route(jobTitle) {
      return `about-job`;
    }
  }, {
    name: '目前公司',
    route(jobTitle) {
      return `now-job`;
    }
  }
]

function JobPage(): JSX.Element {
  const { jobTitle } = useParams();

  if (jobTitle !== 'engineer' && jobTitle !== 'designer') {
    return <Navigate to="/engineer/first-job" />;
  }

  return (
    <div className="flex">
      <nav className="w-64 h-screen bg-green-50 shadow-xl shadow-emerald-200">
        <div className="h-36 text-green-900 text-xl font-bold text-center py-10">Dashboard</div>
        {list.map((item) => {
          return (
            <Link to={item.route(jobTitle)} key={item.name}>
              <div className="px-[48px] py-[8px] text-green-900 text-[18px] hover:bg-green-900 hover:text-white" >{item.name}</div>
            </Link>
          )
        })}
      </nav>
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
  )
}

export default JobPage;
