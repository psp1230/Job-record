import { useParams, Navigate, Link } from 'react-router-dom';

type RouterObject = {
  name: string,
  route: (newJob: string) => string,
};

const list: RouterObject[] = [
  {
    name: '基本資料',
    route(jobTitle) {
      return `/${jobTitle}`;
    },
  }, {
    name: '第一份工作',
    route() {
      return 'first-job';
    },
  }, {
    name: '工作相關',
    route() {
      return 'about-job';
    },
  }, {
    name: '目前公司',
    route() {
      return 'now-job';
    },
  },
];

function NavBar(): JSX.Element {

  const { jobTitle } = useParams();

  if (jobTitle !== 'engineer' && jobTitle !== 'designer') {
    return <Navigate to="/engineer/first-job" />;
  }

  return (
    <nav className="w-64 h-screen bg-green-50 shadow-xl shadow-emerald-200">
      <div className="h-36 text-green-900 text-xl font-bold text-center py-10">Dashboard</div>
      {list.map((item) => {
        return (
          <Link to={item.route(jobTitle)} key={item.name}>
            <div className="px-[48px] py-[8px] text-green-900 text-[18px] hover:bg-green-900 hover:text-white" >{item.name}</div>
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
