/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL_FORECAST, API_KEY } from '../additional/const';

export const fetchForecast = createAsyncThunk(
  'tabForecast/fetchForecast',
  async (cityName, { rejectWithValue }) => {
    try {
      const url = `${SERVER_URL_FORECAST}?q=${cityName}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('ServerError');
      }

      const data = await response.json();

      return {
        cityInfo: data.city,
        listInfo: data.list,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tabForecastSlicer = createSlice({
  name: 'tabForecast',
  initialState: {
    data: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchForecast.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchForecast.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.data = action.payload;
    },
    [fetchForecast.rejected]: (state, action) => {
      state.staus = 'rejected';
      state.error = action.payload;
    },
  },
});

export default tabForecastSlicer.reducer;
export const { update } = tabForecastSlicer.actions;
