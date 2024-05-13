import { createSlice } from '@reduxjs/toolkit';
import { TagsStruct } from './filter.types';

type FilterStruct = {
  tags: TagsStruct[];
};

const initialState: FilterStruct = {
  tags: [],
};

const filterSlice = createSlice({
  name: 'plp:filters',
  initialState,
  reducers: {
    setTags: (state, { payload }: { payload: TagsStruct[] }) => {
      state.tags = payload;
    },
  },
});

export const { setTags } = filterSlice.actions;
export default filterSlice;
