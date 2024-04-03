import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  elementContent: [],
};

const cmsContentSlice = createSlice({
  name: 'cms-content',
  initialState,
  reducers: {
    setCmsContent: (state, { payload }) => {
      state.elementContent = payload;
    },
  },
});
export default cmsContentSlice;
