import { createSlice } from '@reduxjs/toolkit';

const uiData = createSlice({
  name: 'uiData',
  initialState: {
    value: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchData } = uiData.actions;
export default uiData.reducer;
