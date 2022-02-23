import { createSlice } from '@reduxjs/toolkit';

const frontendData = createSlice({
  name: 'frontendData',
  initialState: {
    value: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchData } = frontendData.actions;
export default frontendData.reducer;
