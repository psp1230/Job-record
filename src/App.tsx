import React, { useEffect } from 'react';
import Router from './router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as frontendDataAction from '@/store/frontendDataSlice';
import * as uiDataAction from '@/store/uiDataSlice';

const { fetchData: fetchFrontendData } = frontendDataAction;
const { fetchData: fetchUIData } = uiDataAction;

import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json',
      )
      .then((res) => {
        dispatch(fetchFrontendData(res.data));
      });
    axios
      .get('https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/ui_data.json')
      .then((res) => {
        dispatch(fetchUIData(res.data));
      });
  }, [dispatch]);
  return <Router />;
};

export default App;
