import { createSlice } from '@reduxjs/toolkit';
import { tryToGetLocalArr } from '../additional/functions/try_to_get_local';
import generateId from '../additional/functions/generate_id';

const selectedCitiesSlicer = createSlice({
  name: 'selectedCities',
  initialState: tryToGetLocalArr('selectedCities'),
  reducers: {
    addToList(state, action) {
      state.push({
        name: action.payload,
        id: generateId(state),
      });
    },
    removeFromList(state, action) {
      return state.filter((city) => city.id !== action.payload);
    },
  },
});

export default selectedCitiesSlicer.reducer;
export const { addToList, removeFromList } = selectedCitiesSlicer.actions;
