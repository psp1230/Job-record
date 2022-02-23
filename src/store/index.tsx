import { configureStore } from '@reduxjs/toolkit';

// 從reducers/index取得combineReducers回傳的物件
import rootReducer from './reducers';

const store = configureStore({
  //初始化store並綁定reducer
  reducer: rootReducer,
});

export default store;
