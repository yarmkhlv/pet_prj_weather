import { createSlice } from '@reduxjs/toolkit';
import { tryToGetLocalObj } from '../additional/functions/try_to_get_local';

const citiesStatsSlicer = createSlice({
  name: 'citiesStats',
  initialState: tryToGetLocalObj('citiesStats'),
  reducers: {
    updCitiesStats(state, action) {
      if (action.payload in state) {
        return { ...state, [action.payload]: state[action.payload] + 1 };
      }
      return {
        ...state,
        [action.payload]: 1,
      };
    },
  },
});

export default citiesStatsSlicer.reducer;
export const { updCitiesStats } = citiesStatsSlicer.actions;
