import JobPage from '@/pages/Jobs';
import Home from '@/pages/Home';
import FirstJob from '@/pages/FirstJob';
import About from '@/pages/About';
import NowJob from '@/pages/NowJob'
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';

export default function route(): JSX.Element {
  let { invoiceId } = useParams();
  const list = [
    {
      name: '基本資料',
      route: '/'
    }, {
      name: '第一份工作',
      route: '/first-job'
    }, {
      name: '工作相關',
      route: '/about-job'
    }, {
      name: '目前公司',
      route: '/now-job'
    }
  ]
  return (
    <BrowserRouter>
      <div className='flex'>
        <nav className="w-64 h-screen bg-green-50 shadow-xl shadow-emerald-200">
          <div className="h-36 text-green-900 text-xl font-bold text-center py-10">Dashboard</div>
          {list.map((item) => {
            return (
              <Link to={item.route} key={item.name}>
                <div className="px-[48px] py-[8px] text-green-900 text-[18px] hover:bg-green-900 hover:text-white" >{item.name}</div>
              </Link>
            )
          })}
        </nav>
        <Routes>
          <Route path="/:jobTitle" element={<JobPage />}>
            <Route path="first-job" element={<FirstJob />} />
            <Route path="about-job" element={<About />} />
            <Route path="now-job" element={<NowJob />} />
          </Route>
          {/* <Route path="designer">
            <Route path="first-job" element={<FirstJob />} />
            <Route path="about-job" element={<About />} />
            <Route path="now-job" element={<NowJob />} />
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
