import React from 'react';
import Router from './router';
import { Link } from 'react-router-dom';

import './App.css';

const App: React.FC = () => {
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
    // <div className="flex">
    //   <div className="md:w-[17%] h-screen bg-green-50 shadow-xl shadow-emerald-200">
    //     <div className="h-[141px] text-green-900 text-xl font-bold text-center py-[48px]">Dashboard</div>
    //     {list.map((item) => {
    //       return (
    //         <a href={item.route} key={item.route}>
    //           <div className="px-[48px] py-[8px] text-green-900 text-[18px] hover:bg-green-900 hover:text-white" >{item.name}</div>
    //         </a>
    //       )
    //     })}
    //   </div>
    <Router />
    // </div>
  );
};

export default App;
