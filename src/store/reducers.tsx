import { combineReducers } from "redux";
import frontendDataReducer from "./frontendDataSlice";
import uiDataReducer from "./uiDataSlice";

export default combineReducers({
  frontendData: frontendDataReducer,
  uiData: uiDataReducer,
});
